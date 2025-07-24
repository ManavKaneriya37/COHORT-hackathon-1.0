import React, { useRef, useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navBarRef = useRef(null);

  // Refs for each NavLink for hover effects
  const shopRef = useRef(null);
  const buyPrimeRef = useRef(null);
  const aboutPrimeRef = useRef(null);
  const cartRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // This part of useEffect correctly handles the nav hide/show on scroll
    // for desktop only based on `window.innerWidth >= 769`.
    // No changes needed here.
    if (window.innerWidth >= 769 && navBarRef.current) {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          if (self.direction === 1) {
            gsap.to(navBarRef.current, {
              y: "-100%",
              duration: 0.3,
              ease: "power2.out",
            });
          } else {
            gsap.to(navBarRef.current, {
              y: "0%",
              duration: 0.3,
              ease: "power2.out",
            });
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    toggleMenu();
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // GSAP hover animations for nav links
  const createHoverAnimation = (elementRef, menuIsOpen) => {
    // ADDED menuIsOpen parameter
    if (!elementRef.current) return;

    let underline = elementRef.current.querySelector(".underline");
    if (!underline) {
      underline = document.createElement("div");
      underline.className = "underline";
      elementRef.current.appendChild(underline);
    }

    // Determine underline color based on menu state
    const underlineColor = menuIsOpen ? "#fff" : "#000"; // White for open menu (dark bg), Black for closed menu (light bg)

    gsap.set(underline, {
      width: "0%",
      x: "0%",
      backgroundColor: underlineColor,
    }); // Set initial color

    const hoverIn = () => {
      gsap.to(underline, {
        width: "100%",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const hoverOut = () => {
      gsap.to(underline, {
        width: "0%",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    return { hoverIn, hoverOut };
  };

  useEffect(() => {
    // The `isMenuOpen` state needs to be a dependency here,
    // so `createHoverAnimation` is re-run when the menu opens/closes,
    // allowing the underline color to be set correctly.
    const shopHover = createHoverAnimation(shopRef, isMenuOpen); // Pass isMenuOpen
    const buyPrimeHover = createHoverAnimation(buyPrimeRef, isMenuOpen); // Pass isMenuOpen
    const aboutPrimeHover = createHoverAnimation(aboutPrimeRef, isMenuOpen); // Pass isMenuOpen
    const cartHover = createHoverAnimation(cartRef, isMenuOpen); // Pass isMenuOpen

    // Ensure hover functions are valid before attaching
    if (shopHover && shopRef.current) {
      shopRef.current.addEventListener("mouseenter", shopHover.hoverIn);
      shopRef.current.addEventListener("mouseleave", shopHover.hoverOut);
    }
    if (buyPrimeHover && buyPrimeRef.current) {
      buyPrimeRef.current.addEventListener("mouseenter", buyPrimeHover.hoverIn);
      buyPrimeRef.current.addEventListener(
        "mouseleave",
        buyPrimeHover.hoverOut
      );
    }
    if (aboutPrimeHover && aboutPrimeRef.current) {
      aboutPrimeRef.current.addEventListener(
        "mouseenter",
        aboutPrimeHover.hoverIn
      );
      aboutPrimeRef.current.addEventListener(
        "mouseleave",
        aboutPrimeHover.hoverOut
      );
    }
    if (cartHover && cartRef.current) {
      cartRef.current.addEventListener("mouseenter", cartHover.hoverIn);
      cartRef.current.addEventListener("mouseleave", cartHover.hoverOut);
    }

    return () => {
      // Clean up event listeners on unmount or on re-run of this effect
      // Always check if ref.current exists before removing listener
      if (shopHover && shopRef.current) {
        shopRef.current.removeEventListener("mouseenter", shopHover.hoverIn);
        shopRef.current.removeEventListener("mouseleave", shopHover.hoverOut);
      }
      if (buyPrimeHover && buyPrimeRef.current) {
        buyPrimeRef.current.removeEventListener(
          "mouseenter",
          buyPrimeHover.hoverIn
        );
        buyPrimeRef.current.removeEventListener(
          "mouseleave",
          buyPrimeHover.hoverOut
        );
      }
      if (aboutPrimeHover && aboutPrimeRef.current) {
        aboutPrimeRef.current.removeEventListener(
          "mouseenter",
          aboutPrimeHover.hoverIn
        );
        aboutPrimeRef.current.removeEventListener(
          "mouseleave",
          aboutPrimeHover.hoverOut
        );
      }
      if (cartHover && cartRef.current) {
        cartRef.current.removeEventListener("mouseenter", cartHover.hoverIn);
        cartRef.current.removeEventListener("mouseleave", cartHover.hoverOut);
      }

      gsap.killTweensOf([
        shopRef.current?.querySelector(".underline"),
        buyPrimeRef.current?.querySelector(".underline"),
        aboutPrimeRef.current?.querySelector(".underline"),
        cartRef.current?.querySelector(".underline"),
      ]);
    };
  }, [isMenuOpen]);

  const location = useLocation();

  useEffect(() => {
    // Force browser to stop restoring scroll on back/forward
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force reset scroll position — native + custom fallback
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10); // wait a tiny bit for layout paint
  }, [location.key]);

  return (
    <>
      {/* Ham Menu Button - always fixed at top right */}
      <div className="hammenu" onClick={toggleMenu}>
        <i
          className={`ri-menu-${isMenuOpen ? "3" : "2"}-line`}
          style={{ color: isMenuOpen ? "#fff" : "#fff" }}
        ></i>
      </div>

      <nav ref={navBarRef} className={`nav ${isMenuOpen ? "nav-active" : ""}`}>
        <div className={`nav-links`}>
          <div className="left">
            <NavLink to="/products" onClick={handleNavClick} ref={shopRef}>
              Shop
            </NavLink>
            <NavLink
              target="_blank"
              to="https://www.amazon.com/stores/page/DADD59A5-1DF2-49CC-997F-8A585A126AA8?ingress=2&visitId=1338204f-e6fa-49cf-a9a5-512a74962188&store_ref=bl_ast_dp_brandLogo_sto&ref_=ast_bln"
              onClick={handleNavClick}
              ref={buyPrimeRef}
            >
              Buy Prime
            </NavLink>
          </div>
          <div className="middle">PRIME</div>
          <div className="right">
            <NavLink
              to="/about-prime"
              onClick={handleNavClick}
              ref={aboutPrimeRef}
            >
              About Prime
            </NavLink>
            <NavLink to="/cart" onClick={handleNavClick} ref={cartRef}>
              Cart{" "}
              <i
                className="ri-shopping-cart-line"
                style={{ color: "#fff" }}
              ></i>
            </NavLink>
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
              <i className="ri-facebook-circle-fill"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-tiktok-fill"></i>
              <i className="ri-twitter-x-line"></i>
            </div>
          </div>
          <div className="box2">
            <a href="/products/rapid-hydration">RAPID HYDRATION</a>
            <a href="/products/ice-hydration">ICE HYDRATOIN</a>
            <a href="/products/hydration">HYDRATON</a>
            <a href="/products/sticks">HYDRATION + STICKS</a>
            <a href="/products/energy">ENERGY</a>
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
