document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".hero__content")
    const swiper = new Swiper('.hero__swiper', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 2000,
        autoplay: {
            delay: 2000
        },
        effect: 'fade',
        // transformEl: true,
        allowTouchMove: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: '.swiper-bullet-pagination',
            type: 'bullets',
            clickable: true
        }

    })
})