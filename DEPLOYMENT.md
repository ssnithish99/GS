# Deployment Guide

This guide will help you deploy the GS Group website to GitHub Pages.

## Quick Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `gs-group-website` (or any name you prefer)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

### 2. Upload Your Code

**Option A: Using Git Command Line**
```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: GS Group website"

# Add your GitHub repository as origin
git remote add origin https://github.com/yourusername/gs-group-website.git

# Push to GitHub
git push -u origin main
```

**Option B: Using GitHub Desktop**
1. Download and install GitHub Desktop
2. Click "Add an Existing Repository from your Hard Drive"
3. Select your project folder
4. Publish to GitHub

**Option C: Upload via GitHub Web Interface**
1. Go to your empty repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all your project files
4. Commit the changes

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically deploy your site

### 4. Access Your Website

After the deployment completes (usually 2-5 minutes):
- Your website will be available at: `https://yourusername.github.io/gs-group-website`
- Check the "Actions" tab to see deployment status

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project locally:
```bash
npm run build
```

2. In GitHub Pages settings, select "Deploy from a branch"
3. Choose "gh-pages" branch
4. Upload the contents of the `out` folder to the `gh-pages` branch

## Custom Domain (Optional)

To use your own domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. In GitHub Pages settings, add your custom domain
3. Configure your domain's DNS to point to GitHub Pages

## Troubleshooting

### Common Issues:

**Build Fails:**
- Check that all dependencies are listed in `package.json`
- Ensure there are no TypeScript errors
- Check the Actions tab for detailed error logs

**Images Not Loading:**
- Make sure image URLs are absolute (starting with https://)
- Check that image paths are correct

**404 Errors:**
- Ensure `next.config.js` has `output: 'export'`
- Check that all internal links use proper routing

### Getting Help:

1. Check the Actions tab for build logs
2. Open an issue in the repository
3. Contact support at hello@gsgroup.com

## Environment Variables

If you need environment variables:

1. Add them to GitHub repository secrets
2. Reference them in the workflow file
3. Update the build process accordingly

## Performance Optimization

The website is already optimized with:
- Static export for fast loading
- Optimized images
- Minified CSS and JavaScript
- SEO-friendly structure

Your website should achieve excellent performance scores on Google PageSpeed Insights!