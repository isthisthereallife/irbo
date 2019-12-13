class StartPage {

  /*
    I am a Start page.
    I display the start page...
  */

  render() {
    $('main').attr('data-page','start-page');
    $('main').html(/*html*/`
      <section class="container-fluid start-cover-bg">
      <section class="row">
        <section class="col start-text">
            <h1>Skaffa dig en ny vän</h1>
            <p>En orm är lojalare än en hund och fäller ingen päls.</p>
            <a class="nav-link" href="#produkter"><button type="button" class="btn btn-light btn-lg productpage-btn order-sm-1 order-md-2">KÖP ORM NU</button>
        </section></section>
      </section>
    `);

  
  }
}

