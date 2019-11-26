class Cart {


  constructor() {
    //skapa en array i localstorage
    store.cartProducts = store.cartProducts || [];
    store.cartCount = store.cartCount || 0;
    
    // 2 DO: hitta ett sätt att faktiskt spara i localstorage
    store.save();
  }

  add(product) {

    //lägg till produkten som valts till arrayen i localstorage
    store.cartProducts.push(product)
    store.cartCount++;
    store.save();
    $('.oi-cart').html(" "+store.cartCount)



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

  render() {

    $('main').html(`
  <section class="row">
    <div class="col">
    <h1>Cart</h1>
    <p> här ska vi lägga in en lista av valda produkter, t ex 
    </div>
    </section>
    `);
  }

}