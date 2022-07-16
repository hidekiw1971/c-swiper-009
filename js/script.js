jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // .mySwiper1

  var swiper = new Swiper(".mySwiper2", {});
  // .mySwiper2
});
