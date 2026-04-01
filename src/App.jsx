import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export default function App() {
  const [cart, setCart] = useState({});

  // ➕ Add item to cart
  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: prev[item.id]
        ? { ...item, qty: prev[item.id].qty + 1 }
        : { ...item, qty: 1 },
    }));
  };

  // ➕ Increase quantity
  const increase = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: { ...prev[id], qty: prev[id].qty + 1 },
    }));
  };

  // ➖ Decrease quantity
  const decrease = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };

      if (newCart[id].qty === 1) {
        delete newCart[id]; // remove item
      } else {
        newCart[id].qty -= 1;
      }

      return newCart;
    });
  };

  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={
          <Home
            cart={cart}
            addToCart={addToCart}
            increase={increase}
            decrease={decrease}
          />
        }
      />

      {/* Cart */}
      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            increase={increase}
            decrease={decrease}
          />
        }
      />

      {/* Checkout (OTP) */}
      <Route
        path="/checkout"
        element={
          <Checkout
            cart={cart}
            setCart={setCart}
          />
        }
      />

    </Routes>
  );
}