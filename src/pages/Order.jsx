import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';

const Order = ({cart, empty}) => {
  const [newCart, setNewCart]=useState([])
  const [modalOpen, setModalOpen]=useState(false)
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
      setNewCart([...newCart, ...cart])
        if(cart.length){
            alert("Payment success")
            console.log(cart)
            empty();
            setModalOpen(true)
            console.log("If model is open", modalOpen)
        }
        console.log("Cart", newCart, modalOpen)
    },[])
  return (
    <div>
        {newCart.length ?<div>
          <Modal open={modalOpen} setOpen={setModalOpen}>
            <h2>Congratulations!</h2>
            <p>Your order was placed successfully</p>
            
          </Modal>
          {modalOpen && <Backdrop onClick={()=>setModalOpen(false)} />}
        <h1>Order confirmed</h1>
        <h2>Your order has been placed successfully</h2><br/><br/>
        <h3>For: {newCart.map((item)=>{
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