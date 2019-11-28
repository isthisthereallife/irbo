class AboutUs {

  /*
    I am an About Us page.
    I display info about us.
  */

  render() {
    $('main').attr('data-page','about-us-page');
    $('main').html(/*html*/`
      <section class="container mt-4">
      <div class="row">
        <div class="col">
          <h1>Om oss</h1>
          <p>Vi är litet företag som säljer ekologiska badprodukter.</p>
        </div>
      </div>  
      </section>
    `);
  }

}