import React from "react";

const Footer = () => {
  return (
    <div style={{marginTop:'50px'}}>
      <div className="row">
        <div style={{paddingLeft: '40px'}} className="col-md-4">
          <div className="colm2">
            <h4>Malik Traders</h4>
            <p>Copper Product Business</p>
            <p>KH NO 787 MUSTAFABD COLONY,<br/> LONI GHAZIABAD, GHAZIABAD, <br/> GHAZIABAD,UTTAR PARDESH, 201102</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="colm3">
            <h4>Tags </h4>
            <li>Policies</li>
            <li>privacy</li>
            <li>Shipping</li>
            <li>No Refund Policy</li>
            <li>Terms & Policy</li>
          </div>
        </div>
        <div className="col-md-4">
          <div className="colm1">
            <h4>COSTOMER SERVICE</h4>
            <ul>
              <li>CONTACT</li>
              <li>RETURNS</li>
              <li>SITE MAP</li>
              <li>ABOUT US</li>
              <li>DELIVERY INFORMATION</li>
              <li>
                <a href="#"> PRIVACY POLICY</a>
              </li>
              <li>TERM & CONDITION</li>
            </ul>
          </div>
        </div>
        <div className="colm4" style={{textAlign:"center"}}>
          <span>@2023 Apply .All rights reserved Terms .Privacy policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
