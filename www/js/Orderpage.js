class Orderpage {
  constructor() {
	//store.order = [];
	
	$('body').on('click', '.confirmOrder-btn', () => {
		setTimeout(() => $('body').css({padding:0}), 0);
	});

    $('body').on('click', '.yes-btn', () => {
      $('body')
        .removeClass('modal-open')
        .css({ padding: 0 });
      //sparas tills köpet gått igenom
      store.newOrder = {
        firstname: $('#firstname').val(),
        surname: $('#surname').val(),
        email: $('#email').val(),
        adress: $('#address').val(),
        city: $('#city').val(),
        date: new Date().toLocaleString('SV'),
        order: store.cartProducts,
        price: store.grandTotalSum
      };
    });
  }

  render() {
    $("main").html(/*html*/ `
    <section class="container mt-3">
    <h1 class="text-center">Dina uppgifter</h1>
			<form>
				<section class="form-row">
					<section class="form-group col-md-6">
						<label for="firstName">Förnamn</label>
						<input type="firstName" class="form-control" id="firstname" placeholder="ex: Alexander" required>
					</section>
					<section class="form-group col-md-6">
						<label for="inputSurname">Efternamn</label>
						<input type="surname" class="form-control" id="surname" placeholder="ex: Svensson" required>
					</section>
				</section>
				<section class="form-group">
					<label for="inputEmail">Email</label>
					<input type="text" class="form-control" id="email" placeholder="ex: alexaxander@hotmail.com" required>
				</section>
				<section class="form-group">
					<label for="inputAddress">Address</label>
					<input type="text" class="form-control" id="address" placeholder="ex: Mjaugatan 1337" required>
				</section>
				<section class="form-row">
					<section class="form-group col-md-6">
						<label for="inputCity">Stad</label>
						<input type="text" class="form-control" id="city" placeholder="ex: Orminge" required>
					</section>
					<section class="form-group col-md-2">
						<label for="inputZip">Postkod</label>
						<input type="text" class="form-control" id="zip" placeholder="ex: 123 45" required>
					</section>
					<section class="form-group col-md-4">
						<label for="inputZip">Personnummer</label>
						<input type="text" class="form-control" id="personNr" placeholder="xxxxxx-xxxx" required>
					</section>
				</section>
				<section class="form-group">
					<section class="form-check">
						<input class="form-check-input" type="checkbox" id="gridCheck" required>
						<label class="form-check-label" for="gridCheck">
							Acceptera användarvillkor
						</label>
					</section>
					<button type="button" class="btn btn-primary confirmOrder-btn mt-3" data-toggle="modal" data-target="#confirmationModal">
						Bekräfta beställning
					</button>
					<button type="cancel" class="formPageBtn btn btn-secondary mt-3" formnovalidate formaction="#cart">
						Avbryt 
					</button>
				</section>
			</form>

			<section class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true" data-backdrop="true">
				<section class="modal-dialog" role="document">
					<section class="modal-content cool-modal">
						<section class="modal-header cool-modal">
							<h5 class="modal-title" id="confirmationModalLabel">Beställningsbekräftelse</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</section>
						<section class="modal-body">
              Är du redo att lägga din beställning?
						</section>
						<section class="modal-footer cool-modal-footer">
							<a class="nav-link" href="#checkoutpage"><button type="button" class="btn btn-primary yes-btn">Ja!</button></a>
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Nej</button>
						</section>
					</section>
				</section>
			</section>
`);
  }
}
