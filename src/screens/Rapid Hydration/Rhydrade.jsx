import React from "react";
import "./Rhydrade.css";
import { p1, p2, p3, collectionBanner } from "../Rapid Hydration/Imgs.js";
import { NavLink } from "react-router-dom";

const Rhydrade = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="rhydrade-container">
      <NavLink to={-1} className="backArrow">
        <div>
          <i class="ri-arrow-left-line"></i>
        </div>
      </NavLink>
      <div className="banner">
        <img src={collectionBanner} alt="" />
      </div>
      <h1>RAPID HYDRATION</h1>
      <div className="products">
        <div className="product">
          <img src={p1} alt="Rapid Rehydration Product" />
          <h2>Ocean Cherry</h2>
          <a href="#">Learn More</a>
        </div>
        <div className="product">
          <img src={p2} alt="Rapid Rehydration Product" />
          <h2>Berry Citrus Rush</h2>
          <a href="#">Learn More</a>
        </div>
        <div className="product">
          <img src={p3} alt="Rapid Rehydration Product" />
          <h2>Glacier Orange</h2>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Rhydrade;
