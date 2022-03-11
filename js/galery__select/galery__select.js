const element = document.querySelector('.galery__select');
const choices = new Choices(element, {
    searchEnabled: false,
    placeholder: false,
    itemSelectText: '',
    shouldSort: true,
    sorter: () => {
        1,
        2,
        3,
        4,
        5,
        6
    }
});
// document.addEventListener('DOMContentLoaded', function() {
//     $(document).click(function() {
//         $(".choices__list--dropdown").effect("blind", "slow");
//     });
// })
