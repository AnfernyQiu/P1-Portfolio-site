$(function(){
    $('.hamburger').on('click',function(e){
        $('.nav').toggleClass('open');
        e.stopPropagation();
    });
    $('.main').on('click',function(e){
        $('.nav').removeClass('open');
    });
});