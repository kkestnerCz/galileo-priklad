jQuery(document).ready(function () {
    if (jQuery('.js-swiper-container6 .swiper-slide').length > 1) {
        var legoSwiper = new Swiper('.js-swiper-container6',
            Object.assign({},
                {
                    autoplay: {
                        delay: 6000
                    },
                    effect: 'flip',
                    flipEffect: {
                        slideShadows: false,
                    },
                    loop: true, 
                    preloadImages: false,
                    slidesPerView: 1,
                    speed: 1500,                   
                },
                swiperOptions1))
    }
});