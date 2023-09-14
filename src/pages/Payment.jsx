import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Loading.css'

export default function Payment() {
  const navigate = useNavigate(); // Invoke useNavigate to get the navigation function
  const [loader, setLoader] = useState(false);
  function handleSubmit(e) {
    setLoader(true);
    e.preventDefault();
    setTimeout(() => {
      console.log("Running");
      navigate("/order");
    }, 4000);
  }

  return (
    <>
      {!loader ? (
        <div className="container">
          <div className="left">
            <h3>BILLING ADDRESS</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" name="" placeholder="Enter name" />
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="" placeholder="Enter email" />
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                name=""
                placeholder="Enter address"
              />
              <label htmlFor="city">City</label>
              <input id="city" type="text" name="" placeholder="Enter City" />
              <div id="zip">
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
              <input
                id="card"
                type="text"
                name=""
                placeholder="Enter card number"
              />
              <label htmlFor="exp">Expiry Date</label>
              <input id="exp" type="text" name="" placeholder="MM/YY" />
              <label htmlFor="cvv">CVV/CVC</label>
              <input id="cvv" type="text" name="" placeholder="000" />
              {/* <button type="submit">Proceed to checkout</button> */}
              <button onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="cont"><div className="loader"></div></div>
      )}
    </>
  );
}
