document.addEventListener("DOMContentLoaded", function() {

    let gallerySlider = new Swiper(".projekt__swiper", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,


        navigation: {
            nextEl: ".projekt__btn-next",
            prevEl: ".projekt__btn-prev",
            tabbable: true
        },
        observer: true,
        observeParents: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 27
            },
            540: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 35
            },
            1023: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 47
            },
            1600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50

            }
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        a11y: true,
        a11y: {
            prevSlideMessage: 'Предыдущий',
            nextSlideMessage: 'Следующий',
        }
    });
})
