


// Smooth scroll for navigation links on index.html only
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
  
      // Determine if current page is index.html (or root)
      const currentPath = window.location.pathname;
      const isIndexPage =
        currentPath.endsWith('index.html') ||
        currentPath === '/' ||
        currentPath === '/index.html';
  
      // Only intercept if we're on index.html
      if (isIndexPage) {
        let targetSelector = href;
        // If the href starts with "index.html", remove it to isolate the hash.
        if (href.startsWith('index.html')) {
          targetSelector = href.substring('index.html'.length);
        }
        // Proceed only if targetSelector is an in-page hash (starts with '#')
        if (targetSelector && targetSelector.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(targetSelector);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
            // Update URL hash without causing an instant jump
            history.pushState(null, null, targetSelector);
          }
        }
      }
      // Else, let the browser handle the link normally (for example, on other pages)
    });
  });

// Handle initial page load with hash in URL
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        const sectionId = window.location.hash;
        document.querySelector(sectionId).scrollIntoView();
    }
});





//PARALLAX SCROLL
// Add this to script.js
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('home');
    const bg = document.querySelector('.bg');
    const txt = document.querySelector('.txt');
    const txtBlend = document.querySelector('.txt-blend');
    const fg = document.querySelector('.fg');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        // Adjust speeds (lower values = slower movement)
        bg.style.transform = `translateY(${scrollY * 0.4}px)`;
        txt.style.transform = `translateY(${scrollY * 0.3}px)`;
        txtBlend.style.transform = `translateY(${scrollY * 0.3}px)`;
        fg.style.transform = `translateY(${scrollY * 0.2}px)`;
    });
});








//STICKY TITLE FOR SUB-PAGES

document.addEventListener("DOMContentLoaded", function () {
    const stickySection = document.getElementById("sticky-section");
    const rightColumn = document.querySelector(".right-column");
    const offset = rightColumn.offsetTop - 30; // Triggers stickiness 100px sooner
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > offset) {
        stickySection.classList.add("sticky");
      } else {
        stickySection.classList.remove("sticky");
      }
    });
  });
  