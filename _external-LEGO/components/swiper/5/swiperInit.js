jQuery(document).ready(function () {
    var legoSwiper = new Swiper('.js-swiper-container5',
    {
        autoplay: {
			delay: 6000,
        },
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next5',
            prevEl: '.swiper-button-prev5',
        },
        paginationClickable: true,
        slidesPerGroup: 1,
        speed: 1500,
        
        breakpointsInverse: true,
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 60
            }
          }

    })
});