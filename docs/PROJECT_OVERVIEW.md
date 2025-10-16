# Project Overview

## Summary

A fully responsive, accessible, and fault-tolerant academic website for Jahir Uddin, Graduate Research Assistant at the University of Nebraska Medical Center. The site uses GitHub Issues as a content management system, with automated synchronization and deployment via GitHub Actions.

## Key Features

### Content Management
- **GitHub Issues as CMS**: All content managed through labeled issues
- **Automated Sync**: Daily synchronization + event-based triggers
- **Fault-Tolerant**: Graceful error handling, never breaks the site
- **Six Content Types**: Posts, Publications, Presentations, Resources, Bio, CV

### Technical Stack
- **Framework**: Jekyll 4.4+
- **Styling**: Tailwind CSS 3.4+
- **Automation**: GitHub Actions
- **Hosting**: GitHub Pages
- **Language**: Ruby 3.x + Node.js 20+

### Design & Accessibility
- **Responsive**: Mobile-first, works on all devices
- **Accessible**: WCAG AA+ compliant
- **SEO**: jekyll-seo-tag, sitemap, RSS feed
- **Performance**: Lighthouse ≥90 all categories

## Repository Structure

```
octo/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page templates
│   ├── default.html
│   ├── home.html
│   ├── post.html
│   ├── pub.html
│   ├── talk.html
│   └── resource.html
├── _includes/               # Reusable components
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   └── social-icons.html
├── _data/                   # YAML data files
│   ├── bio.yml             # Personal information
│   ├── site.yml            # Site configuration
│   └── contact.yml         # Contact details
├── _posts/                  # Blog posts (auto-generated)
├── _pubs/                   # Publications (auto-generated)
├── _talks/                  # Presentations (auto-generated)
├── _resources/              # Resources (auto-generated)
├── pages/                   # Static pages
│   ├── cv.md
│   ├── publications.md
│   ├── presentations.md
│   ├── resources.md
│   └── contact.md
├── assets/                  # Static assets
│   ├── css/
│   ├── img/
│   └── cv/
├── scripts/
│   └── sync_issues.mjs     # Issue sync script
├── .github/
│   ├── ISSUE_TEMPLATE/     # Content creation templates
│   └── workflows/          # CI/CD workflows
├── docs/                    # Documentation
│   ├── AUTOMATION.md
│   ├── DEPLOYMENT.md
│   └── TESTING.md
├── Gemfile                  # Ruby dependencies
├── package.json            # Node dependencies
├── tailwind.config.js      # Tailwind config
├── README.md               # Main documentation
├── CONTRIBUTING.md         # Contribution guidelines
└── LICENSE                 # MIT License
```

## Content Types

### 1. Blog Posts (label: `post`)
- Location: `_posts/YYYY-MM-DD-slug.md`
- Layout: `post.html`
- Front matter: title, date, tags, summary, cover

### 2. Publications (label: `pub`)
- Location: `_pubs/slug.md`
- Layout: `pub.html`
- Front matter: title, authors, venue, doi, pdf, code

### 3. Presentations (label: `presentation`)
- Location: `_talks/slug.md`
- Layout: `talk.html`
- Front matter: title, event, date, slides, video

### 4. Resources (label: `resource`)
- Location: `_resources/slug.md`
- Layout: `resource.html`
- Front matter: title, url, category, notes

### 5. Bio Update (label: `bio`)
- Location: `_data/bio.yml`
- Merged with existing data
- Front matter: name, tagline, title, institution, email, profiles, photo, download_cv, summary

### 6. CV Update (label: `cv`)
- Location: `_data/bio.yml` (download_cv field)
- Updates CV download link

## Workflows

### Sync Workflow
- **File**: `.github/workflows/sync.yml`
- **Triggers**: Issue events, daily cron, manual
- **Function**: Syncs content from issues to repository
- **Safety**: Exits gracefully on errors, logs warnings

### Build Workflow
- **File**: `.github/workflows/build.yml`
- **Triggers**: Push to main, manual
- **Function**: Builds and deploys site to GitHub Pages
- **Steps**: Setup → Install → Build CSS → Build Jekyll → Deploy

## Pages

### Home (`/`)
- Profile photo and bio
- Recent blog posts
- Recent publications
- Links to all sections

### CV (`/pages/cv.html`)
- Download CV button
- Contact information
- Bio summary
- Online profiles

### Publications (`/pages/publications.html`)
- All publications
- Search functionality
- Links to PDF, code, DOI

### Presentations (`/pages/presentations.html`)
- All presentations
- Search functionality
- Links to slides, video

### Blog (`/blog/`)
- All blog posts
- Search and tag filtering
- Chronological listing

### Resources (`/pages/resources.html`)
- All resources
- Category filtering
- Search functionality

### Contact (`/pages/contact.html`)
- Email and contact info
- Social media links
- Office location

## Error Handling

### Script Level
- Try/catch blocks around all API calls
- Graceful exit on fatal errors (exit code 0)
- Detailed logging with warnings
- Skip invalid issues, continue processing

### Data Level
- Fallback data files always present
- Merge strategy preserves existing data
- Validation before file writes
- Safe YAML parsing with error recovery

### Site Level
- Empty states for missing content
- Conditional rendering in templates
- Graceful degradation for missing data
- Always builds successfully

## Customization

### Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1E3A8A',
  accent: '#0EA5E9',
}
```

### Personal Info
Edit `_data/bio.yml`:
```yaml
name: "Your Name"
tagline: "Your Tagline"
email: "your.email@example.com"
```

### Site Settings
Edit `_data/site.yml`:
```yaml
site_name: "Your Name"
description: "Your Description"
```

## Quick Start

```bash
# Install dependencies
bundle install
npm install

# Build CSS
npm run build:css

# Run locally
bundle exec jekyll serve

# Visit
open http://localhost:4000
```

## Deployment

1. Push to `main` branch
2. GitHub Actions builds site
3. Deploys to GitHub Pages
4. Visit at `https://username.github.io/repo`

## Documentation

- **README.md**: Main documentation and quick start
- **CONTRIBUTING.md**: Contribution guidelines
- **docs/CONTENT_CREATION.md**: Comprehensive guide for creating content (posts, publications, presentations, resources)
- **docs/AUTOMATION.md**: Workflow and script details
- **docs/DEPLOYMENT.md**: Deployment guide
- **docs/TESTING.md**: Testing procedures
- **LICENSE**: MIT License

## Support

- GitHub Issues: Bug reports and feature requests
- Documentation: Comprehensive guides in `/docs`
- Examples: Sample content provided

## Quality Metrics

### Performance
- Lighthouse Performance: ≥90
- Page load time: <3s
- CSS size: ~13KB (minified)

### Accessibility
- WCAG AA+ compliant
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

### SEO
- jekyll-seo-tag integration
- Sitemap generation
- RSS feed
- Schema.org markup
- Open Graph tags

### Reliability
- Never crashes on bad input
- Graceful error handling
- Fallback data always present
- Comprehensive logging

## Future Enhancements

Potential additions:
- [ ] Comments system (Giscus ready)
- [ ] Analytics integration
- [ ] Image optimization
- [ ] Dark mode toggle
- [ ] Advanced search
- [ ] Tag cloud
- [ ] Archive page
- [ ] Print stylesheet

## License

MIT License - See LICENSE file

## Credits

- Jekyll: Static site generator
- Tailwind CSS: Utility-first CSS framework
- GitHub Pages: Free hosting
- GitHub Actions: CI/CD automation

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Maintainer**: Jahir Uddin
