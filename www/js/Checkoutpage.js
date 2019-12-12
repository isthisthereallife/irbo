class Checkoutpage {

  render() {

    //for (let order of store.order){
    $('main').html(/*html*/`
		<form id="paymentForm">
			<section class="container">
				<h1 class="text-center mt-3">Kortbetalning</h1>
				<section>
					<h5>Total beställnings kostnad ${store.grandTotalSum}kr</h5>
				</section>
				<section class="form-group">
					<label for="cardNumber">Kortnummer</label>
					<input type="text" class="form-control" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx"/>
				</section>
				<section class="form-row">
					<section class="form-group col-md-6">
						<label for="dateOut">Utgångsdatum</label>
						<input type="text" class="form-control" id="dateOut" placeholder="månad/år"/>
					</section>
					<section class="form-group col-md-6">
						<label for="cvc">CVC</label>
						<input type="text" class="form-control" id="cvc" placeholder="xxx"/>
					</section>
				</section>
				<section class="form-group">
					<section class="form-check">
						<input class="form-check-input" type="checkbox" id="gridCheck"/>
						<label class="form-check-label" for="gridCheck">
							Acceptera användarvilkoren
						</label>
					</section>
				</section>
				<button type="submit" class="formPageBtn btn btn-success" formaction="#orderhistory">
					Bekräfta betalning
				</button>
				<button type="cancel" class="formPageBtn btn btn-danger" disableValidation="true" formaction="#produkter">
					Avbryt beställning
				</button>
			</section>
		</form>
  `)
  }
}

