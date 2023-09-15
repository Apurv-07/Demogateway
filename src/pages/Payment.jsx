import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loading.css";

export default function Payment() {
  const navigate = useNavigate(); // Invoke useNavigate to get the navigation function
  const [loader, setLoader] = useState(false);
  const [cvv, setCvv] = useState("");
  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  function handleSubmit(e) {
    setLoader(true);
    e.preventDefault();
    setTimeout(() => {
      console.log("Running");
      navigate("/order");
    }, 4000);
  }

  const handleCvv = (e) => {
    setCvv(e.target.value);
  }

    const handleCard = (e) => {
    setCard(e.target.value);
    }

    const handleExp = (e) => {
    setExp(e.target.value);
    }

    const handleName = (e) => {
    setName(e.target.value);
    }

    const handleEmail = (e) => {
    setEmail(e.target.value);
    }

    const handleAddress = (e) => {
    setAddress(e.target.value);
    }

    const handleCity = (e) => {
    setCity(e.target.value);
    }

    const handleCountry = (e) => {
    setCountry(e.target.value);
    }

    const handleZip = (e) => {
    setZip(e.target.value);
    }



  return (
    <>
      {!loader ? (
        <div className="container">
          <div className="left">
            <h3>BILLING ADDRESS</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" name="" value={name} onChange={handleName} placeholder="Enter name" />
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="" value={email} onChange={handleEmail} placeholder="Enter email" />
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                name=""
                value={address} onChange={handleAddress}
                placeholder="Enter address"
              />
              <label htmlFor="city">City</label>
              <input id="city" type="text" name="" value={city} onChange={handleCity} placeholder="Enter City" />
              <div id="zip">
                {/* COUNTRY */}
                <div>
                  <label htmlFor="country">Country</label>
                  <input
                    id="country"
                    type="text"
                    name=""
                    value={country} 
                    onChange={handleCountry}
                    placeholder="Enter Country"
                  />
                </div>
                {/* ZIP CODE */}
                <div>
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    id="zip"
                    type="text"
                    name=""
                    value={zip} onChange={handleZip}
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
                value={card} 
                onChange={handleCard}
                placeholder="Enter card number"
              />
              <label htmlFor="exp">Expiry Date</label>
              <input id="exp" 
              value={exp} 
              onChange={handleExp} type="text" name="" placeholder="MM/YY" />
              <label htmlFor="cvv">CVV/CVC</label>
              <input
                id="cvv"
                type="text"
                name=""
                value={cvv}
                onChange={handleCvv}
                maxLength={3}
                placeholder="000"
              />
              {/* <button type="submit">Proceed to checkout</button> */}
              <button onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="cont">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}
