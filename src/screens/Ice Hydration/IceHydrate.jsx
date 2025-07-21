import React from "react";
import "./iceHydrate.css";
import { banner, img1, img2, img3 } from "./Imgs";

const IceHydrate = () => {
  return (
    <div className="ice-hydrate-container">
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
