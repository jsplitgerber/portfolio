


// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Update URL hash without default jump behavior
        history.pushState(null, null, sectionId);
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
    const subtitle = document.querySelector('.subtitle');
    const fg = document.querySelector('.fg');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        // Adjust speeds (lower values = slower movement)
        bg.style.transform = `translateY(${scrollY * 0.4}px)`;
        txt.style.transform = `translateY(${scrollY * 0.3}px)`;
        txtBlend.style.transform = `translateY(${scrollY * 0.3}px)`;
        subtitle.style.transform = `translateY(${scrollY * 0.3}px)`;
        fg.style.transform = `translateY(${scrollY * 0.2}px)`;
    });
});





//FLICKITY CAROUSEL

// Initialize Flickity
const carousel = new Flickity('.carousel', {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    lazyLoad: false,
    pageDots: false,
    selectedAttraction: 0.01,
    friction: 0.15,
});






//VIDEO PLAYER
    // Initialize all players after the YouTube API is ready
    document.querySelectorAll('.plyr__video-embed').forEach((container) => {
        const player = new Plyr(container, {
            ratio: '16:9', // Enforce 16:9 ratio
          youtube: {
            noCookie: true,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            origin: window.location.origin,
          },
          vimeo: {
            byline: false,
            portrait: false,
            title: false,
            transparent: false,
            responsive: true
        },
        
          autoplay: false, // Disable autoplay (optional)
          displayDuration: true,
          fullscreen: { enabled: true },
          settings: ['quality'],
          controls: [
            'play',
            'progress',
            'current-time',
            'mute',
            'volume',
            'settings',
            'fullscreen'
          ]
        });
      });

