document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if (!hamburger || !nav || !navOverlay || !hamburgerIcon) {
        console.error('Navigation elements not found. Check HTML for .hamburger, .hamburger-icon, nav, and .nav-overlay.');
        return;
    }

    hamburger.addEventListener('click', () => {
        const isActive = nav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        hamburgerIcon.textContent = isActive ? '✕' : '☰';
        hamburger.setAttribute('aria-expanded', isActive);
    });

    navOverlay.addEventListener('click', () => {
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
        hamburgerIcon.textContent = '☰';
        hamburger.setAttribute('aria-expanded', 'false');
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            navOverlay.classList.remove('active');
            hamburgerIcon.textContent = '☰';
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
});