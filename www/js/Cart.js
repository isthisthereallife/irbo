class Cart {


  constructor() {
    //skapa en array i localstorage om det inte redan finns en
    store.cartProducts = store.cartProducts || [];
    store.save();
  }

  add(product) {

    //lägg till produkten som valts till arrayen i localstorage
    store.cartProducts.push(product)
    store.save();
    $('.oi-cart').html(" " + store.cartProducts.length)



    // We are doing a json stringify of the product
    // minus the cart property of a product
    // (which is just a reference to the cart)
    //
    // We don't need a JSON.stringify when we have
    // intelligent methods... This i purely to
    // show what product that is intended to be added...

    // alert(`
    //   I am a cart. 
    //   I have no render-method and no methods that calc sums.
    //   I have no add and remove methods...
    //   But I know that you tried to add this product to me:
    //   ${JSON.stringify({ ...product, cart: undefined }, '', '  ')}
    //   // remove all extra spaces after a new-line
    // `.replace(/\n\s*/g, '\n'))
  }
  calculateSum() {
    let sum = 0
    for (let i = 0; i < store.cartProducts.length; i++) {
      sum += store.cartProducts[i].price;
    }
    return sum;
  }
  calculateTotalWeight() {
    let w = 0;
    for (let i = 0; i < store.cartProducts.length; i++) {
      w += store.cartProducts[i].weight;
    }
    return w;

  }
  calculateShippingCost() {
    let cost = 0
    for (let i = 0; i < store.cartProducts.length; i++) {
      
      cost += store.cartProducts[i].weight
    }
    cost = cost * 40
    return cost;
  }

  render() {
    let sum = this.calculateSum()
    let shippingCost = this.calculateShippingCost()
    let totalWeight = this.calculateTotalWeight()
    let totalSum = sum+shippingCost
    for (let i = 0; i < store.cartProducts.length; i++) {
      /**skriv ut */
    }



    $('main').html(`
  <section class="row">
    <div class="col">
    <h1>Cart</h1>
    <p>Summan av dina valda produkter: ${sum} kr</p>
    <p>Vikten av dina valda produkter: ${totalWeight} kg</p>
    <p>Fraktkostnad för dina valda produkter: ${shippingCost} kr</p>
    <h4>Att betala: ${Math.round(totalSum)} kr</h4>
    </div>
    </section>
    `);

  }

}


//        JS Animering HÄR UNDER
//
/*
$(this.id).on('click', function () {
  var cart = $('.product-animation');
  var imgtodrag = $(this).parent('.item').find("img").eq(0);
  if (imgtodrag) {
      var imgclone = imgtodrag.clone()
          .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
      })
          .css({
          'opacity': '0.5',
              'position': 'absolute',
              'height': '150px',
              'width': '150px',
              'z-index': '100'
      })
          .appendTo($('body'))
          .animate({
          'top': cart.offset().top + 10,
              'left': cart.offset().left + 10,
              'width': 75,
              'height': 75
      }, 1000, 'easeInOutExpo');
      
      setTimeout(function () {
          cart.effect("shake", {
              times: 2
          }, 200);
      }, 1500);

      imgclone.animate({
          'width': 0,
              'height': 0
      }, function () {
          $(this).detach()
      });
  }
});
*/