// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Number counter animation
const stats = document.querySelectorAll('.stat-number');

stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const increment = target / 200;

    const updateCount = () => {
        const count = parseInt(stat.innerText);
        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            stat.innerText = target;
        }
    };

    updateCount();
});

// Testimonial Slider (if you want to add one)
// You can use a library like Swiper.js for a more advanced slider

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    let currentSlide = 0;

    function goToSlide(index) {
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});