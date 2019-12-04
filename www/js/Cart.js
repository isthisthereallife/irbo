class Cart {


  constructor() {
    //skapa en array i localstorage om det inte redan finns en
    store.cartProducts = store.cartProducts || [];
    store.cartQty = store.cartQty || 0;
    //to do, en map för kvantitet
    //id som nycklar, kvantitet som värde
    store.save();
  }

  




  add(product) {
    //bool för att se om valet är unikt/nytt
    let unique = true;

    console.log("added one " + product.name)

    //om listan inte är tom
    if (store.cartProducts.length > 0) {
      //loopa igenom listan
      for (let i = 0; i < store.cartProducts.length; i++) {
        //om ett element med samma id redan finns
        if (product.id == store.cartProducts[i].id) {

          // öka dess qty med 1
          store.cartProducts[i].qty += 1;
          unique = false;
          //bryt ut ur for-loopen (eftersom det ändå bara finns en av varje sort i arrayen)
          break;
        }
      }
    }
    //om det är ett unikt/nytt val
    if (unique) {
      console.log("uniq", JSON.stringify(product))

      store.cartProducts.push(product)
    }
    //öka antalet varor i kundvagnen
    store.cartQty += 1;
    console.log("products", JSON.stringify(store.cartProducts))
    //spara
    store.save();
    //skriv om siffran vid bilden, utgå från antalet varor i kundvagnen
    $('.oi-cart').html(" " + store.cartQty)
  }

  remove(product){
    for (let i = 0; i<store.cartProducts.length;i++){
      if (product.id == store.cartProducts[i].id){
        if (store.cartProducts[i].qty > 0) {
        store.cartProducts[i].qty -=1;
        store.cartQty -=1;
        break;
        }
      }
    }
    store.save();
    $('.oi-cart').html(" " + store.cartQty)
  }
  

  /**räkna ut summan av */
  calculateSum() {
    let sum = 0
    for (let i = 0; i < store.cartProducts.length; i++) {
      sum += store.cartProducts[i].price * store.cartProducts[i].qty;
    }
    return sum;
  }

  /**räkna ut totalvikten */
  calculateTotalWeight() {
    let w = 0;
    for (let i = 0; i < store.cartProducts.length; i++) {
      w += store.cartProducts[i].weight * store.cartProducts[i].qty;
    }
    return w;

  }
  calculateShippingCost() {
    let cost = 0
    for (let i = 0; i < store.cartProducts.length; i++) {

      cost += store.cartProducts[i].weight * store.cartProducts[i].qty;
    }
    cost = cost * 40
    return cost;
  }

  render() {
    let sum = this.calculateSum()
    let shippingCost = this.calculateShippingCost()
    let totalWeight = this.calculateTotalWeight()
    let moms = sum*0.3
    let grandTotalSum = sum + shippingCost +moms


    $('main').html(`
    <section class="container mt-4">
      <div class="row">
        <div class="col">
          <h2 class="h1">Varukorg</h2>
          <h4>Dina varor</h4>
          <ul>
    `)
    //loopa store.cartProducts
    for (let i = 0; i < store.cartProducts.length; i++) {
      let prod = store.cartProducts[i]

      $('main .row .col').append(`
            <li class="list-unstyled shadow p-2 mb-2 bg-white rounded data-list-item">
              <p>
                <img src="${prod.image}" alt="${prod.name}" width="40px" class="rounded">
                </img> ${prod.name}
              </p>
              <p>
                <span> ${prod.price} Kr/st </span> 
                <span id="remove-item-button-${prod.id}" class="oi oi-minus"></span>
                ${prod.qty}
                <span id="add-item-button-${prod.id}" class="oi oi-plus"></span> 
                <span>${prod.price * prod.qty} Kr</span>
              </p>
            </li>
      `)
}
    
    //skriv ut namn, pris per st, antal, pris total

    $('main .container').append(`
          </ul>
          <p>Pris utan moms: ${Math.round(sum)} kr</p>
          <p>Moms: ${Math.round(moms)} kr</p>
          <h4>Pris med moms: ${Math.round(sum+moms)} kr</h4>
          <p>Vikten av dina valda produkter: ${Math.round(totalWeight)} kg</p>
          <p>Fraktkostnad för dina valda produkter: ${Math.round(shippingCost)} kr</p>
          <h4>Att betala: ${Math.round(grandTotalSum)} kr</h4>
          </div>
        </div>
      </section>
    </section>
    `);
  }
}
