

let productsHTML=''

products.forEach(function(product){
  productsHTML=productsHTML+`
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
                src="${product.image}"
            >
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              ${product.rating.star *10}
            />
            <div class="product-rating-count link-primary">${product.rating.count}</div>
          </div>

          <div class="product-price">$${(product.priceCents/100).toFixed(2)}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-Id="${product.Id}">Add to Cart</button>
        </div>
  `;

});





document.querySelector('.js-products-grid').innerHTML=productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach(function(button){
  button.addEventListener('click',function(){
    const productID = button.dataset.productId;

    let matchingItem;

    cart.forEach( function(item){
      if(productID==item.productId){
        matchingItem=item;
      }
    });

    if(matchingItem){
      matchingItem.quantity += 1;
    }
    else{
      cart.push({
        productId : productID,
        quantity:1
      });
    }

    let cartQuantity = 0;
    
    cart.forEach(function(item){
      cartQuantity+=item.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;

    console.log(cartQuantity);
    console.log(cart);
    
    
  });
});