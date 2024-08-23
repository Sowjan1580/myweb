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
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    }, fadeOptions);

    sections.forEach(section => {
        fadeObserver.observe(section);
    });
});
