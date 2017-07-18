
function getProductHtml(product){
    return  '<div class="product-container">' +
            '<div class="product-containers product-Id">' + product.id + ' </div>' +
      '<div class="product-containers product-name">' + product.name + '</div>' +
      '<div class="product-containers product-price">'+  product.price + '</div>' +
      '<div class="product-containers product-actions"> <button class="addCart btn btn-primary"> Add to cart </button>'+
      '<button class="quickView btn btn-primary"> Quick View</button>'+
      '</div>'
}

function renderProducts(filteredProducts){
  if( filteredProducts.length != 0){
    $("#rbutton").attr("enabled","enabled");
  var jTodoList = $('.product-containerss').empty();
 var cardhtml="";

   $.each( filteredProducts, function( i, product ){
      cardhtml += getProductHtml(product);
   });
    
  $(document).ready(function() {
    $('.product-containerss').html(cardhtml);
  }); }
  else{
    $("#rbutton").attr("disabled","disabled");
  }
}

// --------- API calls  ---------------- //
$.ajax( '/getProducts', { type: 'GET' }).then(renderProducts);


$('body').on('click', '.navButtons', function(){
    var filterType=$(this).attr('filter-type');
  $.ajax('/getCardDataByFilter', {
    type: 'POST',
    data: {filterType },
    }).then(renderProducts);
  }
)









