// static/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Example: Display an alert when the "Learn More" button is clicked
    const learnMoreButton = document.querySelector('.btn');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function() {
            alert('Thank you for your interest! More information is on the way.');
            // Bounce effect on button click
            this.classList.add('bounce');
            setTimeout(() => {
                this.classList.remove('bounce');
            }, 1000); // Remove class after animation duration
        });
    }

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in effect for sections when they come into view
    const sections = document.querySelectorAll('main > section, main > article');
    const fadeInOptions = {
        threshold: 0.1
    };
    
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    sections.forEach(section => {
        fadeInObserver.observe(section);
    });
});
