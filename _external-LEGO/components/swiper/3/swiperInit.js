
jQuery(document).ready(function () {
    if (jQuery('.js-swiper-container3 .swiper-slide').length > 1) {
        var legoSwiper = new Swiper('.js-swiper-container3',
        Object.assign({},
            {
                autoplay: {
                    delay: 6000,
                }, 
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next3',
                    prevEl: '.swiper-button-prev3',
                },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
                paginationClickable: true,
                preloadImages: false,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                },
                speed: 1500,
                
                breakpointsInverse: true,
                breakpoints: {
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    },
                    992: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    1200: {
                    slidesPerView: 3,
                    spaceBetween: 30
                    }
                }
            },
            swiperOptions1))
    }
});