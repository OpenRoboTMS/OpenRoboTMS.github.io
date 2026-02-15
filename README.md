# Academic Project Page

An academic project page with modern design, SEO optimization, and mobile support.

## Local Development with Docker

This project includes Docker support for easy local development and preview.

### Prerequisites
- [Docker](https://www.docker.com/get-started) and Docker Compose installed on your system

### Running the Project

1. **Start the server** (runs in the background):
   ```bash
   docker compose up -d
   ```

2. **View the site** in your browser:
   ```
   http://localhost:8080
   ```

3. **View logs** (optional):
   ```bash
   docker compose logs -f web
   ```

4. **Stop the server**:
   ```bash
   docker compose down
   ```

### Making Changes
- Edit `index.html` or files in the `static/` directory
- Changes are reflected immediately (you might need to hard refresh your browser)
- **Hard refresh**: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

## Editing the Website

The project uses HTML for content and CSS for styling.

### Main Files
- `index.html` - Main content file with HTML "building blocks"
- `static/css/` - Stylesheets for design and layout
- `static/js/` - JavaScript for interactive components
- `static/images/` - Images, icons, and favicon
- `static/videos/` - Video files
- `static/pdfs/` - PDF documents

### Quick Start Guide
1. Edit `index.html` to update your content
2. Use or comment out the HTML sections you need
3. Replace placeholder content marked with `TODO` comments
4. **IMPORTANT:** Replace `static/images/favicon.ico` with your own icon

## Components

- Teaser video
- Image carousel
- YouTube video embedding
- Video carousel
- PDF poster viewer
- BibTeX citation

## Customization

The HTML file has TODO comments showing what to replace:

- Paper title, authors, institution, conference
- Links (arXiv, GitHub, etc.)
- Abstract and descriptions  
- Videos, images, and PDFs
- Related works in the dropdown
- Meta tags for SEO and social sharing

### Meta Tags
The template includes meta tags for better search engine visibility and social media sharing. These appear in the `<head>` section and help with:
- Google Scholar indexing
- Social media previews (Twitter, Facebook, LinkedIn)
- Search engine optimization

Create a 1200x630px social preview image at `static/images/social_preview.png`.

## Tips

- Compress images with [TinyPNG](https://tinypng.com) for better performance
- Use YouTube for large videos (>10MB) to reduce repository size
- Replace the favicon in `static/images/` with your own
- Test changes locally with Docker before deploying
- Use hard refresh (`Ctrl+Shift+R` or `Cmd+Shift+R`) to clear browser cache
- Compatible with GitHub Pages for deployment

## Acknowledgments
Parts of this project page were adopted from the [Nerfies](https://nerfies.github.io/) page.

## Website License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
