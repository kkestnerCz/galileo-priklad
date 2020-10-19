jQuery(document).ready(function () {
    if (jQuery('.js-swiper-container1 .swiper-slide').length > 1) {
        var legoSwiper = new Swiper('.js-swiper-container1',
            Object.assign({},
                {
                    autoplay: {
                        delay: 6000
                    },
                    effect: 'fade',
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next1',
                        prevEl: '.swiper-button-prev1',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true,
                    },
                    preloadImages: false,
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        hide: true,
                    },
                    slidesPerView: 1,
                    speed: 1500,
                },
                swiperOptions1))
    } 
});