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
var large = '<div class="col-lg-3 col-sm-6"><div class="product-item"><div class="pi-pic"><div class="tag-sale">ON SALE</div><img src="assets/images/product1.jpg" alt=""><div class="pi-links"><a href="#" class="add-card"><i class="fa fa-cart-plus" aria-hidden="true"></i><span>ADD TO CART</span></a></div></div><div class="pi-text"><h6>$35,00</h6><a href="">Flamboyant Pink Top</a></div></div></div>';
$('.product').prepend(large);
