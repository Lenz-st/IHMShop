// Example: Simple alert for "Buy Now" button
const buyButtons = document.querySelectorAll(".buy-now");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("This feature is under development!");
    });
});
// JavaScript to toggle menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
