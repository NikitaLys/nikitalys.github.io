document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header-top__burger-opn").addEventListener("click", function() {
        document.querySelector(".header-top__menu").classList.add("active");
    })
    document.querySelector(".header-top__burger-close").addEventListener("click", function() {
        document.querySelector(".header-top__menu").classList.remove("active");
    })
})
