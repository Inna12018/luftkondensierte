$(function(){
    $('.slider__inner').slick({
      nextArrow:
            '<button class="slider-btn slider-btn__left"><img src="images/next.png" alt="next arrow"></button>',
          prevArrow:
            '<button class="slider-btn slider-btn__right"><img src="images/prev.png" alt="prev arrow"></button>',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          speed: 300,
          dots: true,
          adaptiveHeight: true,
          
          responsive: [ 
            {
               breakpoint: 601,
                settings: { 
                  arrows: false }
                }, 
              ]
    
        
      });
     
$('.header__menu-btn').on('click', function(){
$('.header__menu ul').slideToggle();
  });
  
});