class ProductList {


  /*
    I am a ProductList.
    I know how to display my products.
  */


  constructor(products) {
    this.products = products;
  }

  render() {
    $('main').attr('data-page','product-list-page');
    $('main').html(`
    <section class="container mt-4">
    <div class="row">
        <div class="col">
          <h1 class="text-center">Våra produkter</h1>
        </div>
      </section>
      <section class="row text-center">
        <!-- Notice the "loop" using the array map method -->
        ${this.products.map(product => product.renderInList()).join('')}
      </section>
      </section>
    `);
  }

}