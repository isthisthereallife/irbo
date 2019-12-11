class Checkoutpage {

  render() {

    //for (let order of store.order){
    $('main').html(/*html*/`
    <section class="container-fluid mt-5 pl-5">
	<h1>Betalning</h1>
	<div class="tab_container">
		<section id="content3" class="tab-content">
			<h3>Totalpris: ${store.grandTotalSum}</h3>
			<p></p>
		</section>

		<section id="content3" class="tab-content">
			<h3>Totalpris:</h3>
			<h4>${store.grandTotalSum}:-</h4>
		</section>

		<section id="content4" class="tab-content">
			<h3 class="payment-title mt-5">Välj hur du vill betala</h3>
			<form action="" method="post">
				<div class="pymt-radio">
					<div class="row-payment-method payment-row">
						<div class="select-icon">
							<input type="radio" id="radio1" name="radios" value="pp">
							<label for="radio1"></label>
						</div>
						<div class="select-txt">
							<p class="pymt-type-name">Klarna</p>
							<p class="pymt-type-desc">Betala smooooooth.</p>
						</div>
						<div class="select-logo">
							<img src="https://www.vegaoo.se/images/rep_cms/images/klarna%20logga.JPG" alt="Klarna" class=""/>
						</div>
					</div>

				</div>
				<div class="pymt-radio">
					<div class="row-payment-method payment-row-last">
						<div class="select-icon hr">
							<input type="radio" id="radio2" name="radios" value="pp" checked>
							<label for="radio2"></label>
						</div>
						<div class="select-txt hr">
							<p class="pymt-type-name">Credit Card</p>
							<p class="pymt-type-desc">Safe money transfer using your bank account. Safe payment online. Credit card needed. Visa, Maestro, Discover, American Express</p>
						</div>
						<div class="select-logo">
							<div class="select-logo-sub logo-spacer">
								<img src="https://www.dropbox.com/s/by52qpmkmcro92l/logo-visa.png?raw=1" alt="Visa"/>
							</div>
							<div class="select-logo-sub">
								<img src="https://www.dropbox.com/s/6f5dorw54xomw7p/logo-mastercard.png?raw=1" alt="MasterCard"/></div>
						</div>
					</div>
				</div>
				<div class="form-cc">
					<div class="row-cc">
						<div class="cc-field">
							<div class="cc-title">Credit Card Number
							</div>
							<input type="text" class="input cc-txt text-validated" placeholder="4542 9931 9292 2293" value="" />
						</div>
					</div>
					<div class="row-cc">
						<div class="cc-field">
							<div class="cc-title">Expiry Date
							</div>
							<select class="input cc-ddl">
								<option selected>19</option>
								<option>20</option>
								<option>21</option>
								<option>22</option>
								<option>23</option>
								<option>24</option>
								<option>25</option>        
							</select>
							<select class="input cc-ddl">
								<option selected>19</option>
								<option>20</option>
								<option>21</option>
								<option>22</option>
								<option>23</option>
								<option>24</option>
								<option>25</option>
								<option>26</option>        
							</select>
						</div>
						<div class="cc-field">
							<div class="cc-title">CVV Code<span class="numberCircle">?</span>
							</div>
							<input type="text" class="input cc-txt"/>
						</div>
					</div>
					<div class="row-cc">
						<div class="cc-field">
							<div class="cc-title">Name on Card
							</div>
							<input type="text" class="input cc-txt"/>
						</div>
					</div>    
				</div>

				<div class="container">
					<div class="row">
						<div class="col-4">
							<a class="nav-link" href="#orderhistory"><button type="button" class="btn btn-primary confirm-buy-btn text-nowrap confirm">Slutför köp</button></a>
						</div>
						<div class="col-4">
							<a class="nav-link" href="#cart"><button type="button" class="btn btn-secondary text-nowrap goback-btn">Tillbaks till kundvagnen</button></a>
						</div>
					</div></div>
				</div>
			</form>
			</div>
		</section>
  `)
  }
}

