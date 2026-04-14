/**
 * Portfolio Website JavaScript
 * Handles: Typed.js initialization, mobile navigation, and page navigation
 */

// ========================================
// Typed.js Initialization
// ========================================
const typed = new Typed('#element', {
    strings: [
        'Web Developer',
        'Data Analyst',
        'Data Scientist',
        'ML Developer'
    ],
    loop: true,
    typeSpeed: 125
});

// ========================================
// Mobile Navigation
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Event Listeners
hamburger.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// ========================================
// Page Navigation
// ========================================

/**
 * Redirect to home section on page reload
 */
function redirectToHome() {
    window.location.hash = '#home';
}

// Handle page reload to always go to home section
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('redirectToHome', 'true');
});

window.addEventListener('load', () => {
    if (sessionStorage.getItem('redirectToHome') === 'true') {
        sessionStorage.removeItem('redirectToHome');
        redirectToHome();
    }
});

