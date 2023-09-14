export default function Payment() {
  return (
    <div className="container">
      <div className="left">
        <h3>BILLING ADDRESS</h3>
        <form>
          <label htmlFor="name">Full name</label>
          <input id="name" type="text" name="" placeholder="Enter name" />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="" placeholder="Enter email" />
          <label htmlFor="address">Address</label>
          <input id="address" type="text" name="" placeholder="Enter address" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" name="" placeholder="Enter City" />
          <div id="zip" >
            {/* COUNTRY */}
            <div>
              <label htmlFor="country">Country</label>
              <input
                id="country"
                type="text"
                name=""
                placeholder="Enter Country"
              />
            </div>
            {/* ZIP CODE */}
            <div>
              <label htmlFor="zipcode">Zip Code</label>
              <input
                id="country"
                type="text"
                name=""
                placeholder="Enter Zip"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="right">
        <h3>PAYMENT</h3>
        <form>
          Accepted Cards <br />
          <img src="/image/card1.png" width="100" />
          <img src="/image/card2.png" width="50" />
          <br></br>
          <br></br>
          <label htmlFor="card">Card number</label>
          <input id="card" type="text" name="" placeholder="Enter card number" />
          <label htmlFor="exp">Expiry Date</label>
          <input id="exp" type="text" name="" placeholder="MM/YY" />
          <label htmlFor="cvv">CVV/CVC</label>
          <input id="cvv" type="text" name="" placeholder="000" />
          
        </form>
        <input type="submit" name="" value="Proceed to Checkout" />
      </div>
    </div>
  );
}
