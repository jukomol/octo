# Testing Guide

## Local Testing

### Prerequisites

Ensure you have installed:
- Ruby 3.x
- Node.js 18+
- Bundler (`gem install bundler`)

### Setup

```bash
# Install dependencies
bundle install
npm install

# Build CSS
npm run build:css

# Build site
bundle exec jekyll build
```

### Run Locally

```bash
# Terminal 1: Watch CSS
npm run watch:css

# Terminal 2: Serve Jekyll with live reload
bundle exec jekyll serve --livereload
```

Visit `http://localhost:4000` to view the site.

### Test Sync Script

The sync script requires a GitHub token:

```bash
export GITHUB_TOKEN="your_github_personal_access_token"
export GITHUB_REPOSITORY="jukomol/octo"
npm run sync
```

**Note**: The script will gracefully exit if the token is not set.

## Automated Testing

### GitHub Actions Workflows

1. **Sync Workflow** (`.github/workflows/sync.yml`)
   - Triggered on issue events, daily cron, or manual
   - Tests: Check workflow logs in Actions tab

2. **Build Workflow** (`.github/workflows/build.yml`)
   - Triggered on push to main or manual
   - Tests: Verify site builds and deploys successfully

### Manual Workflow Triggers

Go to Actions tab → Select workflow → Click "Run workflow"

## Test Checklist

Before deploying:

- [ ] Site builds without errors: `bundle exec jekyll build`
- [ ] CSS compiles correctly: `npm run build:css`
- [ ] All pages are accessible (/, /blog/, /pages/publications.html, etc.)
- [ ] Navigation works on mobile and desktop
- [ ] Issue templates are valid YAML
- [ ] Sync script handles errors gracefully
- [ ] SEO tags are present in HTML
- [ ] Sitemap is generated
- [ ] RSS feed is generated
- [ ] Images load correctly
- [ ] Links are not broken

## Accessibility Testing

### Keyboard Navigation

- [ ] Tab through all interactive elements
- [ ] Mobile menu can be toggled with keyboard
- [ ] All links are focusable
- [ ] Focus indicators are visible

### Screen Reader Testing

- [ ] Semantic HTML elements are used
- [ ] ARIA labels are present where needed
- [ ] Images have alt text
- [ ] Form inputs have labels

### Tools

- Use browser DevTools Lighthouse for automated accessibility checks
- Target: Accessibility score ≥95

## Performance Testing

### Lighthouse Scores

Run Lighthouse in Chrome DevTools:

```bash
# Serve site locally
bundle exec jekyll serve

# Open Chrome DevTools → Lighthouse → Run audit
```

Target scores:
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥90
- SEO: ≥95

### Optimization Tips

- Minify CSS: Already done with Tailwind
- Compress images: Use tools like ImageOptim
- Enable caching: Handled by GitHub Pages
- Lazy load images: Can be added if needed

## Browser Testing

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Issue Template Testing

Create test issues with each template:

1. Create issue with "New Blog Post" template
2. Verify YAML front matter is valid
3. Check sync workflow runs
4. Verify content appears in repository

Repeat for all templates (Publication, Presentation, Resource, Bio, CV).

## Common Issues

### Build Failures

**Error**: `Could not find gem 'jekyll'`
- Solution: Run `bundle install`

**Error**: `Cannot find module '@octokit/rest'`
- Solution: Run `npm install`

**Error**: CSS not updating
- Solution: Run `npm run build:css`

### Sync Issues

**Issue**: Content not syncing
- Check: Issue has correct label
- Check: YAML syntax is valid
- Check: Workflow logs for errors

**Issue**: Data overwritten
- Check: Recent commits
- Restore: From git history

## Reporting Issues

When reporting issues, include:
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if UI issue)
- Browser/OS information
- Relevant logs or error messages
