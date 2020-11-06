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



   $('.slider__track').slick({
      dots: false,
      adaptiveHeigh: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      easing: 'easeOutExpo',
      waitForAnimate: false,
   });



   $('.slider__items').slick({
      dots: true,
      adaptiveHeigh: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      speed: 1000,
      easing: 'easeOutExpo',
      waitForAnimate: false,
   });

   $("#forTel").mask("+375(99) 999-99-99" , {placeholder: "X" });

});
