import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItem,
  getCartTotal,
  increaseItemQty,
  decreaseItemQty,
} from "../features/itemSlice.js";
import "./Cart.css";

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalGST = 0;

  dispatch(getCartTotal());

  return (
    <>
      <div className="cart-back">
        <NavLink to="/products" className="back-link">
          <i className="ri-arrow-left-line back-icon"></i>
        </NavLink>
      </div>
      <div className="cart-container">
        <div className="cart-main">
          <div
            className={`cart-left ${
              cart.length === 0 ? "empty-cart" : "filled-cart"
            }`}
          >
            {cart.length > 0 ? (
              cart.map((data) => (
                <div key={data.id} className="cart-item">
                  <div className="cart-item-inner">
                    <div className="cart-image-wrapper">
                      <img src={data.img} className="cart-image" />
                    </div>
                    <div className="cart-details">
                      <p className="item-name">{data.name}</p>
                      <div className="item-info">
                        <p>Price: {data.qty * data.price}</p>
                        <p className="qty">Quantity: {data.qty}</p>
                      </div>
                    </div>
                    <div className="cart-actions">
                      <div>
                        <p className="qty-label">Quantity</p>
                        <div className="qty-controls">
                          <i
                            onClick={() => {
                              dispatch(increaseItemQty(data.id));
                              dispatch(getCartTotal());
                            }}
                            className="ri-add-line qty-button"
                          ></i>
                          <p>{data.qty}</p>
                          <i
                            onClick={() => {
                              dispatch(decreaseItemQty(data.id));
                              dispatch(getCartTotal());
                            }}
                            className="ri-subtract-line qty-button"
                          ></i>
                        </div>
                      </div>
                      <i
                        onClick={() => {
                          dispatch(deleteItem(data.id));
                          dispatch(getCartTotal());
                        }}
                        className="ri-delete-bin-line delete-button"
                      ></i>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-message">
                No items
                <NavLink className="empty-link" to="/">
                  Carry your cart now!
                </NavLink>
              </div>
            )}
          </div>

          {cart.length > 0 ? (
            <div className="cart-summary">
              <div className="summary-content">
                <h1 className="summary-title">Summary</h1>
                <hr />
                <div className="summary-row">
                  <p>Total Quantity: </p>
                  <span>{totalQuantity}</span>
                </div>
                <hr />
                <div className="summary-row">
                  <p>Total Amount: </p>
                  <span>${totalPrice}</span>
                </div>
                <div className="summary-row">
                  <p>GST(28%): </p>
                  <span>${(totalGST = (totalPrice * 28) / 100)}</span>
                </div>
                <hr />
                <div className="summary-row">
                  <p>Grand Total: </p>
                  <span>${(totalPrice + totalGST).toFixed(3)}</span>
                </div>
                <button onClick={() => navigate("/")} className="checkout-button">GO TO CHECKOUT</button>
              </div>
            </div>
          ) : (
            <div className="none"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
