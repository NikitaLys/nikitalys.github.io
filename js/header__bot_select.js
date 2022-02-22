document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".direct-btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".direct-menu");

            document.querySelectorAll(".direct-btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("direct-btn-active");
                }
            });

            document.querySelectorAll(".direct-menu").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("header-bottom__item-active");
                }
            })
            dropdown.classList.toggle("header-bottom__item-active");
            btn.classList.toggle("direct-btn-active")
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".header-bottom__list")) {
            document.querySelectorAll(".direct-menu").forEach(el => {
                el.classList.remove("header-bottom__item-active");
            })
            document.querySelectorAll(".direct-btn").forEach(el => {
                el.classList.remove("direct-btn-active");
            });
        }
    })
    document.querySelectorAll(".direct-list").forEach(item => {
        new SimpleBar(item, {
            /* чтобы изначально ползунок был виден */
            autoHide: false,
            /* с помощью этого значения вы можете управлять высотой ползунка*/
            scrollbarMaxSize: 28,
        });
    })
})
