// Fade in and scroll animations

window.addEventListener('scroll', () => {
    let elements = document.querySelectorAll('.service-detail, .package');
    let screenHeight = window.innerHeight;

    elements.forEach((element) => {
        let elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < screenHeight - 50) {
            element.style.animationPlayState = 'running';
        }
    });
});

// Adding an event listener to call-to-action buttons for future interactivity
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your interest! We will get back to you soon.');
    });
});
