class OrderHistory {

  constructor() {
    $('body').on('click', '#confirm-buy-btn', e => {
      new Order(store.newOrder)
      store.newOrder = {}
      this.emptyCart()
    })
    $('body').on('click', '#sort-btn', e => {
      store.order.reverse();
      this.render()
    })
  }

  render() {


    $("main").html(/*html*/`
            <section class="container">
              <section class="row">
                <section class="col">
                  <h2 class="text-center mt-4">Tack för att du handlar hos oss!</h2>
                <section class="row">
                  <section class="col-8">
                    <h3 class="mt-3 ">Din orderhistorik</h3></section>
                  <section class="col-4 text-center">
                    <button type="button" class=" mt-3 btn btn-primary" id="sort-btn">Sortera</button></section>
                  </section>
                <section class="row">
                <section class="col-10">
                  <ul>
                 
              `)


    store.order.forEach(lillaRender)
    function lillaRender(item, index) {
      $('main .container').append(/*html*/`
      <section class="border-top-it-is-toppen">
        <p class="orderhistory-item-info h5">Beställningsdatum: ${item.date}</p>
        <p class="orderhistory-item-info">Beställare: ${item.firstname} ${item.surname}</p>
        <p class="orderhistory-item-info">Leveransaddress: ${item.address}</p>
        `)

      for (let i = 0; i < item.order.length; i++) {
        $('main .container').append(/*html*/`<p class="orderhistory-item-info">${item.order[i].name}, ${item.order[i].qty} st</p>`)
      }
      $("main .container").append(/*html*/`<p class="orderhistory-item-info mt-3 mb-2 h5">Totalpris: ${item.price} kr</p>
      </section>`)

    }
    $('main .container').append(/*html*/`<span><a class="nav-link nav-till-butik" href="#produkter"><button type="button" class="btn btn-primary btn-lg productpage-btn order-sm-1 order-md-2">Till butiken</button></a>
      </span>`)
  }

  emptyCart() {
    store.cartProducts = []
    store.cartQty = 0
    store.save()
    $('.oi-cart').append(" " + store.cartQty)
  }


};