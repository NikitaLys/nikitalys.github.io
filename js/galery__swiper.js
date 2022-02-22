document.addEventListener("DOMContentLoaded", function() {

    let gallerySlider = new Swiper(".galery__right", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
            rows: 2
        },
        spaceBetween: 50,
        paginationClickable: true,
        pagination: {
            el: ".galery__swiper-pagination",
            type: "fraction"
        },
        navigation: {
            nextEl: ".galery__btn-next",
            prevEl: ".galery__btn-prev"
        },
        observer: true,
        observeParents: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                    rows: 1
                },
                spaceBetween: 0
            },
            767: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                    rows: 2
                },
                spaceBetween: 30
            },

            1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid: {
                    rows: 2
                },
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


        // on: {
        //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
        //   beforeResize: function () {
        //     this.slides.forEach((el) => {
        //       el.style.marginTop = "";
        //     });
        //   }
        // }
    });
})
