import React, { useRef } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const navref = useRef();

  return (
    <>
      <div
        className="hammenu"
        style={{
          fontSize: "2rem",
          padding: "1rem 2rem",
          margin: "0.4rem",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          width: "3rem",
        }}
      >
        <i style={{ color: "#fff" }} className="ri-menu-2-line"></i>
      </div>
      <nav ref={navref}>
        <div className="left">
          <h2>Shop</h2>
          <h2>Where to buy</h2>
        </div>
        <div className="middle">PRIME</div>
        <div className="right">
          <h2>About Prime</h2>
          <h2>Buy Prime</h2>
        </div>
      </nav>

      <Outlet />

      <footer>
        <div className="top">
          <div className="box1">
            <h2>About Prime</h2>
            <p>
              PRIME was developed to fill the void where great taste meets
              function. With bold, thirst-quenching flavors to help you refresh,
              replenish, and refuel, PRIME is the perfect boost for any
              endeavor. We're confident you'll love it as much as we do.
            </p>
            <div className="icons">
              <i class="ri-facebook-circle-fill"></i>
              <i class="ri-instagram-line"></i>
              <i class="ri-tiktok-fill"></i>
              <i class="ri-twitter-x-line"></i>
            </div>
          </div>
          <div className="box2">
            <a href="">RAPID HYDRATION</a>
            <a href="">ICE HYDRATOIN</a>
            <a href="">HYDRATON</a>
            <a href="">HYDRATION + STICKS</a>
            <a href="">ENERGY</a>
          </div>
          <div className="box3">
            <a href="">ABOUT PRIME</a>
            <a href="">TEAM + ATHLETES</a>
            <a href="">CREATORS</a>
            <a href="">ARTISTS</a>
            <a href="">AMBASSADORS</a>
          </div>
          <div className="box4">
            <a href="">FAQS</a>
            <a href="">PRIVACY POLICY</a>
            <a href="">RETURN POLICY</a>
            <a href="">WHERE TO BUY</a>
            <a href="">CONTACT US</a>
          </div>
        </div>
        <div className="bottom">
          <h3>NEWSLETTER</h3>
          <p className="subTxt">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <input type="text" placeholder="Enter your email" />
          <p id="detail">
            By subscribing, you consent to receive marketing communications from
            PRIME using the provided email address and phone number. Consent to
            receive marketing is not required for purchase. Standard data and
            messaging rates may apply. You can opt-out at any time by contacting
            us or using the unsubscribe link. See our Privacy Policy for
            details.
          </p>
          <button>SUBSCRIBE</button>
        </div>
        <div className="user-stuff">
          <h6>&copy; Prime Hydration LLC</h6>
          <div className="links">
            <a href="">Cookie Choice</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
            <a href="">Accessibility Statement</a>
            <a href="">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
