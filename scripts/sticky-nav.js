// javascript document

var scrollAmount = 200; 
          var $window = $(window);
          $window.on('scroll', function(){
  if($(window).scrollTop()>=scrollAmount && !$('header').hasClass('fixed')){
    $('header').addClass('fixed'); 
    $('.wrapper').css('margin-top', '290px');
  }
  else if($(window).scrollTop()<=scrollAmount && $('header').hasClass('fixed')){
     $('header').removeClass('fixed') 
     $('.wrapper').css('margin-top', '0px');
  }
}); 