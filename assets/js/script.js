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

    if(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test($(this).val())){
        $(this).addClass('is-valid').removeClass('is-invalid');
    }
    else{
        $(this).addClass('is-invalid').removeClass('is-valid');
    } 
});

$('#validationPrice').on('input', function(){
    var price = $(this).val();
    if(parseInt(price)<=0 || price.length < 1){
        $(this).addClass('is-invalid').removeClass('is-valid');
    }
    else{
        $(this).addClass('is-valid').removeClass('is-invalid');
    }
});

$('#validationQuantity').on('input', function(){
    var quantity = $(this).val();
    if(parseInt(quantity)<=0 || quantity.length < 1){
        $(this).addClass('is-invalid').removeClass('is-valid');
    }
    else{
        $(this).addClass('is-valid').removeClass('is-invalid');
    }
});

$('.custom-select').on('input', function(){
    var tag = $('.custom-select option:selected').text();

    if(tag == "Choose tag"){
        $(this).addClass('is-invalid').removeClass('is-valid');
    }
    else{
        $(this).addClass('is-valid').removeClass('is-invalid');
    }
});



$('#submit').on('click', function(){
    var name = $('#validationName').val();
    var description = $('#validationDescription').val();
    var tag = $('.custom-select option:selected').text();
    var price = $('#validationPrice').val();
    var quantity = $('#validationQuantity').val();
    
    if(name.length>0 && tag != "Choose tag" && (parseInt(price)>0 || price.length>=1) && (parseInt(quantity)>0 || quantity.length >= 1) && description.length >= 10 && /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test($('#validationURL').val())){
        console.log('hi')

    }
    else{
        if(name.length == 0){
            $('#validationName').addClass('is-invalid').removeClass('is-valid');
        }

        if(description.length < 10){
            $('#validationDescription').addClass('is-invalid').removeClass('is-valid');
        }

        if(!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test($(this).val())){
            $('#validationURL').addClass('is-invalid').removeClass('is-valid');
        }

        if(parseInt(price)<=0 || price.length < 1){
            $('#validationPrice').addClass('is-invalid').removeClass('is-valid');
        }

        if(parseInt(quantity)<=0 || quantity.length < 1){
            $('#validationQuantity').addClass('is-invalid').removeClass('is-valid');
        }

        if(tag == "Choose tag"){
            $('.custom-select').addClass('is-invalid').removeClass('is-valid');
        }
    }
});

$('#cancle').on('click', function(){
    $('.add-product').css("display", "none");
    $('.product-section').css('display', 'initial');
});

$('#addnewproduct').on('click', function(){
    $('.add-product').css("display", "initial");
    $('.product-section').css('display', 'none');
});