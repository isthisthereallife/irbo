class OrderHistory {

  constructor() {
    $('body').on('click', '.confirm-buy-btn', e => {
      this.emptyCart()
    })
    $('body').on('click', '#sort-btn', e => {

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
                  <div class="col-4 text-center">
                    <button type="button" class="btn btn-primary" id="sort-btn">Sortera</button></div>
                  </div>
                <div class="row">
                <div class="col-10">
                  
               
                  <ul>
                 
              `)


    store.order.forEach(lillaRender)
    console.log("efter lilla render")
    function lillaRender(item, index) {
      console.log("innuti lillaRender är item: " + item)
      console.log("item.surname: "+item.surname, " index: ", index)
      $('main').append(/*html*/`
      <div class="border-top-it-is-toppen">
        <p>Beställningsdatum: ${item.date}</p>
        <p>Beställare: ${item.firstname} ${item.surname}</p>
        <p>Leveransaddress: ${item.address}</p>
        `)

      for (let i = 0; i < item.order.length; i++) {
        console.log("i: ", i, "item.order: ", item.order)
        $('main').append(/*html*/`<p>${item.order[i].name}, ${item.order[i].qty} st</p>
                    `)}
      console.log("item.price: ", item.price)
      $("main").append(/*html*/`<p>Totalpris: ${item.price} kr</p>
      </div>`)
      
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