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

/*
===============
    Product
===============
*/

let product=[];

if(window.localStorage.getItem('product')){
    product = JSON.parse(window.localStorage.getItem('product'));
}

if(product.length != 0){
    product.forEach(element => {
        var large = `<div class="col-lg-3 col-sm-6"><div class="product-item"><div class="pi-pic"><div class="tag-sale">${element.tag}</div><img src="${element.URL}" alt=""><div class="pi-links"><a href="#" class="add-card"><i class="fa fa-cart-plus" aria-hidden="true"></i><span>ADD TO CART</span></a></div></div><div class="pi-text"><h6>$${element.price}</h6><a href="">${element.name}</a></div></div></div>`;
        $('.product').prepend(large);
    });
}
else{
    $('.no-product').css('display', 'initial');
}


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
    var URL = $('#validationURL').val();

    
    
    if(name.length>0 && tag != "Choose tag" && (parseInt(price)>0 || price.length>=1) && (parseInt(quantity)>0 || quantity.length >= 1) && description.length >= 10 && /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test($('#validationURL').val())){
        product.push({name: name, description: description, URL: URL, tag: tag, price: price, quantity: quantity})
        window.localStorage.setItem('product', JSON.stringify(product));

        $('.no-product').css({'cssText': 'display: none !important'});
        var large = `<div class="col-lg-3 col-sm-6"><div class="product-item"><div class="pi-pic"><div class="tag-sale">${tag}</div><img src="${URL}" alt=""><div class="pi-links"><a href="#" class="add-card"><i class="fa fa-cart-plus" aria-hidden="true"></i><span>ADD TO CART</span></a></div></div><div class="pi-text"><h6>$${price}</h6><a href="">${name}</a></div></div></div>`;
        $('.product').prepend(large);

        $('.add-product').css("display", "none");
        $('.product-section').css('display', 'initial');
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



	/*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
	proQty.prepend('<span class="dec qtybtn">-</span>');
	proQty.append('<span class="inc qtybtn">+</span>');
	proQty.on('click', '.qtybtn', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);
	});

    /*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});

    $('.product-thumbs-track > .pt').on('click', function(){
		$('.product-thumbs-track .pt').removeClass('active');
		$(this).addClass('active');
		var imgurl = $(this).data('imgbigurl');
		var bigImg = $('.product-big-img').attr('src');
		if(imgurl != bigImg) {
			$('.product-big-img').attr({src: imgurl});
			$('.zoomImg').attr({src: imgurl});
		}
	});


	$('.product-pic-zoom').zoom();