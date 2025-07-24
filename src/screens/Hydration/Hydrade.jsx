import React from "react";
import "./Hydrade.css";
import { greenny, blue, red, wild } from "./Imgs.js";
import { products } from "./products.js";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../features/itemSlice";

const Hydrade = () => {
  const dispatch = useDispatch();
  dispatch(getCartTotal());

  return (
    <div className="hydrade-container">
      <h1>HYDRATION</h1>
      <NavLink to="/products" className="backArrow">
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
            <button
              onClick={() => {
                toast.success("Item added to cart!", {
                  autoClose: 2000,
                });
                dispatch(
                  addToCart({
                    id: product.id,
                    img: product.img,
                    name: product.title,
                    price: product.price,
                    qty: 1,
                  })
                );
              }}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hydrade;
