class StartPage {

  /*
    I am a Start page.
    I display the start page...
  */

  render() {
    $('body').attr('data-page','start-page');
    $('main').html(/*html*/`
      <section class="container-fluid start-cover-bg">
      <div class="row start-text">
        <div class="col">
            <h1>Skaffa dig en ny vän</h1>
            <p>En orm är lojalare än en hund och fäller ingen päls.</p>
            <button type="button" class="btn btn-light btn-lg">Slingra mig till webb-shoppen</button>
        </div>
        </div>
      </section>
    `);
  }

}