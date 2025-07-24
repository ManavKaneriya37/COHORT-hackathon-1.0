import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Rhydrade from "./Rapid Hydration/Rhydrade.jsx";
import Layout from "../components/Layout.jsx";
import IceHydrate from "./Ice Hydration/IceHydrate.jsx";
import Hydrade from "./Hydration/Hydrade.jsx";
import Energy from "./Energy/Energy.jsx";
import Sticks from "./Sticks/Sticks.jsx";
import Products from "./Products/Products.jsx";
import Login from "./Auth/Login.jsx";
import Signup from "./Auth/Signup.jsx";
import Cart from "../components/Cart.jsx";
import About from "../components/About.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/rapid-hydration" element={<Rhydrade />} />
          <Route path="/products/ice-hydration" element={<IceHydrate />} />
          <Route path="/products/hydration" element={<Hydrade />} />
          <Route path="/products/energy" element={<Energy />} />
          <Route path="/products/sticks" element={<Sticks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-prime" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
