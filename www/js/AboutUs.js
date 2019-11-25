class AboutUs {

  /*
    I am an About Us page.
    I display info about us.
  */

  render() {
    $('main').html(/*html*/`
      <section class="container data-aboutUs">
        <section class="row d-flex">
          <div class="col col-12 col-md-6">
            <h2 class="h1">About us</h2>
            <p>We love snakes. All the snakes.</p>
            <p>Green snakes, yellow snakes, red snakes. </p>
            <p>You name it.</p>
            <p>We love it</p>
          </div>
          <div class="col col-12 col-md-6">
          <h2> Our favourite snakes:</h2>
          <ul>
            <li>Huggorm</li>
            <li>Anaconda</li>
            <li>Kobra</li>
            </ul>
          </section>
        <section class="row d-flex">
          <section class="col">
          </section>
        </section>
      </section>
      `);
  }

}