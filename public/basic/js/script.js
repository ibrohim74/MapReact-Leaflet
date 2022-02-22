$(function (){
    $('.scroll-down-btn').on('click', function(e) {
      e.preventDefault(); // Запрещаем переход по ссылке
      var target= $(this).attr('href'), // Берем значение из ссылки как цель id="second-screen"
            destination= $(target).offset().top; // Ищем верхнюю координату у нашей цели

      $('body,html').animate({scrollTop: destination}, 500); // Плавно проматываем до цели
    });


    $(".Modern-Slider").slick({
      autoplay:true,
      autoplaySpeed:10000,
      speed:600,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      dots:true,
      pauseOnDotsHover:true,
      cssEase:'linear',
     // fade:true,
      draggable:false,
      prevArrow:'<button class="PrevArrow"></button>',
      nextArrow:'<button class="NextArrow"></button>', 
    });

    $(".partners-block").slick({
      autoplay:true,
      autoplaySpeed:5000,
      speed:600,
      slidesToShow:4,
      slidesToScroll:1,
      pauseOnHover:false,
      dots:false,
      arrows:false,
      pauseOnDotsHover:true,
      cssEase:'linear',
      // fade:true,
      infinite:true,
      draggable:false,
      // prevArrow:'<button class="PrevArrow"></button>',
      // nextArrow:'<button class="NextArrow"></button>', 
    });
    
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 50) {
           $('header').addClass('sticky');
       }
       else {
           $('header').removeClass('sticky');
       }
   });

    $('.menu-mob, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.top-left').toggleClass('active');
    });

    
    

});

