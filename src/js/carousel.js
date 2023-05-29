import Swiper from "swiper";

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-slide-next',
        prevEl: '.swiper-slide-prev',
    }
});