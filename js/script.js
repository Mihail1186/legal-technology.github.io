$(document).ready(function () {
   $('.slick__init').slick({
      dots: false,
      adaptiveHeigh: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      easing: 'easeOutExpo',
      waitForAnimate: false,
      responsive: [
        {
          breakpoint: 675,
          settings: {
            arrows: false,
            dots: true,
          }
        }
      ]
   });



   $('.slider__track').slick({
      dots: false,
      adaptiveHeigh: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      easing: 'easeOutExpo',
      waitForAnimate: false,
      responsive: [
        {
          breakpoint: 675,
          settings: {
            arrows: false,
            dots: true,
          }
        }
      ]
   });



   $('.slider__items').slick({
      dots: true,
      adaptiveHeigh: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      speed: 1000,
      easing: 'easeOutExpo',
      waitForAnimate: false,
      responsive: [
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
   });

   $("#forTel").mask("+375(99) 999-99-99" , {placeholder: "X" });


   function backToTop() {
      let button = $('.back-to-top');
    
      $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
          button.fadeIn();
        } else {
          button.fadeOut();
        }
      })
      button.on('click' , (e) => {
        e.preventDefault();
        $('html').animate({scrollTop:0}, 1000);
      })
    }
    backToTop();

    $('.header__burger').click(function (event) {
      $('.header__burger, .menu, .logo__burger, .header__socials ').toggleClass('active');
      $('body').toggleClass('lock');
   })

});
