import { Routes, useNavigate, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Payment from "./pages/Payment";
import Order from "./pages/Order";
import Nav from "./pages/Nav";
import Search from "./pages/Search";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Products from "./pages/Products";
import Home from "./Home";
import Item from "./Item";
import Cart from "./Cart";

export default function App() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    // Retrieve cart data from local storage when the component mounts
    const storedCartData = JSON.parse(localStorage.getItem("cart"));
    if (storedCartData) {
      setCart(storedCartData);
    }
  }, []); // Empty dependency array, runs once on component mount

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [item, ...prevCart];
      // Store the updated cart data in local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (item) => {
    const indexOfItem = cart.indexOf(item);
    if (indexOfItem !== -1) {
      let newCart = [...cart];
      newCart.splice(indexOfItem, 1);
      // Store the updated cart data in local storage
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const empty = () => {
    setCart([]);
    // Clear cart data from local storage
    localStorage.removeItem("cart");
  };

  return (
    <div>
      <div>
        <Nav cartLength={cart} />
      </div>
      <div style={{ minHeight: "55vh" }}>
        <Routes>
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route path="/products" element={<Products add={addToCart} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order empty={empty} cart={cart} />} />
          <Route path="/search" element={<Search add={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home add={addToCart} />} />
          <Route path="/:id" element={<Item click={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart list={cart} remove={removeFromCart} empty={empty} />}
          />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
