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

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/products/rapid-hydration" element={<Rhydrade />} />
          <Route path="/products/ice-hydration" element={<IceHydrate />} />
          <Route path="/products/hydration" element={<Hydrade />} />
          <Route path="/products/energy" element={<Energy />} />
          <Route path="/products/sticks" element={<Sticks />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
