class Checkoutpage{
  
    render(){
    $('main').html(/*html*/`
    <section class="container-fluid mt-5">
        <h1>Betalning</h1>
		<div class="tab_container">
	
			<section id="content1" class="tab-content">
				<h3>Cart Items</h3>
		      	<p></p>
			</section>

			<section id="content2" class="tab-content">
				<h3>Customer Information</h3>
		      	<p></p>
			</section>

			<section id="content3" class="tab-content">
				<h3>Shipping</h3>
		      	<p></p>
			</section>

			<section id="content4" class="tab-content">
				<h4 class="payment-title">Choose your payment method</h4>
		      	<form action="" method="post">
      <div class="pymt-radio">
      
      
    <div class="row-payment-method payment-row">
      <div class="select-icon">
        <input type="radio" id="radio1" name="radios" value="pp">
        <label for="radio1"></label>
      </div>
      <div class="select-txt">
        <p class="pymt-type-name">Paypal</p>
        <p class="pymt-type-desc">Safe payment online. Credit card needed. PayPal account is not necessary.</p>
      </div>
      <div class="select-logo">
        <img src="https://www.dropbox.com/s/pycofx0gngss4ef/logo-paypal.png?raw=1" alt="PayPal"/>
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
            <option selected>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>          
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
        <a class="nav-link" href="#orderhistory"><button type="button" class="btn btn-primary text-nowrap">Slutför köp</button></a>
    </div>
    <div class="col-4">
        <a class="nav-link" href="#cart"><button type="button" class="btn btn-secondary text-nowrap goback-btn">Tillbaks till kundvagnen</button></a>
        </div>
    </div></div>
      
    </div>
    </form>
			
		</div>

</section>


`)}
    }