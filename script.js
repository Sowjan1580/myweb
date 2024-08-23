// static/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main > section, main > article');

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
});
