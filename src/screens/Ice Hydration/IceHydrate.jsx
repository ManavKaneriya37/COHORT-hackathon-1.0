import React from "react";
import "./iceHydrate.css";
import { banner, img1, img2, img3 } from "./Imgs";
import { NavLink } from "react-router-dom";

const IceHydrate = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ice-hydrate-container">
      <NavLink to={-1} className="backArrow">
        <div>
          <i class="ri-arrow-left-line"></i>
        </div>
      </NavLink>

      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <h1>ICE HYDRATION</h1>
      <div className="products">
        <div className="product">
          <img src={img1} alt="Rapid Rehydration Product" />
          <h2>Blue Chill</h2>
          <a href="#">Learn More</a>
        </div>
        <div className="product">
          <img src={img2} alt="Rapid Rehydration Product" />
          <h2>Red Chill</h2>
          <a href="#">Learn More</a>
        </div>
        <div className="product">
          <img src={img3} alt="Rapid Rehydration Product" />
          <h2>Orange</h2>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default IceHydrate;
