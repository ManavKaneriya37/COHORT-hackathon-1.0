import React from "react";
import "./iceHydrate.css";
import { banner, img1, img2, img3 } from "./Imgs";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../features/itemSlice";

const IceHydrate = () => {

  // const itemsContainer = useSelector((state) => state.allCart);
  const dispatch = useDispatch();


  dispatch(getCartTotal());

  return (
    <div className="ice-hydrate-container">
      <NavLink to="/products" className="backArrow">
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
          <button onClick={() => dispatch(addToCart({ id: 1, img: img1,  name: "Blue Chill", price: 14.99, qty: 1 }))}>ADD TO CART</button>
        </div>
        <div className="product">
          <img src={img2} alt="Rapid Rehydration Product" />
          <h2>Red Chill</h2>
          <button onClick={() => dispatch(addToCart({ id: 2, img: img2 , name: "Red Chill", price: 12.99, qty: 1 }))}>ADD TO CART</button>
        </div>
        <div className="product">
          <img src={img3} alt="Rapid Rehydration Product" />
          <h2>Orange</h2>
          <button onClick={() => dispatch(addToCart({ id: 3,img: img3, name: "Orange", price: 9.99, qty: 1 }))}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default IceHydrate;
