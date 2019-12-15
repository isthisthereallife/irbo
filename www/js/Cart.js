class Cart {

  constructor() {

    store.cartProducts = store.cartProducts || [];
    store.cartQty = store.cartQty || 0;

    store.save();
  }

  tusentalsavskiljare(siffror) {
    siffror = siffror.toString()
    let sifArr = siffror.split("")
    if (sifArr.length > 3) {
      for (let i = sifArr.length - 1; i > 0; i = i - 3) {
        if ((i - 3) >= 0) {
          sifArr.splice(i - 2, 0, " ")
        }
      }
    }
    siffror = sifArr.toString()
    siffror = siffror.replace(/,/g, "")
    return siffror
  }
  /**
   * lägga till produkter i kundvagnen
   * @param {*} product;
   * produkten som ska läggas i kundvagnen
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
      store.cartProducts.push(product);
    }
    //öka antalet varor i kundvagnen
    store.cartQty += 1;
    //spara
    store.save();
    //skriv om siffran vid bilden, utgå från antalet varor i kundvagnen
    $('.oi-cart').html(" " + store.cartQty);
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
    $('.oi-cart').html(" " + store.cartQty);
  }
  //töm kundvagnen helt
  clearCart() {
    for (let item of store.cartProducts) {
      this.delete(item);
    }
    store.cartQty = 0;
    store.save();
    $('.oi-cart').html(" " + store.cartQty);
    this.render();
  }

  /**
   * ta bort förekomsten av en viss produkt i kundvagnen
   * @param {*} product ;
   */
  delete(product) {
    for (let i = 0; i < store.cartProducts.length; i++) {
      if (product.id === store.cartProducts[i].id) {
        store.cartQty -= store.cartProducts[i].qty;
        store.cartProducts[i].qty = 1;
        store.cartProducts.splice(i, 1);
      }
    }
    store.save();
    $('.oi-cart').html(" " + store.cartQty);
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
      w += item.weight * item.qty;
    }
    return w;

  }
  calculateShippingCost() {
    let cost = 0
    for (let item of store.cartProducts) {
      cost += item.weight * item.qty;
    }
    cost = cost * 40;
    return cost;
  }

  // hur många produkter gratis?
  discountNrs(qty) {
    return Math.floor(qty / 3);
  }

  //priset av gratisprodukterna
  calculateDiscount(discount, price, amountOfDiscounts) {
    return discount ? amountOfDiscounts * price : 0;
  }


  render() {
    if (store.cartProducts.length > 0) {
      let sum = this.calculateSum()
      $('main').html(`
      <section class="container mt-4">
			<section class="row">
				<section class="col">
					<h2 class="h1 text-center">Varukorg</h2>
					<h4>Dina varor</h4>
					<ul>
    `)
      //loopa store.cartProducts
      for (let item of store.cartProducts) {

        //kolla om det ska has discount
        let amountOfDiscounts = this.discountNrs(item.qty);
        let discountSum = this.calculateDiscount(item.discount, item.price, amountOfDiscounts);
        sum -= discountSum;

        let itemprice = this.tusentalsavskiljare(item.price)
        let itemsum = this.tusentalsavskiljare(item.price * item.qty)
        if (discountSum > 0) {
          $('main .row .col').append(`
                        <li class="list-unstyled shadow p-2 mb-2 bg-white rounded data-list-item">
                        <p>
                            <img src="${item.image}" alt="${item.name}" width="40px" class="rounded">
                             ${item.name}
                        </p>
                        <p>
                            <span id="delete-item-button-${item.id}" class="oi oi-delete"></span>
                            <span> ${itemprice} Kr/st </span> 
                            <span id="remove-item-button-${item.id}" class="oi oi-minus"></span>
                            ${item.qty}
                            <span id="add-item-button-${item.id}" class="oi oi-plus"></span> 
                            <span class="data-price">${itemsum} Kr</span><section></section>
                            <span >Du tjänar ${discountSum} kr, du får ${amountOfDiscounts} gratis!</span></p></li>`)
        }
        else {
          $('main .row .col').append(`
                    <li class="list-unstyled shadow p-2 mb-2 bg-white rounded data-list-item">
                        <p>
                            <img src="${item.image}" alt="${item.name}" width="40px" class="rounded">
                            ${item.name}
                        </p>
                        <p>
                            <span id="delete-item-button-${item.id}" class="oi oi-delete"></span>
                            <span> ${itemprice} Kr/st</span> 
                            <span id="remove-item-button-${item.id}" class="oi oi-minus"></span>
                            ${item.qty}
                            <span id="add-item-button-${item.id}" class="oi oi-plus"></span> 
                            <span class="data-price">${itemsum} Kr</span>
                        </p>
                    </li>
          `)
        }
      }

      let shippingCost = this.calculateShippingCost()
      let totalWeight = this.calculateTotalWeight()
      let moms = sum / 4
      let grandTotalSum = sum + shippingCost

      sum = this.tusentalsavskiljare(Math.round(sum))
      shippingCost = this.tusentalsavskiljare(Math.round(shippingCost))
      totalWeight = this.tusentalsavskiljare(Math.round(totalWeight))
      moms = this.tusentalsavskiljare(Math.round(moms))
      grandTotalSum = this.tusentalsavskiljare(Math.round(grandTotalSum))
      store.grandTotalSum = grandTotalSum
      store.save()

      //skriv ut namn, pris per st, antal, pris total
      $('main .container').append(`
                        </ul>
                        <h4 class="cartText">Pris: ${sum} kr</h4>
                        <p class="cartText">Varav moms: ${moms} kr</p>
                        <p class="cartText">Vikt: ${totalWeight} kg</p>
                        <p class="cartText">Fraktkostnad: ${shippingCost} kr</p>
                        <h4 class="cartText">Att betala: ${grandTotalSum} kr</h4>
                    </section>
                    <section>
                        <a class="nav-link ml-0 pl-0 mt-2 mb-3" href="#orderpage">
                            <button type="button" class="btn btn-primary">Beställ här</button>
                        </a>
                    </section>
                    <section>
                        <a class="nav-link ml-0 pl-0">
                            <button type="button" class="btn btn-secondary" id="clear-cart-button">Töm varukorgen</button>
                        </a>
                    </section>
                </section>
            </section>
    `);
    }

    else {
      $('main').html(`
        <section class="container mt-4 ml-5">
            <section class="row">
                <section class="col">
                    <section class="row ml-1">
                        <h2 class="h1">Varukorg</h2>
                    </section>
                    <section class="row ml-1">
                        <h4>Din varukorg är tom!</h4>
                    </section>
                    <section class="row"> 
                        <a class="nav-link" href="#produkter">
                            <button type="button" class="btn btn-primary btn-lg productpage-btn">Till butiken</button>
                        </a>
                    </section>
                </section>
            </section>
        </section>
    `)
    }
  }
}
