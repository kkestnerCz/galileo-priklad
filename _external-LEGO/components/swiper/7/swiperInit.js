jQuery(document).ready(function () {
    if (jQuery('.js-swiper-container7 .swiper-slide').length > 1) {
        var legoSwiper = new Swiper('.js-swiper-container7',
            Object.assign({},
                {
                    autoplay: {
                        delay: 6000
                    },
                    effect: 'cube',
                    loop: true, 
                    preloadImages: false,
                    slidesPerView: 1,
                    speed: 1500,                   
                },
                swiperOptions1))
    }
});