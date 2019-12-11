class App {

  constructor() {
    
    this.routes = {
      '': new StartPage(),
      'omoss': new AboutUs(),
      'page404': new Page404(),
      'cart' : new Cart(),
      'orderhistory' : new OrderHistory(),
      'orderpage': new Orderpage(),
      'checkoutpage': new Checkoutpage()
    };
    
    this.cart = new Cart();
    new CartSelection();
    new NavAnimation();
    
    $(window).on('hashchange', () => this.changeRoute());
    
    this.loadProducts();

    $('body').on('click', '.productpage-btn', function () { 
      $('.underline').animate(
        {
          left: $('.product-link').offset().left + 8,
          width: $('.product-link').width()
        },
        500
      );
    })
    //simulate a click on "start" when the logo is clicked
    $('body').on('click', '#nav-item-logo', function () { 
      $('#nav-item-start').click();
    })
  }
  

  changeRoute() {
    // Get the hash from the url - remove the #-sign
    let hash = location.hash.replace(/#/g, '');
    //make it lower case
    hash = hash.toLowerCase();
    // The first part of the hash is everything before a '-' character
    let hashFirstPart = hash.split('-')[0];
    // Look up the "page to show" - the instance to call render on
    // if we do not find any page set the page to 'page404'
    let pageToShow = this.routes[hash] || this.routes.page404;
    // Make the correct menu item active
    // (the css selector finds a-tags with matching hrefs)
    $('header nav a').removeClass('active');
    $(`header nav a[href="#${hashFirstPart}"]`).addClass('active');
    //uppdatera kundvagnsikonen
    $('.oi-cart').html(" " + store.cartQty)
    // Render content
    pageToShow.render();
  }

  // An async function is allowed to await things
  // Loading data from JSON takes time
  // await "pauses" until we have have a result
  async loadProducts() {
    // await väntar med att gå vidare tills t ex laddat klart
    let productsData = await $.getJSON('/json/products.json');

    // We will convert the raw JSON data to instances of Product
    // and store them in this.products
    this.products = [];
    // Loop through the JSON data and create Products
    for (let productData of productsData) {
      let product = new Product(productData, this.cart);
      this.products.push(product);
      //ny nyckel 
      this.routes[product.slug] = product;
    }
    // Make a new product list with all of our products
    // and add it to our routes
    //ProductList får veta vad för produkter som finns
    this.routes.produkter = new ProductList(this.products);

    // Now we are ready to call changeRoute and display
    // the correct page on initial page load..
    this.changeRoute();
  }

}