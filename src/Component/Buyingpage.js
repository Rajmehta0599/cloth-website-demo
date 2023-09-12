import React from 'react';
function Buyingpage() {
  return (
    <>
      <form class="row g-3" action='/userbuy' method='post'>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" name='inputEmail4' id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputname4" class="form-label">Name:</label>
          <input type="text" class="form-control" name='inputname4' id="inputname4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input type="text" class="form-control" name='inputAddress' id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Address 2</label>
          <input type="text" class="form-control" name='inputAddress2' id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <input type="text" class="form-control" name='inputCity' id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Gujrat</option>
            <option>Rajasthan</option>
            <option>Madhya pradesh</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Zip</label>
          <input type="text" class="form-control" id="inputZip" name='inputZip' />
        </div>
        <div class="col-md-4">
          <label for="inputMethod" class="form-label">Payment Method</label>
          <select id="inputMethod" class="form-select">
            <option selected value={'COD'}>Cash On Delivery</option>
            <option value={'gpay'}>Google Pay</option>
            <option value={'D-Card'}>Debit Card</option>
            <option value={'NetBanking'}>Net Banking</option>
          </select>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </>
  );
}

export default Buyingpage;