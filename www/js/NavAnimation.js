
class NavAnimation {
  constructor() {
    $('nav').append('<div class="underline d-none d-lg-block"/>');
    $('nav .navbar-link').on('click', e => this.underlineSlider(e));
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

  


