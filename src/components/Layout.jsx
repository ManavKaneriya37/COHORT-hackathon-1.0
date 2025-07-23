import React, { useRef, useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navref = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add useEffect for scroll reset
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    toggleMenu();
  };

  return (
    <>
      <div className="hammenu" onClick={toggleMenu}>
        <i className={`ri-menu-${isMenuOpen ? '3' : '2'}-line`} style={{ color: "#fff" }}></i>
      </div>

      <nav ref={navref} className={isMenuOpen ? "nav-active" : ""}>
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <div className="left">
            <NavLink to="/products" onClick={handleNavClick}>Shop</NavLink>
            <NavLink target="_blank" to="https://www.amazon.com/stores/page/DADD59A5-1DF2-49CC-997F-8A585A126AA8?ingress=2&visitId=1338204f-e6fa-49cf-a9a5-512a74962188&store_ref=bl_ast_dp_brandLogo_sto&ref_=ast_bln" onClick={toggleMenu}>Buy Prime</NavLink>

          </div>
          <div className="middle">PRIME</div>
          <div className="right">
            <NavLink to="/about-prime" onClick={toggleMenu}>About Prime</NavLink>
            <NavLink to="/where-to-buy" onClick={handleNavClick}>Cart <i style={{color: "#fff"}} className="ri-shopping-cart-line"></i></NavLink>

          </div>
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
