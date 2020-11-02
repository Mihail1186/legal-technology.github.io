$(document).ready(function () {
   $('.slider').slick({
      dots: false,
      adaptiveHeigh: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      easing: 'easeOutExpo',
      waitForAnimate: false,
   });
});