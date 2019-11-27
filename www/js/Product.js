class Product {
  /*
    I am a Product.

    I know how to display myself on a single page (product detail).
    I also know how to display myself in a list of products.
    On top of that I know how to call the cart when someone
    clicks my buy-button.
  */

  constructor(data, cart) {
    // Object.assign is used to copy all properties from data to me
    //Object.assign kopierar från source-objektet (eg. data) till target-objektet(eg. this)
    Object.assign(this, data);
    // I also know who is my cart (the App sent me this info)
    this.cart = cart;
    // I add listeners to my buy-button(s)
    this.addBuyButtonListener();
  }

  addBuyButtonListener() {
    // this a delegated event handler:
    // * when you click on the body
    // * if you clicked inside something matching the css-selector
    //   #buy-button-myId
    // * then run the anonymous arrow function...
    $("body").on("click", `#buy-button-${this.id}`, e => {
      // e is the event object
      // it has a preventDefault method
      // when you call that method it prevents the browser
      // from doing what it normally does on a certain element
      // since the buy button is sometimes inside a a-tag
      // in this case it prevents us from following the a-tag
      e.preventDefault();
      // this.cart is an instance of Cart
      // add me to that cart
      this.cart.add(this);
    });
  }

  render() {
    // This is how I render myself on a product-detail page
    // there it only me
    $("main").html(/*html*/ `
     <section class="row">
        <div class="col">
          <h2 class="h1">${this.name}</h2>
        </div>
      </section>
      <section class="row">
        <div class="col-12 col-lg-6">
          <p>${this.description}</p>
          <h5 class="pb-2">Orminformation</h5>
          <div class="row pb-4">
              <h6 class="col-3">Pris ${this.price} kr</h6>
              <h6 class="col-3">Vikt ${this.weight} kg</h6>
              <h6 class="col-3">Fraktpris ${this.weight * 40} kr</h6>
              <button id="buy-button-${this.id}" class="btn btn-primary my-2 col-3">Köp</button>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <img class="img-fluid border border-primary rounded" src="${
      this.image
      }">
        </div>
      </section>
    `);
  }

  renderInList() {
    // This is how I render myself in a list of products
    // (this method is called from a ProductList)
    return `
      <div class="col-12 col-md-6 col-lg-4 mt-3">
        <a href="#${this.slug}">
        <img class="img-fluid border border-primary rounded w-70 h-70" src="${this.image}">
          <div class="row mb-3 ml-1">
              <button id="buy-button-${this.id}" class="col-4 btn btn-primary mt-2">Köp</button>
              <div class="col-8">
                <div class="row">
                  <h4 class="-100 col">${this.name}</h4>
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