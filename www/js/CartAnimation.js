class CartAnimation {



  constructor(e) {
    this.productImg = $(e.target).parents('.product').find('img');
    this.imgClone = this.productImg.clone();
    this.addClone();
  }

  addClone() {
    let offset = this.productImg.offset();
    $('body').append(this.imgClone);

    this.imgClone.css({
      position: 'absolute',
      width: this.productImg.width(),
      height: this.productImg.height(),
      ...offset
    });
    this.animateClone();
  }

  animateClone() {

    let cart = $('.oi-cart');

    this.imgClone.animate({
      top: cart.offset().top + 10,
      left: cart.offset().left + 10,
      width: 0,
      height: 0
    }, 1000, 'swing');

    this.imgClone.animate({
      width: 0,
      height: 0
    },
      () => {
        this.imgClone.remove();
      }
    );
  }


}