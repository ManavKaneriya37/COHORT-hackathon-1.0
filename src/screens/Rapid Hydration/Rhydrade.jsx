import React from "react";
import "./Rhydrade.css";
import { p1, p2, p3, collectionBanner } from "../Rapid Hydration/Imgs.js";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../features/itemSlice.js";

const Rhydrade = () => {
  const dispatch = useDispatch();
  dispatch(getCartTotal());

  return (
    <div className="rhydrade-container">
      <NavLink to="/products" className="backArrow">
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
          <button
            onClick={() => {
              toast.success("Item added to cart!", {
                autoClose: 2000,
              });
              dispatch(
                addToCart({
                  id: 19,
                  img: p1,
                  name: "Ocean Cherry",
                  price: 2.99,
                  qty: 1,
                })
              );
            }}
          >
            ADD TO CART
          </button>
        </div>
        <div className="product">
          <img src={p2} alt="Rapid Rehydration Product" />
          <h2>Berry Citrus Rush</h2>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: 20,
                  img: p2,
                  name: "Berry Citrus Rush",
                  price: 2.99,
                  qty: 1,
                })
              )
            }
          >
            ADD TO CART
          </button>
        </div>
        <div className="product">
          <img src={p3} alt="Rapid Rehydration Product" />
          <h2>Glacier Orange</h2>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: 21,
                  img: p3,
                  name: "Glacier Orange",
                  price: 2.99,
                  qty: 1,
                })
              )
            }
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rhydrade;
