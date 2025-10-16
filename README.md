# Jahir Uddin - Academic Portfolio Website

A fully responsive, accessible, and fault-tolerant academic website powered by GitHub Issues as a CMS. Built with Jekyll, Tailwind CSS, and GitHub Actions for seamless content management and deployment.

## 🌟 Features

- **GitHub Issues as CMS**: Manage all content (posts, publications, presentations, resources) through GitHub Issues - [See detailed guide](/docs/CONTENT_CREATION.md)
- **Fully Responsive**: Mobile-first design with Tailwind CSS
- **Accessible**: WCAG AA+ compliant with semantic HTML and keyboard navigation
- **SEO Optimized**: Built-in SEO tags, sitemap, and schema.org markup
- **Fault-Tolerant**: Robust error handling ensures the site never breaks
- **Automated Workflows**: Auto-sync content and deploy to GitHub Pages
- **Performance**: Lighthouse score ≥90 across all categories

## 📁 Repository Structure

```
.
├── _config.yml                 # Jekyll configuration
├── _layouts/                   # Page layouts
│   ├── default.html
│   ├── home.html
│   ├── post.html
│   ├── pub.html
│   ├── talk.html
│   └── resource.html
├── _includes/                  # Reusable components
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   ├── seo.html
│   └── social-icons.html
├── _data/                      # Data files
│   ├── bio.yml                # Personal information
│   ├── site.yml               # Site configuration
│   └── contact.yml            # Contact information
├── _posts/                     # Blog posts (auto-generated)
├── _pubs/                      # Publications (auto-generated)
├── _talks/                     # Presentations (auto-generated)
├── _resources/                 # Resources (auto-generated)
├── pages/                      # Static pages
│   ├── cv.md
│   ├── publications.md
│   ├── presentations.md
│   ├── resources.md
│   └── contact.md
├── assets/                     # Static assets
│   ├── css/
│   ├── img/
│   └── cv/
├── scripts/
│   └── sync_issues.mjs        # Issue sync script
├── .github/
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   └── workflows/             # GitHub Actions workflows
├── Gemfile                     # Ruby dependencies
├── package.json               # Node.js dependencies
└── tailwind.config.js         # Tailwind configuration
```

## 🚀 Quick Start

### Prerequisites

- Ruby 3.x
- Node.js 18+
- Bundler (`gem install bundler`)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/jukomol/octo.git
   cd octo
   ```

2. **Install dependencies**
   ```bash
   bundle install
   npm install
   ```

3. **Build Tailwind CSS**
   ```bash
   npm run build:css
   ```

4. **Run Jekyll locally**
   ```bash
   bundle exec jekyll serve
   ```

5. **Visit** `http://localhost:4000`

### Watch Mode (for development)

```bash
# Terminal 1: Watch Tailwind CSS
npm run watch:css

# Terminal 2: Run Jekyll with live reload
bundle exec jekyll serve --livereload
```

## 📝 Content Management

All content is managed through GitHub Issues using labels as content types.

### Quick Start: Creating Content

1. Go to the **Issues** tab in your repository
2. Click **New Issue**
3. Select the appropriate template:
   - **📝 New Blog Post** (label: `post`) - Research updates, tutorials, thoughts
   - **📚 New Publication** (label: `pub`) - Papers, articles, conference proceedings
   - **🎤 New Presentation** (label: `presentation`) - Conference talks, seminars, posters
   - **🔗 New Resource** (label: `resource`) - Datasets, code, tools
   - **👤 Update Bio** (label: `bio`) - Personal information and profile
   - **📄 Update CV** (label: `cv`) - CV download link
4. Fill in the template with your content
5. Submit the issue
6. Content appears on your site in 1-2 minutes!

### 📚 Comprehensive Content Creation Guide

For detailed instructions, complete examples, and best practices, see:

**[📖 CONTENT_CREATION.md](/docs/CONTENT_CREATION.md)** - Complete guide with:
- Step-by-step tutorials for each content type
- Real-world examples for blog posts, publications, presentations, and resources
- YAML formatting guidelines and common pitfalls
- Best practices and troubleshooting tips
- Visual guides and tips for great content

### Quick Reference: Front Matter Examples

<details>
<summary><b>Blog Post</b></summary>

```yaml
---
title: "Understanding Tractor Operator Safety"
date: 2025-10-16
tags: [computer vision, EHS]
summary: "Exploring AI-powered safety in agriculture."
cover: https://example.com/image.jpg
---

Your markdown content here...
```
</details>

<details>
<summary><b>Publication</b></summary>

```yaml
---
title: "Smart Agricultural Operator Monitoring System (AG-OMS V2)"
authors: "J. Uddin, B. Lowndes, A. Yoder"
venue: "IEEE AgriTech, 2025"
doi: "10.xxxx/xxxxx"
pdf: https://example.com/paper.pdf
code: https://github.com/username/repo
---

Abstract and description...
```
</details>

<details>
<summary><b>Presentation</b></summary>

```yaml
---
title: "AI for Safer Farms"
event: "UNMC Research Day"
date: 2025-09-20
slides: https://example.com/slides.pdf
video: https://youtube.com/watch?v=...
---

Presentation description...
```
</details>

<details>
<summary><b>Resource</b></summary>

```yaml
---
title: "Dataset: Tractor Climb Safety Video Set"
url: https://example.com/dataset
category: "Dataset"
notes: "Synthetic and real-world operator data."
---

Resource description...
```
</details>

<details>
<summary><b>Bio Update</b></summary>

```yaml
---
name: "Jahir Uddin"
tagline: "Expanding Horizon"
title: "Graduate Research Assistant"
institution: "University of Nebraska Medical Center"
email: "juddin@unmc.edu"
profiles:
  - {name: "Google Scholar", url: "https://scholar.google.com/..."}
  - {name: "LinkedIn", url: "https://linkedin.com/in/..."}
  - {name: "GitHub", url: "https://github.com/jukomol"}
photo: /assets/img/profile.jpg
download_cv: /assets/cv/Jahir_Uddin_CV.pdf
summary: |
  PhD student working on AI-enabled safety systems for agriculture.
---
```
</details>

## ⚙️ Configuration

### Site Settings

Edit `_data/site.yml` to customize:
- Site name and description
- Social media links
- Theme colors
- Giscus comments (optional)

### Personal Information

Edit `_data/bio.yml` to update:
- Name, tagline, title
- Institution and email
- Profile photo and CV link
- Bio summary
- Social profiles

### Theme Customization

Edit `tailwind.config.js` to change colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1E3A8A',  // Change primary color
      accent: '#0EA5E9',   // Change accent color
    },
  },
}
```

Then rebuild CSS:
```bash
npm run build:css
```

## 🔄 Automated Workflows

### Issue Sync Workflow
- **Trigger**: When issues are opened, edited, or labeled; daily at midnight; manual
- **Action**: Syncs content from GitHub Issues to repository files
- **Safety**: Never fails the build; logs warnings for invalid issues

### Build & Deploy Workflow
- **Trigger**: Push to `main` branch; manual
- **Action**: Builds Tailwind CSS, Jekyll site, and deploys to GitHub Pages
- **Safety**: Graceful handling of partial failures

## 🛠️ Troubleshooting

### Site not building?
1. Check workflow runs in the **Actions** tab
2. Ensure all required dependencies are in `Gemfile` and `package.json`
3. Verify YAML front matter is valid in issues

### Content not showing?
1. Check if the issue has the correct label
2. Verify YAML front matter is properly formatted
3. Run sync manually: `npm run sync`
4. Check `_posts/`, `_pubs/`, `_talks/`, `_resources/` directories

### CSS not updating?
1. Rebuild Tailwind: `npm run build:css`
2. Clear Jekyll cache: `rm -rf .jekyll-cache _site`
3. Restart Jekyll server

### Sync errors?
1. Check `GITHUB_TOKEN` permissions
2. Review issue body format
3. Check script logs in workflow run

### Need more help?
See the **[Content Creation Guide](/docs/CONTENT_CREATION.md)** for detailed troubleshooting, examples, and best practices.

## 📊 Performance

The site is optimized for:
- **Performance**: ≥90 Lighthouse score
- **Accessibility**: ≥95 Lighthouse score
- **SEO**: ≥95 Lighthouse score
- **Best Practices**: ≥90 Lighthouse score

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Jahir Uddin**
- Email: juddin@unmc.edu
- Institution: University of Nebraska Medical Center
- GitHub: [@jukomol](https://github.com/jukomol)

## 🙏 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)
- Automated with [GitHub Actions](https://github.com/features/actions)