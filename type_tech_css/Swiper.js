if (window.innerWidth < 768) {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
window.addEventListener('resize', function () {
    if (window.innerWidth < 768){
        swiper = new Swiper('.swiper-container', {
            updateOnWindowResize: true,
            slidesPerView: 'auto',
            spaceBetween:0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        });
        swiper.pagination.update();
    } else if (window.innerWidth >= 768){
        swiper.pagination.update();
        swiper.destroy(true, false);
        swiper.update();
    }
});