
document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname.split('/').pop();
    if (path === '') path = 'index.html';

    var navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        var hrefFile = href.split('/').pop();
        if (hrefFile === path) {
            if (link.parentElement) {
                link.parentElement.classList.add('active');
            }
        }
    });
});

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

AOS.init();

new TypeIt("#hero-title", {
    speed: 40,
    waitUntilVisible: true,
}).go();