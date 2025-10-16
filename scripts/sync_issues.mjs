#!/usr/bin/env node

import { Octokit } from '@octokit/rest';
import yaml from 'js-yaml';
import slugify from 'slugify';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// Configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.GITHUB_REPOSITORY?.split('/')[0] || 'jukomol';
const REPO_NAME = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'octo';

// Label to directory mapping
const LABEL_MAP = {
  'post': '_posts',
  'pub': '_pubs',
  'presentation': '_talks',
  'resource': '_resources',
  'bio': '_data',
  'cv': '_data'
};

// Initialize Octokit
const octokit = new Octokit({
  auth: GITHUB_TOKEN,
  request: {
    timeout: 10000
  }
});

/**
 * Safely parse YAML front matter from markdown content
 */
function parseFrontMatter(content) {
  try {
    const fenceMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
    
    if (!fenceMatch) {
      console.warn('  ⚠️  No YAML front matter found');
      return { frontMatter: {}, body: content };
    }
    
    const frontMatter = yaml.load(fenceMatch[1]);
    const body = fenceMatch[2].trim();
    
    return { frontMatter: frontMatter || {}, body };
  } catch (error) {
    console.error('  ❌ Error parsing front matter:', error.message);
    return { frontMatter: {}, body: content };
  }
}

/**
 * Generate filename based on content type and front matter
 */
function generateFilename(label, frontMatter, issueNumber) {
  const slug = frontMatter.title 
    ? slugify(frontMatter.title, { lower: true, strict: true })
    : `issue-${issueNumber}`;
  
  if (label === 'post') {
    const date = frontMatter.date || new Date().toISOString().split('T')[0];
    return `${date}-${slug}.md`;
  }
  
  return `${slug}.md`;
}

/**
 * Ensure directory exists
 */
async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error(`  ❌ Error creating directory ${dirPath}:`, error.message);
  }
}

/**
 * Write file with error handling
 */
async function writeFileSafe(filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf8');
    console.log(`  ✅ Wrote: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`  ❌ Error writing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Process a blog post, publication, presentation, or resource issue
 */
async function processContentIssue(issue, label) {
  const { frontMatter, body } = parseFrontMatter(issue.body || '');
  
  if (!frontMatter.title) {
    console.warn(`  ⚠️  Skipping: No title in front matter`);
    return false;
  }
  
  const dir = path.join(ROOT, LABEL_MAP[label]);
  await ensureDir(dir);
  
  const filename = generateFilename(label, frontMatter, issue.number);
  const filePath = path.join(dir, filename);
  
  // Reconstruct the markdown file
  const fileContent = `---\n${yaml.dump(frontMatter)}---\n\n${body}`;
  
  return await writeFileSafe(filePath, fileContent);
}

/**
 * Process bio update issue
 */
async function processBioIssue(issue) {
  const { frontMatter } = parseFrontMatter(issue.body || '');
  
  if (!frontMatter || Object.keys(frontMatter).length === 0) {
    console.warn(`  ⚠️  Skipping: No valid bio data`);
    return false;
  }
  
  const bioPath = path.join(ROOT, '_data', 'bio.yml');
  
  // Read existing bio to merge
  let existingBio = {};
  try {
    const existingContent = await fs.readFile(bioPath, 'utf8');
    existingBio = yaml.load(existingContent) || {};
  } catch (error) {
    console.log('  ℹ️  No existing bio.yml, creating new one');
  }
  
  // Merge with existing, new data takes precedence
  const mergedBio = { ...existingBio, ...frontMatter };
  
  const bioContent = yaml.dump(mergedBio);
  return await writeFileSafe(bioPath, bioContent);
}

/**
 * Process CV update issue
 */
async function processCVIssue(issue) {
  const lines = (issue.body || '').split('\n');
  let cvPath = null;
  
  // Extract CV path from issue body
  for (const line of lines) {
    if (line.includes('/assets/cv/') || line.includes('.pdf')) {
      cvPath = line.trim();
      break;
    }
  }
  
  if (!cvPath) {
    console.warn(`  ⚠️  Skipping: No CV path found in issue`);
    return false;
  }
  
  const bioPath = path.join(ROOT, '_data', 'bio.yml');
  
  // Read existing bio
  let bio = {};
  try {
    const existingContent = await fs.readFile(bioPath, 'utf8');
    bio = yaml.load(existingContent) || {};
  } catch (error) {
    console.log('  ℹ️  No existing bio.yml found');
  }
  
  // Update CV path
  bio.download_cv = cvPath;
  
  const bioContent = yaml.dump(bio);
  return await writeFileSafe(bioPath, bioContent);
}

/**
 * Create fallback data files if they don't exist
 */
async function ensureFallbackData() {
  console.log('\n📋 Ensuring fallback data files...');
  
  const dataDir = path.join(ROOT, '_data');
  await ensureDir(dataDir);
  
  // Fallback bio.yml
  const bioPath = path.join(dataDir, 'bio.yml');
  try {
    await fs.access(bioPath);
    console.log('  ✅ bio.yml exists');
  } catch {
    const defaultBio = {
      name: 'Jahir Uddin',
      tagline: 'Expanding Horizon',
      title: 'Graduate Research Assistant',
      institution: 'University of Nebraska Medical Center',
      email: 'juddin@unmc.edu',
      photo: '/assets/img/profile.jpg',
      download_cv: '/assets/cv/Jahir_Uddin_CV.pdf',
      summary: 'PhD student researching AI-driven environmental and occupational safety systems.',
      profiles: [
        { name: 'Google Scholar', url: 'https://scholar.google.com/' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/' },
        { name: 'GitHub', url: 'https://github.com/jukomol' }
      ]
    };
    await writeFileSafe(bioPath, yaml.dump(defaultBio));
  }
  
  // Fallback site.yml
  const sitePath = path.join(dataDir, 'site.yml');
  try {
    await fs.access(sitePath);
    console.log('  ✅ site.yml exists');
  } catch {
    const defaultSite = {
      site_name: 'Jahir Uddin',
      description: 'Academic Portfolio and Research Website',
      baseurl: '',
      url: 'https://jukomol.github.io',
      social: [
        { name: 'GitHub', url: 'https://github.com/jukomol', icon: 'github' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/', icon: 'linkedin' },
        { name: 'Google Scholar', url: 'https://scholar.google.com/', icon: 'scholar' }
      ],
      theme: {
        primary: '#1E3A8A',
        accent: '#0EA5E9'
      },
      giscus: {
        enabled: false,
        repo: '',
        repo_id: '',
        category: '',
        category_id: ''
      }
    };
    await writeFileSafe(sitePath, yaml.dump(defaultSite));
  }
  
  // Fallback contact.yml
  const contactPath = path.join(dataDir, 'contact.yml');
  try {
    await fs.access(contactPath);
    console.log('  ✅ contact.yml exists');
  } catch {
    const defaultContact = {
      email: 'juddin@unmc.edu',
      office: 'University of Nebraska Medical Center',
      availability: 'Available for collaboration and research opportunities'
    };
    await writeFileSafe(contactPath, yaml.dump(defaultContact));
  }
}

/**
 * Fetch and process issues
 */
async function syncIssues() {
  console.log('\n🔄 Starting issue sync...\n');
  console.log(`Repository: ${REPO_OWNER}/${REPO_NAME}\n`);
  
  if (!GITHUB_TOKEN) {
    console.error('❌ GITHUB_TOKEN not set. Exiting gracefully.');
    process.exit(0);
  }
  
  try {
    // Ensure fallback data exists
    await ensureFallbackData();
    
    // Fetch open issues
    console.log('📥 Fetching open issues...');
    const { data: issues } = await octokit.issues.listForRepo({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      state: 'open',
      per_page: 100
    });
    
    console.log(`Found ${issues.length} open issue(s)\n`);
    
    let processed = 0;
    let skipped = 0;
    
    for (const issue of issues) {
      const labels = issue.labels.map(l => typeof l === 'string' ? l : l.name);
      const relevantLabel = labels.find(l => Object.keys(LABEL_MAP).includes(l));
      
      if (!relevantLabel) {
        continue;
      }
      
      console.log(`\n📝 Processing Issue #${issue.number}: ${issue.title}`);
      console.log(`   Label: ${relevantLabel}`);
      
      try {
        let success = false;
        
        if (relevantLabel === 'bio') {
          success = await processBioIssue(issue);
        } else if (relevantLabel === 'cv') {
          success = await processCVIssue(issue);
        } else {
          success = await processContentIssue(issue, relevantLabel);
        }
        
        if (success) {
          processed++;
        } else {
          skipped++;
        }
      } catch (error) {
        console.error(`  ❌ Error processing issue #${issue.number}:`, error.message);
        skipped++;
      }
    }
    
    console.log('\n' + '='.repeat(50));
    console.log(`✅ Sync complete!`);
    console.log(`   Processed: ${processed}`);
    console.log(`   Skipped: ${skipped}`);
    console.log('='.repeat(50) + '\n');
    
  } catch (error) {
    console.error('\n❌ Fatal error during sync:', error.message);
    console.error('Stack:', error.stack);
    console.log('\n⚠️  Exiting gracefully to avoid breaking the site\n');
    process.exit(0); // Exit with 0 to not fail the workflow
  }
}

// Run the sync
syncIssues();
