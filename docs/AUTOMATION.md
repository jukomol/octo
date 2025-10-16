# Automation Documentation

## Overview

This website uses GitHub Actions to automatically sync content from GitHub Issues and deploy to GitHub Pages.

## Workflows

### 1. Sync Workflow (`sync.yml`)

**Purpose**: Syncs content from GitHub Issues to repository files.

**Triggers**:
- Issue events (opened, edited, labeled)
- Daily cron job (midnight UTC)
- Manual dispatch

**Process**:
1. Checks out repository
2. Installs Node.js dependencies
3. Runs `sync_issues.mjs` script
4. Commits and pushes changes (if any)

**Error Handling**:
- Script exits gracefully on API errors
- Invalid issues are skipped with warnings
- Maintains existing data on failure

### 2. Build Workflow (`build.yml`)

**Purpose**: Builds and deploys the website to GitHub Pages.

**Triggers**:
- Push to `main` branch
- Manual dispatch

**Process**:
1. Checks out repository
2. Sets up Ruby and Node.js
3. Installs dependencies
4. Builds Tailwind CSS
5. Builds Jekyll site
6. Deploys to GitHub Pages

## Sync Script (`sync_issues.mjs`)

### Features

- **Robust Error Handling**: Never crashes the workflow
- **Fallback Data**: Ensures critical data files exist
- **Safe Merging**: Preserves existing data when updating
- **Clear Logging**: Detailed console output for debugging

### Label Mapping

| Label | Destination | Type |
|-------|------------|------|
| `post` | `_posts/` | Blog posts |
| `pub` | `_pubs/` | Publications |
| `presentation` | `_talks/` | Presentations |
| `resource` | `_resources/` | Resources |
| `bio` | `_data/bio.yml` | Profile info |
| `cv` | `_data/bio.yml` | CV link |

### Front Matter Parsing

The script:
1. Extracts YAML between `---` fences
2. Parses with `js-yaml`
3. Validates required fields
4. Generates appropriate filename
5. Creates markdown file

### Filename Generation

- **Posts**: `YYYY-MM-DD-slug.md` (from date + title)
- **Others**: `slug.md` (from title)
- **Fallback**: `issue-{number}.md` (if no title)

### Error Recovery

- Invalid YAML: Skips issue, logs warning
- Missing title: Skips issue, logs warning
- API failure: Exits gracefully (exit code 0)
- Missing data files: Creates fallback versions

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GITHUB_TOKEN` | GitHub API token | Yes |
| `GITHUB_REPOSITORY` | Repository (owner/name) | Yes |

## Debugging

### Check Workflow Runs

1. Go to **Actions** tab
2. Select the workflow run
3. Review logs for errors

### Common Issues

**Content not syncing?**
- Verify issue has correct label
- Check YAML front matter format
- Review sync workflow logs

**Build failing?**
- Check Jekyll/Tailwind errors in logs
- Verify dependencies are up to date
- Test build locally

**Invalid data?**
- Script skips invalid issues
- Check workflow logs for warnings
- Fix front matter and re-save issue

## Manual Sync

To manually sync issues locally:

```bash
export GITHUB_TOKEN="your_token_here"
export GITHUB_REPOSITORY="owner/repo"
npm run sync
```

## Best Practices

1. **Test Front Matter**: Validate YAML before saving issue
2. **Use Templates**: Issue templates ensure correct format
3. **Monitor Logs**: Check workflow logs regularly
4. **Backup Data**: Commit important data files manually
5. **Test Locally**: Build site locally before deploying

## Security

- Never commit `GITHUB_TOKEN` to repository
- Use repository secrets for sensitive data
- Limit workflow permissions to minimum needed
- Review automated commits regularly

## Troubleshooting Guide

### Sync Not Working

1. Check issue has correct label
2. Verify YAML syntax is valid
3. Review sync workflow logs
4. Check repository permissions

### Build Failing

1. Test locally: `bundle exec jekyll build`
2. Check Ruby/Node versions
3. Verify all dependencies installed
4. Review build logs for errors

### Missing Content

1. Confirm issue is open
2. Check label is applied
3. Wait for sync workflow to complete
4. Manually trigger sync if needed

### Data Overwritten

1. Check sync script logic
2. Review recent commits
3. Restore from Git history if needed
4. Update bio.yml manually

## Support

For issues or questions:
- Open a GitHub issue
- Check existing documentation
- Review workflow logs
- Contact maintainer
