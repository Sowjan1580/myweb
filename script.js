// static/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Example: Display an alert when the "Learn More" button is clicked
    const learnMoreButton = document.querySelector('.btn');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function() {
            alert('Thank you for your interest! More information is on the way.');
        });
    }

    // Example: Smooth scrolling for navigation links
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
});
