class orderHistory{
    constructor(){

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