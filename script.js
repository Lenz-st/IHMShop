mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});
