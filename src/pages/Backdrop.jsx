import React from 'react';
import './Backdrop.css'; // You can style the backdrop as per your design.

const Backdrop = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick}></div>;
};

export default Backdrop;