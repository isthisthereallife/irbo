class Orderpage{

  constructor(){
    console.log('hallå')
    //store.order = [];
        
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
        price: store.grandTotalSum
      });
//store.order.push(info)
//console.log('ordern', store.order)
  });
}

render() {
    $("main").html(/*html*/ `
    <section class="container mt-3">
    <h1 class="text-center">Personlig information</h1>
			<form>
				<section class="form-row">
					<section class="form-group col-md-6">
						<label for="firstName">Förnamn</label>
						<input type="firstName" class="form-control" id="firstname" placeholder="ex: Alexander">
					</section>
					<section class="form-group col-md-6">
						<label for="inputSurname">Efternamn</label>
						<input type="surname" class="form-control" id="surname" placeholder="ex: Svensson">
					</section>
				</section>
				<section class="form-group">
					<label for="inputEmail">Email</label>
					<input type="text" class="form-control" id="email" placeholder="ex: alexaxander@hotmail.com">
				</section>
				<section class="form-group">
					<label for="inputAddress">Address</label>
					<input type="text" class="form-control" id="address" placeholder="ex: Mjaugatan 1337">
				</section>
				<section class="form-row">
					<section class="form-group col-md-6">
						<label for="inputCity">Stad</label>
						<input type="text" class="form-control" id="city" placeholder="ex: Stockholm">
					</section>
					<section class="form-group col-md-2">
						<label for="inputZip">Postkod</label>
						<input type="text" class="form-control" id="zip" placeholder="ex: 123 45">
					</section>
					<section class="form-group col-md-4">
						<label for="inputZip">Personnummer</label>
						<input type="text" class="form-control" id="personNr" placeholder="xxxxxx-xxxx">
					</section>
				</section>
				<section class="form-group">
					<section class="form-check">
						<input class="form-check-input" type="checkbox" id="gridCheck">
						<label class="form-check-label" for="gridCheck">
							Acceptera användarvillkor
						</label>
					</section>
				</section>
			</form>
			<button type="button" class="btn btn-success confirmOrder-btn" data-toggle="modal" data-target="#confirmationModal">
				Lägg beställning
			</button>
			<button type="button" class="ml-3 btn btn-danger" href="#productlist">Avbryt beställning</button>

			<section class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true" data-backdrop="false">
				<section class="modal-dialog" role="document">
					<section class="modal-content">
						<section class="modal-header">
							<h5 class="modal-title" id="confirmationModalLabel">Varukorg</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</section>
						<section class="modal-body">
							Är du redo att lägga din beställning?
						</section>
						<section class="modal-footer">
							<a class="nav-link" href="#checkoutpage"><button type="button" class="btn btn-primary yes-btn">Ja!</button></a>
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Nej</button>
						</section>
					</section>
				</section>
			</section>


`)};




}




