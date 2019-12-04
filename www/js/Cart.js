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

      store.cartProducts.push(product)
    }
    //öka antalet varor i kundvagnen
    store.cartQty += 1;
    //spara
    store.save();
    //skriv om siffran vid bilden, utgå från antalet varor i kundvagnen
    $('.oi-cart').html(" " + store.cartQty)
  }

  remove(product){
    for( let item of store.cartProducts){
      if(product.id == item.id){
        if (item.qty>1){
          item.qty--;
          store.cartQty--;
          break;
        }
      }
    }
    store.save();
    $('.oi-cart').html(" " + store.cartQty)
  }
  

  /**räkna ut summan av vald produkt */
  calculateSum() {
    let sum = 0
    for (let item of store.cartProducts){
      sum+= item.price * item.qty;
    }
    return sum;
  }

  /**räkna ut totalvikten */
  calculateTotalWeight() {
    let w = 0;
    for (let item of store.cartProducts){
      w+= item.weight * item.qty
    }
    return w;

  }
  calculateShippingCost() {
    let cost = 0
    for (let item of store.cartProducts){
      cost+= item.weight * item.qty
    }
    cost = cost * 40
    return cost;
  }

  render() {
    let sum = this.calculateSum()
    let shippingCost = this.calculateShippingCost()
    let totalWeight = this.calculateTotalWeight()
    let moms = sum/4
    let grandTotalSum = sum + shippingCost


    $('main').html(`
    <section class="container mt-4">
      <div class="row">
        <div class="col">
          <h2 class="h1">Varukorg</h2>
          <h4>Dina varor</h4>
          <ul>
    `)
    //loopa store.cartProducts
    for (let item of store.cartProducts) {

      $('main .row .col').append(`
            <li class="list-unstyled shadow p-2 mb-2 bg-white rounded data-list-item">
              <p>
                <img src="${item.image}" alt="${item.name}" width="40px" class="rounded">
                </img> ${item.name}
              </p>
              <p>
                <span> ${item.price} Kr/st </span> 
                <span id="remove-item-button-${item.id}" class="oi oi-minus"></span>
                ${item.qty}
                <span id="add-item-button-${item.id}" class="oi oi-plus"></span> 
                <span>${item.price * item.qty} Kr</span>
              </p>
            </li>
      `)
    }
    
    //skriv ut namn, pris per st, antal, pris total
    $('main .container').append(`
          </ul>
          <h4>Pris: ${Math.round(sum)} kr</h4>
          <p>Varav moms: ${Math.round(moms)} kr</p>
          <p>Vikt: ${Math.round(totalWeight)} kg</p>
          <p>Fraktkostnad: ${Math.round(shippingCost)} kr</p>
          <h4>Att betala: ${Math.round(grandTotalSum)} kr</h4>
          </div>
        </div>
      </section>
    </section>
    `);
  }
}