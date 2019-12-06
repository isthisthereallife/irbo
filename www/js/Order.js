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
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="confirmationModal">
  Lägg beställning
</button>

<!-- Modal -->
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
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="paymentModal">jaaa!</button></a>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">nej</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true">
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
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="paymentModal">jaaa!</button></a>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">nej</button>
      </div>
    </div>
  </div>
</div>
</section>


`);
  }
}
