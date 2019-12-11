class OrderHistory{

    constructor(){
    $('body').on('click', '.confirm-buy-btn', e =>{
        this.emptyCart()
    })
    }
    
            
    render(){ 
       
        
        $("main").html(`
            <section class="container">
                <h1 class="text-center">Din order historik</h1>
                <h4 class="float-right">Sortera efter datum <button class=" btn-primary btn">senaste</button>
                </h4>
                <section class="row">`)
                
                store.order.forEach(lillaRender)
                function lillaRender(item, index){
                    console.log(item.surname," index: ",index)
                    $("main").append(/*html*/`
                    <p>Beställningsdatum: ${item.date}</p>
                    <p>Beställare: ${item.surname}</p>
                    `)
                    for(let i = 0; i < item.order.length; i++){
                    $("main").append(/*html*/`<p>${item.order[i].name}, ${item.order[i].qty} st</p>
                    `)
                    }
                    $("main").append(/*html*/`<p>Totalpris: ${item.price} kr</p>`)
                }
    }

    emptyCart(){
        store.cartProducts = []
        store.cartQty = 0
        $('.oi-cart').html(" " + store.cartQty)
        console.log("Emptied store.cartProducts")
    }
    
    
};