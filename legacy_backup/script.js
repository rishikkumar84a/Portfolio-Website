// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 100,
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Add box shadow to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '15px 0';
    }
});

// Navigation active state with IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Function to set the active navigation link
    function setActiveLink(id) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    }

    // IntersectionObserver options
    const options = {
        root: null, // viewport as root
        rootMargin: '-10% 0px -80% 0px', // Adjust these values to control when sections are considered "active"
        threshold: 0 // Trigger as soon as any part of the section enters the adjusted viewport
    };

    // Create observer instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.getAttribute('id'));
            }
        });
    }, options);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Set initial active link on page load
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        setActiveLink(hash);
    } else {
        // Default to home section
        setActiveLink('home');
    }
});

// Dynamically set current year in footer
window.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('footer-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Handle CV download - Remove problematic validation
const cvButton = document.querySelector('.cv-button .btn');
if (cvButton) {
    // The browser's native download handling is sufficient
}

// Preload project images to avoid flickering during hover animations
window.addEventListener('load', () => {
    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const preloadLink = document.createElement('link');
            preloadLink.href = src;
            preloadLink.rel = 'preload';
            preloadLink.as = 'image';
            document.head.appendChild(preloadLink);
        }
    });
});
