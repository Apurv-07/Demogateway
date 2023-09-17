// import "./App.css";
import { Routes, useNavigate, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Item from "./Item";
import Cart from "./Cart";
import { useState } from "react";
import Payment from "./pages/Payment";
import Order from "./pages/Order";
import Nav from "./pages/Nav";
import Search from "./pages/Search";
import Footer from "./pages/Footer"
import About from "./pages/About";
import Products from "./pages/Products";
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

  const empty=()=>{
    setCart([])
  }

  return (
    <div>
      <div>
        <Nav cartLength={cart} />
        {/* <div>
          <h5>
            <Link to="/home">Home</Link>
          </h5>
          <button onClick={handleClick}>Cart</button>
          <button onClick={handleCheckout}>Checkout</button>
        </div> */}
      </div>
      <div style={{minHeight: '55vh'}}>
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/products" element={<Products add={addToCart} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order cart={cart} />} />
        <Route path="/search" element={<Search add={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Item click={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart list={cart} remove={removeFromCart} empty={empty} />}
        />
      </Routes>
      </div>
      <div className="footer"><Footer /></div>
    </div>
  );
}
