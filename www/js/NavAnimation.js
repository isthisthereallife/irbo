
class NavAnimation {
  constructor() {
    $('nav').append('<div class="underline d-none d-lg-block"/>');
    $('nav .navbar-link').on('click', e => this.underlineSlider(e));

    // fejka ett klick på hamburgaren efter val från dropdown-naven
    $('nav').on('click', '.nav-item', function () {
      if ($('#navbarSupportedContent').hasClass('show')) {
        $('#data-burgarn').click();
      }
    })

  }




  underlineSlider(e) {
    let clickedLink = $(e.target);
    let left = $(clickedLink).offset().left + 8;
    let width = $(clickedLink).width();
    let underline = $('.underline');



    underline.animate(
      {
        left: left,
        width: width
      },
      500
    );

  }

}





