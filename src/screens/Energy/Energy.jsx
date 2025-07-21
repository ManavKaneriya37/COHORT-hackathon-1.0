import React from "react";
import "./Energy.css";
import { p1, p2, p3, e1, e2, e3, e4 } from "./Imgs.js";
const Energy = () => {
  return (
    <div className="energy-container">
      <h1>ENERGY</h1>
      <div className="energy-frame">
        <div>
          <img src={p1} alt="" />
        </div>
        <div>
          <img src={p2} alt="" />
        </div>
        <div>
          <img src={p3} alt="" />
        </div>
      </div>

        <div className="energy-products">
            <div className="product-item">
                <img src={e1} alt="Energy Drink 1" />
                <h2>Energy Drink 1</h2>
                <a href="#">LEARN MORE</a>
            </div>
            <div className="product-item">
                <img src={e2} alt="Energy Drink 2" />
                <h2>Energy Drink 2</h2>
                <a href="#">LEARN MORE</a>
            </div>
            <div className="product-item">
                <img src={e3} alt="Energy Drink 3" />
                <h2>Energy Drink 3</h2>
                <a href="#">LEARN MORE</a>
            </div>
            <div className="product-item">
                <img src={e4} alt="Energy Drink 4" />
                <h2>Energy Drink 4</h2>
                <a href="#">LEARN MORE</a>
            </div>
        </div>
    </div>
  );
};

export default Energy;
