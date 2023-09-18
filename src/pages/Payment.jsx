import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loading.css";

export default function Payment() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [cvv, setCvv] = useState("");
  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [PIN, setPIN] = useState("");

  // State variables for validation and error messages
  const [cvvValid, setCvvValid] = useState(true);
  const [cardValid, setCardValid] = useState(true);
  const [expValid, setExpValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [addressValid, setAddressValid] = useState(true);
  const [cityValid, setCityValid] = useState(true);
  const [countryValid, setCountryValid] = useState(true);
  const [PINValid, setPINValid] = useState(true);
  const [cardtype, setCardType]=useState("Unknown");

  function handleSubmit(e) {
    e.preventDefault();

    // Validate all fields before submitting
    if (
      cvv.trim() === "" ||
      card.trim() === "" ||
      exp.trim() === "" ||
      name.trim() === "" ||
      email.trim() === "" ||
      address.trim() === "" ||
      city.trim() === "" ||
      country.trim() === "" ||
      PIN.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (
      cvvValid &&
      cardValid &&
      expValid &&
      nameValid &&
      emailValid &&
      addressValid &&
      cityValid &&
      countryValid &&
      PINValid
    ) {
      console.log(cvvValid, cardValid,expValid)
      setLoader(true);
      setTimeout(() => {
        console.log("Running");
        navigate("/order");
      }, 4000);
    } else {
      // Display an error message or handle validation errors
      alert("Please fill in all required fields correctly.");
    }
  }

  // Validation functions for each field
  const validateCvv = () => {
    // Implement your CVV validation logic here
    // Example: CVV should be a 3-digit number
    if (/^\d{2}$/.test(cvv)) {
      setCvvValid(true);
    } else {
      setCvvValid(false);
    }
  };

  const validateExp = () => {
    // Implement your expiration date validation logic here
    // Allow any two-digit month and two-digit year separated by a slash
    if (/^(0[1-9]|1[0-2])\/\d{1}$/.test(exp)) {
      setExpValid(true);
    } else {
      setExpValid(false);
    }
  };

  // Validation functions for other fields
  const validateName = () => {
    // Implement your name validation logic here
    if (name.trim() !== "") {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const validateEmail = () => {
    // Implement your email validation logic here
    // Example: Email should be a valid format
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const validateAddress = () => {
    // Implement your address validation logic here
    if (address.trim() !== "") {
      setAddressValid(true);
    } else {
      setAddressValid(false);
    }
  };

  const validateCity = () => {
    // Implement your city validation logic here
    if (city.trim() !== "") {
      setCityValid(true);
    } else {
      setCityValid(false);
    }
  };

  const validateCountry = () => {
    // Implement your country validation logic here
    if (country.trim() !== "") {
      setCountryValid(true);
    } else {
      setCountryValid(false);
    }
  };

  const validatePIN = () => {
    // Implement your PIN validation logic here
    if (/^0*[1-9]\d{4}$/.test(PIN)) {
      setPINValid(true);
    } else {
      setPINValid(false);
    }
  };

  // Function to validate and identify the type of credit card
  function validateCreditCard(cardNumber) {
    // Remove spaces and dashes from the card number
    const sanitizedCardNumber = cardNumber.replace(/[\s-]/g, "");
    // Mastercard regex pattern
    const mastercardPattern =
      /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;

    // Visa regex pattern
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;

    // Maestro regex pattern
    const maestroPattern =
      /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/;

    // Rupay regex pattern
    const rupayPattern =
      /^6(?!011)(?:0[0-9]{14}|52[12][0-9]{12})$|^6(?!52[12])(?:011|5[0-9][0-9])[0-9]{12}$/;

    if (mastercardPattern.test(sanitizedCardNumber)) {
      setCardType("Mastercard")
      return "Mastercard";
    } else if (visaPattern.test(sanitizedCardNumber)) {
      setCardType("Visa")
      return "Visa";
    } else if (maestroPattern.test(sanitizedCardNumber)) {
      setCardType("Maestrocard")
      return "Maestro";
    } else if (rupayPattern.test(sanitizedCardNumber)) {
      setCardType("Rupay");
      return "Rupay";
    } else {
      setCardType("Invalid")
      return "Invalid";
    }
  }

  return (
    <>
      {!loader ? (
        <div className="container">
            <form className="d-flex gap-5" onSubmit={handleSubmit}>
          <div className="left">
            <h3>BILLING ADDRESS</h3>
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                type="text"
                name=""
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  validateName();
                }}
                placeholder="Enter name"
                className={nameValid ? "" : "error"}
              />
              {!nameValid && (
                <p className="error-message">Please enter a valid name.</p>
              )}
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                name=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail();
                }}
                placeholder="Enter email"
                className={emailValid ? "" : "error"}
              />
              {!emailValid && (
                <p className="error-message">
                  Please enter a valid email address.
                </p>
              )}
              {/* Implement similar validation and error message logic for other fields */}
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                name=""
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  validateAddress();
                }}
                placeholder="Enter address"
                className={addressValid ? "" : "error"}
              />
              {!addressValid && (
                <p className="error-message">Please enter a valid address.</p>
              )}
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name=""
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  validateCity();
                }}
                placeholder="Enter City"
                className={cityValid ? "" : "error"}
              />
              {!cityValid && (
                <p className="error-message">Please enter a valid city.</p>
              )}
              <label htmlFor="country">Country</label>
              <input
                id="country"
                type="text"
                name=""
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  validateCountry();
                }}
                placeholder="Enter Country"
                className={countryValid ? "" : "error"}
              />
              {!countryValid && (
                <p className="error-message">Please enter a valid country.</p>
              )}
              <label htmlFor="PIN">PIN</label>
              <input
                id="PIN"
                type="text"
                name=""
                value={PIN}
                onChange={(e) => {
                  setPIN(e.target.value);
                  validatePIN();
                }}
                placeholder="Enter PIN"
                className={PINValid ? "" : "error"}
              />
              {!PINValid && (
                <p className="error-message">Please enter a valid PIN.</p>
              )}
          </div>
          <div className="right">
            <h3>PAYMENT</h3>
              {cardtype=="Mastercard" && <img src="/image/card-2.png" width="100" alt="Card 1" />}
              {cardtype=="Visa" && <img src="/image/card-1.png" width="50" alt="Card 2" />}
              {console.log("Card", validateCreditCard)}
              {cardtype=='Unknown' && <img src="/image/card1.png" width="50" alt="Card 2" />}
              <br></br>
              <label htmlFor="card">Card number</label>
              <input
                id="card"
                type="text"
                name=""
                value={card}
                onChange={(e) => {
                  setCard(e.target.value);
                  const cardType = validateCreditCard(e.target.value); // Pass the card number to validateCreditCard function

                  // Check if the card type is valid and if it's a 16-digit card
                  if (cardType !== "Invalid" && e.target.value.length === 16) {
                    setCardValid(true);
                  } else {
                    setCardValid(false);
                  }
                }}
                placeholder="Enter card number"
                className={cardValid ? "" : "error"}
              />
              {!cardValid && (
                <p className="error-message">
                  Please enter a valid card number.
                </p>
              )}

              <label htmlFor="exp">Expiry Date</label>
              <input
                id="exp"
                type="text"
                name=""
                value={exp}
                onChange={(e) => {
                  setExp(e.target.value);
                  validateExp();
                }}
                placeholder="MM/YY"
                className={expValid ? "" : "error"}
              />
              {!expValid && (
                <p className="error-message">
                  Please enter a valid expiration date (MM/YY).
                </p>
              )}
              <label htmlFor="cvv">CVV/CVC</label>
              <input
                id="cvv"
                type="text"
                name=""
                value={cvv}
                onChange={(e) => {
                  setCvv(e.target.value);
                  validateCvv();
                }}
                maxLength={3}
                placeholder="000"
                className={cvvValid ? "" : "error"}
              />
              {!cvvValid && (
                <p className="error-message">Please enter a valid CVV.</p>
              )}
              <button onClick={handleSubmit}>Submit</button>
          </div>
            </form>
        </div>
      ) : (
        <div className="cont">
          <div>
          <h1 className="text-center">Payment Processing</h1>
            <br></br>
            <div className="loader"></div>
            </div>
        </div>
      )}
    </>
  );
}
