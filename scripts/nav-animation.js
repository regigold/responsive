// javascript document

$( document ).ready(function() {
    
    // desktop nav //
    
    $('.menu').addClass('close-nav');
    $('.form').addClass('close-search');
    
    $('#sections').click(function(){
        $('.form').removeClass('open-search');
        $('.menu').toggleClass('open-nav');
    });
    
    $('#search').click(function(){
        $('.menu').removeClass('open-nav');
        $('.form').toggleClass('open-search');
    });
   
    
    // mobile nav //
    
    $('.mobile-menu').addClass('close-mobile-nav');
    $('.mobile-form').addClass('close-mobile-search');
    
    $('#mobile-sections').click(function(){
        $('.mobile-form').removeClass('open-mobile-search');
        $('.mobile-menu').toggleClass('open-mobile-nav');
    });
    
    $('#mobile-form').click(function(){
        $('.mobile-menu').removeClass('open-mobile-nav');
        $('.mobile-form').toggleClass('open-mobile-search');
    });
}); 