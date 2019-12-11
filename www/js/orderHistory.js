class OrderHistory {

  constructor() {
    $('body').on('click', '.confirm-buy-btn', e => {
      this.emptyCart()
    })
    $('body').on('click', '#sort-btn', e => {
      console.log(JSON.stringify(store.order))

      store.order.reverse();
      console.log(store.order)
      this.render()
    })
  }


  render() {


    $("main").html(/*html*/`
            <section class="container">
              <div class="row">
                <div class="col">
                  <h1 class="text-center mt-5">Tack för att du handlar hos oss!</h1>
                <div class="row">
                  <div class="col-8">
                    <h3 class="text-center mt-5 ">Din orderhistorik</h3></div>
                  <div class="col-4">
                    <button type="button" class="btn btn-primary" id="sort-btn">Sortera</button></div>
                  <div>
                <div class="row">
                <div class="col-10">
                  
               
                  <ul>
                 
              `)


    store.order.forEach(lillaRender)
    function lillaRender(item, index) {
      console.log(item.surname, " index: ", index)

      $('main ul').append(/*html*/`
      <li class="list-unstyled shadow p-2 mb-2 bg-white rounded data-list-item">
        <p>Beställningsdatum: ${item.date}</p>
        <p>Beställare: ${item.surname}</p>
        `)

      for (let i = 0; i < item.order.length; i++) {
        $('main li').append(/*html*/`<p>${item.order[i].name}, ${item.order[i].qty} st</p>
                    `)
      }
      $('main li').append(/*html*/`<p>Totalpris: ${item.price} kr</p>
      </li></ul>
      `)
    }
      $('main').append(/*html*/`<span><a class="nav-link" href="#produkter"><button type="button" class="btn btn-light btn-lg productpage-btn order-sm-1 order-md-2">Till butiken</button></a>
      </span>`)
  }

  emptyCart() {
    store.cartProducts = []
    store.cartQty = 0
    store.save()
    $('.oi-cart').html(" " + store.cartQty)
    console.log("Emptied store.cartProducts")
  }


};