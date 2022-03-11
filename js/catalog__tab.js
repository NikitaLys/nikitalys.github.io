document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__artist-btn').forEach(function(catalogBtn) {
        catalogBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path


            document.querySelectorAll('.catalog__artist').forEach(function(catalogBlock) {
                catalogBlock.classList.remove('catalog__artist-active')
            })
            document.querySelector(`[data-target = "${path}"]`).classList.add('catalog__artist-active');


        })
    });

    document.querySelector('#catalog__btn-active').classList.add('active')
    const list = document.querySelectorAll('.catalog__artist-btn')
    list.forEach(item => {
        item.addEventListener('click', (el) => {
            list.forEach(el => { el.classList.remove('active'); });
            item.classList.add('active')
        })
    })
})
