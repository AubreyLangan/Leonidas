document.addEventListener('DOMContentLoaded', function(){
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let counter = 0;
    let size = images[0].clientWidth;

    function updateCarousel() {
        carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    nextButton.addEventListener('click', () => {
        if (counter >= images.length - 1) return;
        counter++;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        updateCarousel();
    });

    window.addEventListener('resize', () => {
        size = images[0].clientWidth;
        updateCarousel();
    });
});