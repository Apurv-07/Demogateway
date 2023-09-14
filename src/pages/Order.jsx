import React, { useEffect } from 'react'

const Order = ({cart}) => {
    function generate16DigitNumber() {
        const min = 1e15; // Minimum 16-digit number
        const max = 1e16 - 1; // Maximum 16-digit number
      
        // Generate a random number within the specified range
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      
        // Convert the random number to a string to preserve leading zeros
        const random16DigitNumber = randomNumber.toString();
      
        return random16DigitNumber;
      }
      
      // Example usage:
      const sixteenDigitNumber = generate16DigitNumber();
    useEffect(()=>{
        if(cart.length){
            alert("Payment success")
        }
    },[])
  return (
    <div>
        {cart.length ?<div>
        <h1>Order confirmed</h1>
        <h2>Your order has been placed successfully</h2><br/><br/>
        <h3>For: {cart.map((item)=>{
            return <div key={sixteenDigitNumber}>
                {item.name}<br/>
            </div>
        })}</h3><br/><br/>
        <h2>Order ID: {sixteenDigitNumber}</h2>
        </div>:"No orders"}
    </div>
  )
}

export default Order