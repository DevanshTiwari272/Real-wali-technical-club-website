# Add the Web Dev domain page to your project

1. Unzip this over your project root (same folder names). It adds:
   - webdev.html
   - src/main-webdev.jsx
   - src/pages/WebDevPage.jsx
   - src/components/CodeIntro.jsx
   - src/components/WebDevHero.jsx
   - src/data/webdev.js
   - src/styles/webdev.css

2. It reuses these files from the main project, so make sure you have them:
   src/lib/motion.js, src/styles/base.css,
   src/components/Window.jsx, Nav.jsx, Section.jsx, Rows.jsx, Banner.jsx, Footer.jsx

3. Register the page in vite.config.js (inside build.rollupOptions.input):
   webdev: resolve(__dirname, 'webdev.html')

   Full block:
   input: {
     main: resolve(__dirname, 'index.html'),
     webdev: resolve(__dirname, 'webdev.html')
   }

4. Link to it from the home page, in src/pages/HomePage.jsx, add to LINKS:
   ['Web Dev', 'webdev.html']

5. Run: npm run dev, then open /webdev.html
