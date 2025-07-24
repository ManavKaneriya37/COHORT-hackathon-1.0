import React, { useLayoutEffect } from "react";
import "./energy.css";
import { p1, p2, p3, e1, e2, e3, e4 } from "./Imgs.js";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../features/itemSlice";
import { toast } from "react-toastify";
import lenis from "../../components/lenisInstance.js"


const Energy = () => {
  const dispatch = useDispatch();
  dispatch(getCartTotal());

  React.useEffect(() => {
      lenis.scrollTo(0,0);
  }, []);

  return (
    <div className="energy-container">
      <NavLink to="/products" className="backArrow">
        <div>
          <i class="ri-arrow-left-line"></i>
        </div>
      </NavLink>
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
          <h2>ORIGINAL</h2>
          <button
            onClick={() => {
              toast.success("Item added to cart!", {
                autoClose: 2000,
              });
              dispatch(
                addToCart({
                  id: 22,
                  img: e1,
                  name: "Energy Drink 1",
                  price: 2.99,
                  qty: 1,
                })
              );
            }}
          >
            ADD TO CART
          </button>
        </div>
        <div className="product-item">
          <img src={e2} alt="Energy Drink 2" />
          <h2>DRIPSICLE</h2>
          <button
            onClick={() => {
              toast.success("Item added to cart!", {
                autoClose: 2000,
              });
              dispatch(
                addToCart({
                  id: 23,
                  img: e2,
                  name: "Energy Drink 2",
                  price: 2.99,
                  qty: 1,
                })
              );
            }}
          >
            ADD TO CART
          </button>
        </div>
        <div className="product-item">
          <img src={e3} alt="Energy Drink 3" />
          <h2>CHERRY LIMEADE</h2>
          <button
            onClick={() => {
              toast.success("Item added to cart!", {
                autoClose: 2000,
              });
              dispatch(
                addToCart({
                  id: 24,
                  img: e3,
                  name: "Energy Drink 3",
                  price: 2.99,
                  qty: 1,
                })
              );
            }}
          >
            ADD TO CART
          </button>
        </div>
        <div className="product-item">
          <img src={e4} alt="Energy Drink 4" />
          <h2>DREAM POP</h2>
          <button
            onClick={() => {
              toast.success("Item added to cart!", {
                autoClose: 2000,
              });
              dispatch(
                addToCart({
                  id: 25,
                  img: e4,
                  name: "Energy Drink 4",
                  price: 2.99,
                  qty: 1,
                })
              );
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Energy;
