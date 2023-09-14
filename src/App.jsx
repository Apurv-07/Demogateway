import "./App.css";
import { Routes, useNavigate, Route, Link } from "react-router-dom";
import Home from "./Home";
import Item from "./Item";
import Cart from "./Cart";
import { useState } from "react";
import Payment from "./pages/Payment";
import Order from "./pages/Order";
export default function App() {
  const navigate = useNavigate();
  var [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([item, ...cart]);
  };
  // const removeFromCart = (item) => {
  //   let newCart=cart.filter((index)=>{
  //     return index!=item;
  //   })
  //   console.log("The current items in cart", newCart)
  //   setCart(newCart)
  // };
  const removeFromCart = (item) => {
    const indexOfItem = cart.indexOf(item);
  
    if (indexOfItem !== -1) {
      let newCart = [...cart];
      newCart.splice(indexOfItem, 1);
      setCart(newCart);
    }
  };
  const handleClick = () => {
    navigate("/cart");
  };
  const handleCheckout = () => {
    navigate("/payment");
  };
  return (
    <div className="App">
      <div className="Head">
        <h2>My Own Ecom website</h2>
        <div>
          <h5>
            <Link to="/home">Home</Link>
          </h5>
          <button onClick={handleClick}>Cart</button>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order cart={cart} />} />
        <Route path="/:id" element={<Item click={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart list={cart} remove={removeFromCart} />}
        />
      </Routes>
    </div>
  );
}
