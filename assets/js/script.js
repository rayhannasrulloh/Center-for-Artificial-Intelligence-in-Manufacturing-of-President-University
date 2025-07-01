const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


AOS.init();

new TypeIt("#hero-title", {
    speed: 75,
    waitUntilVisible: true,
}).go();