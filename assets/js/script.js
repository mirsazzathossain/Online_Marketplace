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
var large = `<div class="col-lg-3 col-sm-6"><div class="product-item"><div class="pi-pic"><div class="tag-sale">ON SALE</div><img src="assets/images/product1.jpg" alt=""><div class="pi-links"><a href="#" class="add-card"><i class="fa fa-cart-plus" aria-hidden="true"></i><span>ADD TO CART</span></a></div></div><div class="pi-text"><h6>$35,00</h6><a href="">Flamboyant Pink Top</a></div></div></div>`;
$('.product').prepend(large);

/*
=======================
    Form Validation
=======================
*/

$('#validationName').on('input', function(){
    var name = $(this).val();
    if(name.length == 0){
        $(this).addClass('is-invalid').removeClass('is-valid');
    }
    else{
        $(this).addClass('is-valid').removeClass('is-invalid');
    }
});

$('#validationDescription').on('input', function(){
    var description = $(this).val();
    if(description.length < 10){
        $(this).addClass('is-invalid').removeClass('is-valid');
    }
    else{
        $(this).addClass('is-valid').removeClass('is-invalid');
    }
});

$('#validationURL').on('input', function(){
    var description = $(this).val();

    if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($(this).val())){
        console.log('valid');
    }
    
    
});



$('#submit').on('click', function(){
    var name = $('#validationName').val();
    var description = $('#validationDescription').val();
    var tag = $('.custom-select option:selected').text();
    var URL = $('#validationURL').val();
    var price = $('#validationPrice').val();
    var quantity = $('#validationQuantity').val();
    console.log('as'+tag+'sd');
});