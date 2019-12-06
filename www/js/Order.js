class Order {
  constructor() {
    console.log("shhhhh");
  }
  render() {
    $("main").html(/*html*/ `
<section class="container mt-5">
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="firstName">Förnamn</label>
      <input type="firstName" class="form-control" id="inputfirstName">
    </div>
    <div class="form-group col-md-6">
      <label for="inputSurname">Efternamn</label>
      <input type="password" class="form-control" id="inputSurname">
    </div>
  </div>
  <div class="form-group">
    <label for="inputEmail">Email</label>
    <input type="text" class="form-control" id="inputEmail" placeholder="ZzzNakebebis@ormbebis.com">
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Mjaugatan 1337">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Lägenhetsnummer, våning, portkod">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Stad</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Postkod</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">Personnummer</label>
      <input type="text" class="form-control" id="inputZip">
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
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#confirmationModal">
  Lägg beställning
</button>

<!-- CONFIRMATION-Modal -->
<div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true">
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
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#paymentModal">jaaa!</button></a>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">nej</button>
      </div>
    </div>
  </div>
</div>

<!-- PAYMENT-Modal -->

<div class="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true">
  <div class="modal-dialog-lg " role="document">
    <div class="modal-content">
    <section class="container">
      <div class="modal-header">
        <h1>Betalning</h1>
     </div>
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
        <input type="text" class="input cc-txt text-validated" value="4542 9931 9292 2293" />
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
          <option>01</option>
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
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option selected>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
          <option>28</option>
          <option>29</option>
          <option>30</option>
          <option>31</option>            
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
  
  <a href="#cart"><button type="button" class="btn btn-outline-success">Tillbaks till kundvagnen</button></a>
    
    <a href="#orderhistory"><button type="button" class="btn btn-outline-success">Betala</button></a>

  </form>
          </section>
      </div>
</section>
</section>


`);
  }
}
