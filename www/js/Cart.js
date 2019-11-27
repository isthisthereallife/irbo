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
    $('.oi-cart').html(" "+store.cartProducts.length)



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
  calculateSum(){
    let sum = 0
    for (let i=0;i<store.cartProducts.length;i++ ){
      Object.assign(this,store.cartProducts[i])
      sum+=this.price;
    }
    return sum;
  }
  calculateTotalWeight(){
    let w = 0;
    for (let i=0;i<store.cartProducts.length;i++ ){
      Object.assign(this,store.cartProducts[i])
      w+=this.weight;
    }
    return w;

  }
  calculateShippingCost(){
    let cost = 0
    for (let i=0;i<store.cartProducts.length;i++ ){
      Object.assign(this,store.cartProducts[i])
      cost+=this.weight;
    }
    cost=cost*40
    return cost;
  }
  render() {
      //console.log(store.cartProducts[i])
      let sum = this.calculateSum()
      let shippingCost = this.calculateShippingCost()
      let totalWeight = this.calculateTotalWeight()
    $('main').html(`
  <section class="row">
    <div class="col">
    <h1>Cart</h1>
    <p>Summan av dina valda produkter: ${sum}</p>
    <p>Vikten av dina valda produkter: ${totalWeight}</p>
    <p>Fraktkostnad för dina valda produkter: ${shippingCost}</p>
    </div>
    </section>
    `);
  }0

}