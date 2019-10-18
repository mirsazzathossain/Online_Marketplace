/*
===============
    Toogler
===============
*/

$(function(){
    $('button.navbar-toggler').on('click',function(){
        $(this).addClass('animated tada').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd mozAnimationEnd',function(){
            $(this).removeClass('animated tada');
        });
    });
});