import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./A-Navigation/Nav";
import { Home } from "./B-Product/Home";
import { Product } from "./B-Product/Product";
import { Cart } from "./B-Product/Cart";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prod" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
