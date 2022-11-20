import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/Navbar";

//page
import Home from "./pages/Home";
import ProdDetail from "./pages/productDetail";
import Profile from "./pages/Userprofile";
import Income from "./pages/incometransaction";
import CartDigan from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product-detail/:id" element={<ProdDetail />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/income-transaction" element={<Income />} />
        <Route exact path="/payment" element={<CartDigan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
