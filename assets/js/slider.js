const swiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "bullet-class-custom",
    bulletActiveClass: "bullet-active-class-custom",
  },
  breakpoints: {
    // switches from mobile to desktop when window width is > 1024px
    1025: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  }
});
