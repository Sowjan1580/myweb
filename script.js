// static/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main > section, main > article');
    const fadeButton = document.getElementById('fadeButton');
    const bounceButton = document.getElementById('bounceButton');
    const header = document.querySelector('header');

    // Intersection Observer to fade in content on scroll
    const fadeOptions = {
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);  // Stop observing once it has faded in
            }
        });
    }, fadeOptions);

    sections.forEach(section => {
        fadeObserver.observe(section);
    });

    // Fade in content when the button is clicked
    fadeButton.addEventListener('click', () => {
        sections.forEach(section => {
            section.classList.add('fade-in');
        });
    });

    // Bounce the header when the button is clicked
    bounceButton.addEventListener('click', () => {
        header.classList.add('bounce');
        // Remove the animation class after it's done to allow re-triggering
        header.addEventListener('animationend', () => {
            header.classList.remove('bounce');
        });
    });
});
