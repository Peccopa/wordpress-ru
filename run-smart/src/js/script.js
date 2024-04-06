'use strict';

// $(document).ready(function () {
//   $('.carousel__inner').slick({
//     speed: 1200,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/slider/prev.png" alt="arrow"></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/slider/next.png" alt="arrow"></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const slider = tns({
  // https://github.com/ganlanyuan/tiny-slider?tab=readme-ov-file
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  // autoplay: true,
  // speed: 1000,
  // autoplayButtonOutput: false,
  controls: false,
  nav: false,
  responsive: {
    640: {
      // edgePadding: 20,
      // gutter: 20,
      // items: 2,
    },
    700: {
      // gutter: 30,
    },
    900: {
      // items: 3,
    },
  },
});

document
  .querySelector('.prev')
  .addEventListener('click', () => slider.goTo('prev'));
document
  .querySelector('.next')
  .addEventListener('click', () => slider.goTo('next'));