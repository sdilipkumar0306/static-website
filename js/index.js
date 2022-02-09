// import Swiper from 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js'
const Swiper 


var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true
    }
  });
  