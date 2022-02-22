document.addEventListener("DOMContentLoaded", function() {
    let gallerySlider = new Swiper(".event__swiper", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,

        paginationClickable: true,
        pagination: {
            el: ".event__swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".event__btn-next",
            prevEl: ".event__btn-prev"
        },
        observer: true,
        observeParents: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 40
            },
            690: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34
            },

            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 27
            },
            1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50
            }
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        a11y: {
            prevSlideMessage: 'Предыдущий',
            nextSlideMessage: 'Следующий',
        }
    });
})
