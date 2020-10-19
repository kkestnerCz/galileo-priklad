jQuery(document).ready(function () {
    if (jQuery('.js-swiper-container2 .swiper-slide').length > 1) {
        var legoSwiper = new Swiper('.js-swiper-container2',
            Object.assign({},
                {
                    autoplay: {
                        delay: 6000
                    },
                    effect: 'coverflow',
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next2',
                        prevEl: '.swiper-button-prev2',
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