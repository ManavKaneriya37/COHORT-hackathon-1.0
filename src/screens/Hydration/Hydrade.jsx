import React from "react";
import "./Hydrade.css";
import { greenny, blue, red, wild } from "./Imgs.js";
import { products } from "./products.js";
import { NavLink } from "react-router-dom";

const Hydrade = () => {
   React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="hydrade-container">
      <h1>HYDRATION</h1>
      <NavLink to={-1} className="backArrow">
        <div>
          <i class="ri-arrow-left-line"></i>
        </div>
      </NavLink>
      <div className="frame">
        <div>
          <img src={greenny} alt="Green Hydration" />
          <img src={blue} alt="Blue Hydration" />
        </div>
        <div>
          <img src={red} alt="Red Hydration" />
          <img src={wild} alt="Wild Hydration" />
        </div>
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

export default Hydrade;
