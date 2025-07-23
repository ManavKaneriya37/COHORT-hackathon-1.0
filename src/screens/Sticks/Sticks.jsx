import React from "react";
import "./Sticks.css";
import { banner } from "./imgs.js";
import { products } from "./sticks.js";
import { NavLink } from "react-router-dom";

const Sticks = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sticks-container">
      <NavLink to={-1} className="backArrow">
        <div>
          <i class="ri-arrow-left-line"></i>
        </div>
      </NavLink>
      <h1>STICKS</h1>
      <div className="sticks-banner">
        <img src={banner} alt="" />
      </div>

      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.img} alt={product.title} />
            <h2>{product.title}</h2>
            <a href={product.href}>LEARN MORE</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sticks;
