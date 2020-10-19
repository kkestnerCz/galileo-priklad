jQuery(document).ready(function () {
    if (jQuery('.js-swiper-container4 .swiper-slide').length > 1) {
        var legoSwiper = new Swiper('.js-swiper-container4',
        Object.assign({},
            {
                autoplay: {
                    delay: 6000,
                },
                centeredSlides: true,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next4',
                    prevEl: '.swiper-button-prev4',
                },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
                paginationClickable: true,
                slidesPerView: 'auto',
                speed: 1500,
            },
            swiperOptions1))
    }
});