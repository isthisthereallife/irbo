class OrderHistory{
    constructor(){
        store.oldOrders = store.oldOrders || [];
    
    $('body').on('click', '.confirmOrder-btn', e =>{
        e.preventDefault();
        this.addToOldOrders()
        this.emptyCart()
    })


}
    addToOldOrders(){
        store.oldOrders.push(store.cartProducts)
        console.log("Stored contents of store.cartProducts to store.oldOrders")
    }
    emptyCart(){
        store.cartProducts = []
        store.cartQty = 0
        $('.oi-cart').html(" " + store.cartQty)
        console.log("Emptied store.cartProducts")
    }
    
            
    render(){ 
        $("main").html(`
            <section class="container">
                <h1 class="text-center">Din order historik</h1>
                <h4 class="float-right">Sortera efter datum <button class=" btn-primary btn">senaste</button>
                </h4>
                <section class="row">
                    <img class="col-6" src="${Product.image}" alt="${Product.name}">
                    <span class="col-6"> ${Product.price} Kr/st</span> 
                </section>
            </section>
        `);
    }
};