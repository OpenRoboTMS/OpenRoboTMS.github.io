# OpenRoboTMS Project Page

This repository is about the webpage for the project OpenRoboTMS at https://openrobotms.github.io/.

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


## Tips

- Compress images with [TinyPNG](https://tinypng.com) for better performance
- Use YouTube for large videos (>10MB) to reduce repository size
- Replace the favicon in `static/images/` with your own
- Test changes locally with Docker before deploying
- Use hard refresh (`Ctrl+Shift+R` or `Cmd+Shift+R`) to clear browser cache
- Compatible with GitHub Pages for deployment


## Website License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
