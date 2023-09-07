const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const bars = document.querySelectorAll('.bar');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    bars.forEach(bar => bar.classList.toggle('open'));
});
