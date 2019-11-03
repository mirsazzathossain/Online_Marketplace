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
let cart=[];



if(window.localStorage.getItem('cart')){
    cart = JSON.parse(window.localStorage.getItem('cart'));
    var cartTotal = 0;
    cart.forEach((element, index) => {
        cartTotal += parseInt(cart[index].quantity);
    });

    $('#numItem').html(cartTotal);
}

if(window.localStorage.getItem('product')){
    product = JSON.parse(window.localStorage.getItem('product'));
}

if(product.length != 0){
    product.forEach(element => {
        var large = `<div class="col-lg-3 col-sm-6"><div class="product-item"><div class="pi-pic"><div class="tag-sale">${element.tag}</div><img src="${element.URL}" alt=""><div class="pi-links"><a id="${element.id}" href="#" class="add-card"><i class="fa fa-cart-plus" aria-hidden="true"></i><span>ADD TO CART</span></a></div></div><div class="pi-text"><h6>$${element.price}</h6><a id="${element.id}" href="#?">${element.name}</a></div></div></div>`;
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
    var id;
    var totalProduct = product.length;
    if(totalProduct==0){
        id = 1110;
        window.localStorage.setItem("ID", id);
    }
    
    if(name.length>0 && tag != "Choose tag" && (parseInt(price)>0 || price.length>=1) && (parseInt(quantity)>0 || quantity.length >= 1) && description.length >= 10 && /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test($('#validationURL').val())){
        
        id = parseInt(window.localStorage.getItem("ID"))+1;
        window.localStorage.setItem("ID", id);
        
        product.push({id: id, name: name, description: description, URL: URL, tag: tag, price: price, quantity: quantity})
        window.localStorage.setItem('product', JSON.stringify(product));

        

        $('.no-product').css({'cssText': 'display: none !important'});
        var large = `<div class="col-lg-3 col-sm-6"><div class="product-item"><div class="pi-pic"><div class="tag-sale">${tag}</div><img src="${URL}" alt=""><div class="pi-links"><a id="${id}" href="#" class="add-card"><i class="fa fa-cart-plus" aria-hidden="true"></i><span>ADD TO CART</span></a></div></div><div class="pi-text"><h6>$${price}</h6><a id="${id}" href="#?">${name}</a></div></div></div>`;
        $('.product').prepend(large);

        location.reload();
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
    $('.product-sectio').css('display', 'none');

    $('.cart-section').css('display', 'none');

});



	/*-------------------
		Quantity change
	--------------------- */
    

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
    


    $('.pi-text').on('click', 'a', function(){
        var id = parseInt($(this).attr('id'));
        var prod = product.find(x => x.id == id);
        var isAvailable;
        if(parseInt(prod.quantity) >0 ){
            isAvailable='In Stock';
        }
        else{
            isAvailable='Out of Stock';
        }
        $('#single-product-row').remove();
        
        $('#single-product-col').append(`<div class="row" id="single-product-row"><div class="col-lg-6"><div class="product-pic-zoom"><img class="product-big-img" src="${prod.URL}" alt="" style="width: 100%;"></div></div><div class="col-lg-6 product-details"><h2 class="p-title">${prod.name}</h2><h3 class="p-price">$${prod.price}</h3><h4 class="p-stock">Availablility: <span>${isAvailable}</span></h4><div class="quantity"><p>Quantity</p><div class="pro-qty"><input type="text" value="1"></div></div><a href="#" class="site-btn">Add to cart</a><div id="accordion" class="accordion-area"><div class="panel"><div class="panel-header" id="headingOne"><button class="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Description</button></div><div id="collapse1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion"><div class="panel-body">${prod.description}</div></div></div></div></div></div>`);
        
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
        
        $('.add-product').css("display", "none");
        $('.cart-section').css("display", "none");
        $('.product-section').css('display', 'none');
        $('.product-sectio').css('display', 'initial');
    });


    $('.pi-links').on('click', 'a', function(){
        var id = parseInt($(this).attr('id'));

    

        cart.forEach((element, index) => {
            if(parseInt(element.id) == id) {
                cart[index].quantity = parseInt(cart[index].quantity)+1;
                window.localStorage.setItem('cart', JSON.stringify(cart));
                id =0;
                console.log(cart);
            }
        });
        if(id!=0){
            cart.push({id: id, quantity: 1});
            window.localStorage.setItem('cart', JSON.stringify(cart));
            console.log(cart);
        }
        var cartTotal = 0;
        cart.forEach((element, index) => {
            cartTotal += parseInt(cart[index].quantity);
        });
        $('#numItem').html(cartTotal);

    });

    $('#cart-id').on('click', function(){


        $('#cart-table-body').empty();
        

        var total = 0;

        cart.forEach(element=>{


            var prod = product.find(x => x.id == element.id);
            var quantity = element.quantity;
            total+=quantity*prod.price;
            if(quantity!=0){

                var cartProduct=`<tr id="cartProd${prod.id}"><td class="product-col"><img src="${prod.URL}" alt=""><div class="pc-title"><h4>${prod.name}</h4><p>$${prod.price}</p></div></td><td class="quy-col"><div class="quantity"><div class="pro-qty"><span id="${prod.id}" class="dec qtybtn">-</span><input id="${prod.id}num" type="text" value="${quantity}"><span id="${prod.id}" class="inc qtybtn">+</span></div></div></td><td class="total-col"><h4 id='total'>$${parseInt(prod.price)*quantity}</h4></td></tr>`;
                $('#cart-table-body').prepend(cartProduct);}
            
        });

        $('#total').html(`$${total}`);


        var proQty = $('.pro-qty');
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

        $('.pro-qty').on('click', '.qtybtn', function(){
            var id = $(this).attr('id');
            var idname= '#'+id+'num';
            var value = $(idname).val();

            cart.forEach((element, index) => {
                if(parseInt(element.id) == id) {
                    cart[index].quantity = parseInt(value);
                    window.localStorage.setItem('cart', JSON.stringify(cart));
                }
            });

            if(value==0){
                $(`#cartProd${id}`).css('display', 'none');
            }
            var cartTotal = 0;
            cart.forEach((element, index) => {
                cartTotal += parseInt(cart[index].quantity);
            });
            $('#numItem').html(cartTotal);

            
            
        });


        $('.add-product').css("display", "none");
        $('.cart-section').css("display", "initial");
        $('.product-section').css('display', 'none');
        $('.product-sectio').css('display', 'none');

    });

    