import React, {useEffect} from "react";
import "./sticks.css";
import { banner } from "./imgs.js";
import { products } from "./sticks.js";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../features/itemSlice";
import { toast } from "react-toastify";
import lenis from "../../components/lenisInstance.js"

const Sticks = () => {
  const dispatch = useDispatch();
  dispatch(getCartTotal());

  useEffect(() => {
    lenis.scrollTo(0,0);
}, []);

  return (
    <div className="sticks-container">
      <NavLink to="/products" className="backArrow">
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

export default Sticks;
