class Checkoutpage {

  render() {

    //for (let order of store.order){
  $('main').html(/*html*/`
			<section class="container">
				<form id="paymentForm">
					<h1 class="text-center mt-3">Kortbetalning</h1>
				<section>
					<h5>Totalpris: ${store.grandTotalSum}:-</h5>
				</section>
				<section class="form-group">
					<label for="cardNumber">Kortnummer</label>
					<input type="text" class="form-control" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx"/>
				</section>
				<section class="form-row">
					<section class="form-group col-md-6">
						<label for="dateOut">Utgångsdatum</label>
					<section class="form-row">
						<select class="form-control col-5 mr-auto" id="inlineFormCustomSelect">
							<option value="">Månad</option>
							<option value="1">01</option>
							<option value="2">02</option>
							<option value="3">03</option>
							<option value="4">04</option>
							<option value="5">05</option>
							<option value="6">06</option>
							<option value="7">07</option>
							<option value="8">08</option>
							<option value="9">09</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						  </select>		
						<select class="form-control col-5 mr-auto" id="inlineFormCustomSelect">
							<option value="">År</option>
							<option value="1">19</option>
							<option value="2">20</option>
							<option value="3">21</option>
							<option value="4">22</option>
							<option value="5">23</option>
					  </select>	
					 </section>
					</section>
					<section class="form-group col-md-6">
						<label for="cvc">CVC</label>
						<input type="text" class="form-control" id="cvc" placeholder="xxx"/>
					</section>
				</section>
				<button type="submit" class="formPageBtn btn btn-primary" id="confirm-buy-btn" formaction="#orderhistory">
					Bekräfta betalning
				</button>
				<button type="cancel" class=" btn btn-secondary" formnovalidate formaction="#cart">
					Avbryt
				</button>
			</form>
		</section>
		
  `)
  }
}

