// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
const Nav = (props) => {
    let [text, setText]=useState("");
    const navigate=useNavigate();
    const handleSearch=()=>{
        navigate('/search', {state:{text}})
    }
  return (
    <div>
       <nav className="navbar navbar-expand-lg ">
           <Link to="/home" className="navbar-brand px-4">MALIK TRADERS</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="m-auto">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link to="/home" className="links nav-link">HOME</Link>
          </li>
          <li className="nav-item">
          <Link to="/products" className="links nav-link">PRODUCTS</Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="links nav-link">ABOUT</Link>
          </li>
          <li className="nav-item">
          <Link to="/cart" className="links nav-link">CART {props.length>0 && `(${props.length})`}</Link>
          </li>
        </ul>
        </div>
        <div className="d-flex">
          <input className=" px-2 search" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setText(e.target.value)} />
          <button className="btn1 me-2 px-3" onClick={handleSearch}>Search</button>
          <span><i className="bi bi-bag-check"></i></span>
        </div>
      </div>
  </nav>
    </div>
  );
};

export default Nav;

