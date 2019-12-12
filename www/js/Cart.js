class Cart {

  constructor() {
    //skapa en array i localstorage om det inte redan finns en
    store.cartProducts = store.cartProducts || [];
    store.cartQty = store.cartQty || 0;
    //to do, en map för kvantitet
    //id som nycklar, kvantitet som värde
    store.notthebestsolutionbutAsolution = 1
    store.save();

    //2DO jag har skapat nya problem
    // största problemet: events som kickar 2 ggr
    //
    // andra problem:
    // allt räknas inte om när jag byter cart
    // updateknappen: redundant? aktuell cart (ska) sparas automatiskt när en byter till en annan
    // se till att store.cartQty aldrig kan bli negativ


   
    // ett sätt att skriva över aktuell cart med ny information
    $('main').on('click', '#btn-update-cart', (e) => {
      this.updateCart()
    })

    
    //$('#data-cart-dropdown').append(`<a class="dropdown-item" id="cart-number-${i}>${store.cartlist[i].nameOfCart}</a>
  }

  updateCart() {
    let cartName = store.cartlist[store.currentCart].nameOfCart
    let cartInfo = {
      products: store.cartProducts,
      nameOfCart: cartName,
      cartQty: store.cartQty
    }
    store.cartlist[store.currentCart] = cartInfo
    store.save()
    $('#btn-update-cart').text(`${store.cartlist[store.currentCart].nameOfCart} uppdaterad`)
  }


  addCart() {
    // store.currentCart=0;
    // if (store.cartProducts.length > 0) {

    //första gången en ny kundvagn skapas
    let cartInfo = {}
    let cartName = ""
    if (store.cartlist.length === 0) {
      cartInfo = {
        products: store.cartProducts,
        nameOfCart: "Första Kundvagnen",
        cartQty: store.cartQty
      }
      store.cartlist.push(cartInfo)
      //töm aktuell vagn
      store.cartProducts = []
      store.cartQty = 0
      //spara nya vagnen till nästa plats
      cartName = $("#data-newcartname").val() || "kundvagn " + (store.cartlist.length)
      cartInfo = {
        products: store.cartProducts,
        nameOfCart: cartName,
        cartQty: store.cartQty
      }
      store.cartlist.push(cartInfo)
      store.currentCart = store.cartlist.length-1
      store.save()
      this.render()
      $('oi oi-cart').html(" " + store.cartQty)
      $('#add-cart-btn').text(`Aktuell kundvagn: ${cartName}`)
    }
    //gång n+1, uppdatera store.cartlist[store.currentcart] med aktuell cartinfo, sedan skapa en ny tom vagn
    else{
      let cartName = store.cartlist[store.currentCart].nameOfCart
      cartInfo = {
        products: store.cartProducts,
        nameOfCart: cartName,
        cartQty: store.cartQty
      }
    

    //fräscha upp currentcart
    store.cartlist[store.currentCart] = cartInfo
    //töm aktuell vagn
    store.cartProducts = []
    store.cartQty = 0

    //spara nya vagnen till nästa plats, med valt namn eller inte
    cartName = $("#data-newcartname").val() || "Kundvagn " + (store.cartlist.length)
    cartInfo = {
      products: store.cartProducts,
      nameOfCart: cartName,
      cartQty: store.cartQty
    }
    store.cartlist.push(cartInfo)
    //nu är vi i den nya (tomma) carten
    store.currentCart = store.cartlist.length-1
    
    store.save()
    this.render()
    $('oi oi-cart').html(" " + store.cartQty)
    // $('#add-cart-btn').text(`Aktuell kundvagn: ${store.cartlist[store.currentCart].nameOfCart}`)
  }

    // }
    // else {
    //   $("#data-newcartname").val("Lägg något i korgen först")
    // }
  }







  /**
   * lägga till produkter i kundvagnen
   * @param {*} product produkten som ska läggas i kundvagnen
   */
  add(product) {
    //bool för att se om valet är unikt/nytt
    let unique = true;


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

  /**
   * minska antalet av en vara i kundvagnen
   * @param {*} product produkten som ska minska i antal
   */
  remove(product) {
    for (let item of store.cartProducts) {
      if (product.id == item.id) {
        if (item.qty > 1) {
          item.qty--;
          store.cartQty--;
          break;
        }
      }
    }
    store.save();
    $('.oi-cart').html(" " + store.cartQty)
  }
  //töm kundvagnen helt
  clearCart() {
    for (let item of store.cartProducts) {
      this.delete(item)
    }
    store.cartQty = 0
    store.save();
    $('.oi-cart').html(" " + store.cartQty)
    this.render()
  }

  /**
   * ta bort förekomsten av en viss produkt i kundvagnen
   * @param {*} product 
   */
  delete(product) {
    for (let i = 0; i < store.cartProducts.length; i++) {

      if (product.id === store.cartProducts[i].id) {
        store.cartQty -= store.cartProducts[i].qty;
        store.cartProducts[i].qty = 1;
        store.cartProducts.splice(i, 1)
      }
    }
    store.save();
    $('.oi-cart').html(" " + store.cartQty)
  }

  /** räkna ut summan av vald produkt */
  calculateSum() {
    let sum = 0;
    for (let item of store.cartProducts) {
      sum += item.price * item.qty;
    }
    return sum;
  }

  /**räkna ut totalvikten */
  calculateTotalWeight() {
    let w = 0;
    for (let item of store.cartProducts) {
      w += item.weight * item.qty
    }
    return w;

  }
  calculateShippingCost() {
    let cost = 0
    for (let item of store.cartProducts) {
      cost += item.weight * item.qty
    }
    cost = cost * 40
    return cost;
  }

  // hur många produkter gratis?
  discountNrs(qty) {
    return Math.floor(qty / 3);
  }

  //priset av gratisprodukterna
  calculateDiscount(discount, price, amountOfDiscounts) {
    return discount ? amountOfDiscounts * price : 0
  }

  render() {
    $('main').html(/*html*/`
    <input type="text" name="newcartname" id="data-newcartname" placeholder="Namnge kundvagn" value=""></input> <button type="button" id="add-cart-btn" class="btn btn-secondary">Skapa ny kundvagn</button>
    `)
    //om cartlist har innehåll
    if (store.cartlist.length > 0) {
      $('main').append(/*html*/`
      <button type="button" class="btn btn-primary" id="btn-update-cart">Aktuell vagn: ${store.cartlist[store.currentCart].nameOfCart}</button>
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Välj kundvagn
  </button>
  <div class="dropdown-menu" id="data-cart-dropdown">
  `)
      for (let i = 0; i < store.cartlist.length; i++) {
        console.log("hmm")
        $('#data-cart-dropdown').append(`<a class="dropdown-item" data-cartnumber="${i}">${store.cartlist[i].nameOfCart}</a>
    `)
      }
      $('#data-cart').append(`
  </div>
</div>`)
    }


    if (store.cartProducts.length > 0) {
      let sum = this.calculateSum()
      $('main').append(/*html*/`
    <section class="container mt-4">
      <div class="row">
        <div class="col">
          <h2 class="h1">Varukorg</h2>
          <h4>Dina varor</h4>
          <ul>
    `)
      //loopa store.cartProducts
      for (let item of store.cartProducts) {

        //kolla om det ska has discount
        let amountOfDiscounts = this.discountNrs(item.qty)
        let discountSum = this.calculateDiscount(item.discount, item.price, amountOfDiscounts)
        sum -= discountSum

        if (discountSum > 0) {
          $('main .row .col').append(`
            <li class="list-unstyled shadow p-2 mb-2 bg-white rounded data-list-item">
              <p>
                <img src="${item.image}" alt="${item.name}" width="40px" class="rounded">
                </img> ${item.name}
              </p>
              <p>
              <span id="delete-item-button-${item.id}" class="oi oi-delete"></span>
                <span> ${item.price} Kr/st </span> 
                <span id="remove-item-button-${item.id}" class="oi oi-minus"></span>
                ${item.qty}
                <span id="add-item-button-${item.id}" class="oi oi-plus"></span> 
                <span class="data-price">${item.price * item.qty} Kr</span><div></div>
                <span >Du tjänar ${discountSum} kr, du får ${amountOfDiscounts} gratis!</span></p></li>`)
        }
        else {
          $('main .row .col').append(`
            <li class="list-unstyled shadow p-2 mb-2 bg-white rounded data-list-item">
              <p>
                <img src="${item.image}" alt="${item.name}" width="40px" class="rounded">
                </img> ${item.name}
              </p>
              <p>
              <span id="delete-item-button-${item.id}" class="oi oi-delete"></span>
                <span> ${item.price} Kr/st </span> 
                <span id="remove-item-button-${item.id}" class="oi oi-minus"></span>
                ${item.qty}
                <span id="add-item-button-${item.id}" class="oi oi-plus"></span> 
                <span class="data-price">${item.price * item.qty} Kr</span></p></li>`)
        }
      }



      let shippingCost = this.calculateShippingCost()
      let totalWeight = this.calculateTotalWeight()
      let moms = sum / 4
      let grandTotalSum = sum + shippingCost

      store.grandTotalSum = grandTotalSum
      store.save()

      //skriv ut namn, pris per st, antal, pris total
      $('main .container').append(`
          </ul>
          <h4>Pris: ${Math.round(sum)} kr</h4>
          <p>Varav moms: ${Math.round(moms)} kr</p>
          <p>Vikt: ${Math.round(totalWeight)} kg</p>
          <p>Fraktkostnad: ${Math.round(shippingCost)} kr</p>
          <h4>Att betala: ${Math.round(grandTotalSum)} kr</h4>
          </div>
          <div>
            <a class="nav-link ml-0 pl-0 mt-3" href="#orderpage"><button type="button"
            class="btn btn-light startpage-btn order-sm-1 orderBtn order-md-2">Beställ här</button>
          </div><div>
          <a class="nav-link ml-0 pl-0"><button type="button" 
          class="btn btn-danger order-sm-1 order-md-2" id="clear-cart-button">Töm varukorgen</button>
        </div>
        </div>
      </section>
    </section>
    `);
    }

    else {
      $('main').append(/*html*/`
    <section class="container mt-4">
      <div class="col">
        <div class="row">
          <h2 class="h1">Varukorg</h2>
          </div>
          <div class="row">
          <h4>Din varukorg är tom!</h4>
          </div>
          <div class="row"> 
            <a class="nav-link" href="#produkter"><button type="button" class="btn btn-light btn-lg productpage-btn order-sm-1 order-md-2">Till butiken</button></a>
          </div>
          </div>
      </section>
    `)
    }
  }
}
