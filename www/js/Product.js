class Product {
  /*
    I am a Product.

    I know how to display myself on a single page (product detail).
    I also know how to display myself in a list of products.
    On top of that I know how to call the cart when someone
    clicks my buy-button.
  */

  constructor(data, cart) {
    // Object.assign is used to copy (ADD, NOT OVERWRITE) all properties from data to me
    //Object.assign kopierar (LÄGGER TILL) från source-objektet (eg. data) till target-objektet(eg. this)
    Object.assign(this, data);
    // I also know who is my cart (the App sent me this info)
    
    // I add listeners to my buy-button(s)
    this.addBuyButtonListener(cart);
    this.addAddItemListener(cart);
    this.addRemoveItemListener(cart);
    this.addDeleteItemListener(cart);
    this.addClearCartListener(cart);
  }

  addClearCartListener(cart) {
    $('body').on('click', `#clear-cart-button`, e => {
      e.preventDefault();
      cart.clearCart();
    })
  }
  
  //deleteknappen på varukorgssidan
  addDeleteItemListener(cart) {
    $('body').on('click', `#delete-item-button-${this.id}`, e => {
      e.preventDefault();
      cart.delete(this);
      cart.render();
    });
  }

  //plusknappen på varukorgssidan
  addAddItemListener(cart) {
    $('body').on('click', `#add-item-button-${this.id}`, e => {
      e.preventDefault();
      cart.add(this);
      cart.render();
    });
  }
  //minusknappen på varukorgssidan
  addRemoveItemListener(cart) {
    $('body').on('click', `#remove-item-button-${this.id}`, e => {
      e.preventDefault();
      cart.remove(this);
      cart.render();
    });
  }

  // köpknappen på produktsidorna
  addBuyButtonListener(cart) {
    $('body').on('click', `#buy-button-${this.id}`, e => {
      e.preventDefault();
      cart.add(this);
      new CartAnimation(e);
    });
  }

  render() {
    // This is how I render myself on a product-detail page
    // there it only me
    $("main").html(/*html*/ `
    <section class="container">
     <section class="row">
        <div class="col ">
          <h2 class="h1 mt-3">${this.name}</h2>
        </div>
      </section>
      <section class="row product">
        <div class="col-12 col-lg-6">
          <p>${this.description}</p>
          <h4 class="mb-2">Orminformation</h4>
          <div class="row pb-4 align-items-center">
              <h6 class="col-7">Pris ${this.price} kr</h6>
              <h6 class="col-5">Vikt ${this.weight} kg</h6>
              <h6 class="col-7">Fraktpris ${this.weight * 40} kr</h6>
              <button id="buy-button-${this.id}" class="buy-button btn btn-primary my-2 col-5">Köp</button>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <img class="img-fluid border border-primary rounded" src="${this.image}">
        </div>
      </section>
      </section>
    `);
  }

  renderInList() {
    // This is how I render myself in a list of products
    // (this method is called from a ProductList)
    return `
        <div class="col-12 col-md-6 col-lg-4 mt-3 product">
          <a href="#${this.slug}">
          <img class="img-fluid border border-primary rounded w-70 h-70" src="${this.image}">
            <div class="row mb-3 ml-1 mt-2">
                <button id="buy-button-${this.id}" class="col-4 btn btn-primary mt-2 buy-btn">Köp</button>
                <div class="col-8">
                  <div class="row">
                    <h4 class="-100 col produktListaRubrik">${this.name}</h4>
                    <h6 class="col-12">${this.price}:-</h6>
                  </div>
                </div>
            </div>
            </div>
          </a>
        </div>
    `;
  }
}