document.querySelector(".search__btn-open").addEventListener("click", function() {
    document.querySelector(".header-top__form").classList.add("header-top__form-active");
    this.classList.add("active");
})

document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".search__form");
    if (!target.closest(".search__form")) {
        form.classList.remove("search__form-active");
        form.querySelector(".search__input").value = "";
        document.querySelector(".search__btn-close").addEventListener("click", function() {
            document.querySelector(".header-top__form").classList.remove("header-top__form-active");
            document.querySelector(".search__btn-open").classList.remove("active");
        })
    }
})
