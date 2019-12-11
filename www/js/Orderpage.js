class Orderpage{

    constructor(){
        console.log('hallå')
        //store.order = [];
      
    }
        

render() {
    $("main").html(/*html*/ `
<section class="container mt-5">
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="firstName">Förnamn</label>
      <input type="firstName" class="form-control" id="firstname">
    </div>
    <div class="form-group col-md-6">
      <label for="inputSurname">Efternamn</label>
      <input type="surname" class="form-control" id="surname">
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail">Email</label>
    <input type="text" class="form-control" id="email" placeholder="ZzzNakebebis@ormbebis.com">
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="address" placeholder="Mjaugatan 1337">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Stad</label>
      <input type="text" class="form-control" id="city">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Postkod</label>
      <input type="text" class="form-control" id="zip">
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">Personnummer</label>
      <input type="text" class="form-control" id="personNr">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Acceptera användarvillkor
      </label>
    </div>
  </div>
</form>
<button type="button" class="btn btn-primary confirmOrder-btn" data-toggle="modal" data-target="#confirmationModal">
  Lägg beställning
</button>


<div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true" data-backdrop="false">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="confirmationModalLabel">Varukorg</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Är du redo att lägga din beställning?
      </div>
      <div class="modal-footer">
      <a class="nav-link" href="#checkoutpage"><button type="button" class="btn btn-primary yes-btn">jaaa!</button></a>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">nej</button>
      </div>
    </div>
  </div>
</div>


`);

$('body').on('click', '.yes-btn', function () { 
  $('body').removeClass('modal-open');
  
  new Order({

  firstname: $('#firstname').val(),
  surname:  $('#surname').val(),
  email: $('#email').val(),
  adress: $('#address').val(),
  city: $('#city').val(),
  date: new Date(),
  order: store.cartProducts,
});

//store.order.push(info)

//console.log('ordern', store.order)

  });
}


}




