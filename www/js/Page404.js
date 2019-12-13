class Page404 {

  /*
    I am a Page404.

    I will be displayed when
    the App could not find a route.
    I will just say "sorry" to the user...
  */


  //metod som körs när changeRoute i App.js kör pageToShow.render() (med Page404 sparad som pageToShow)
  render() {
    $('main').html(/*html*/`
      <section class="row">
        <section class="col">
          <h1>Vi hittade inte sidan 😢...</h1>
          <p>Det här är säkert vårt fel! Ibland bygger vi om vår sida - och produkter kan försvinna från vårt sortiment.</p>
          <p>Vill du kolla in <a href="#produkter">nya fräscha produkter</a>?</p>
        </section>
      </section>
    `);
  }
}