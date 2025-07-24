import React, { useRef, useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const navBarRef = useRef(null);

  const shopRef = useRef(null);
  const buyPrimeRef = useRef(null);
  const aboutPrimeRef = useRef(null);
  const cartRef = useRef(null);
  const footerRef = useRef(null);
  const location = useLocation();

  // ===== Navbar Scroll Hide/Show (Desktop only) =====
  useEffect(() => {
    const nav = navBarRef.current;

    if (window.innerWidth >= 769 && nav) {
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          gsap.to(nav, {
            yPercent: self.direction === 1 ? -100 : 0,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  // ===== Menu Toggle =====
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    toggleMenu();
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // ===== Hover Effects =====
  const createHoverAnimation = (ref, isDark) => {
    if (!ref.current) return;
    let underline = ref.current.querySelector(".underline");
    if (!underline) {
      underline = document.createElement("div");
      underline.className = "underline";
      ref.current.appendChild(underline);
    }

    const underlineColor = isDark ? "#fff" : "#000";
    gsap.set(underline, {
      width: "0%",
      x: "0%",
      backgroundColor: underlineColor,
    });

    return {
      hoverIn: () => gsap.to(underline, { width: "100%", duration: 0.3 }),
      hoverOut: () => gsap.to(underline, { width: "0%", duration: 0.3 }),
    };
  };

  useEffect(() => {
    const targets = [
      [shopRef, createHoverAnimation(shopRef, isMenuOpen)],
      [buyPrimeRef, createHoverAnimation(buyPrimeRef, isMenuOpen)],
      [aboutPrimeRef, createHoverAnimation(aboutPrimeRef, isMenuOpen)],
      [cartRef, createHoverAnimation(cartRef, isMenuOpen)],
    ];

    targets.forEach(([ref, anim]) => {
      if (ref.current && anim) {
        ref.current.addEventListener("mouseenter", anim.hoverIn);
        ref.current.addEventListener("mouseleave", anim.hoverOut);
      }
    });

    return () => {
      targets.forEach(([ref, anim]) => {
        if (ref.current && anim) {
          ref.current.removeEventListener("mouseenter", anim.hoverIn);
          ref.current.removeEventListener("mouseleave", anim.hoverOut);
        }
      });
    };
  }, [isMenuOpen]);

  // ===== Scroll to Top on Route Change =====
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);
  }, [location.key]);

  // ===== Footer Show after Page Ready =====
  const handlePageReady = () => {
    setShowFooter(true);
  };

  return (
    <>
      <div className="hammenu" onClick={toggleMenu}>
        <i
          className={`ri-menu-${isMenuOpen ? "3" : "2"}-line`}
          style={{ color: "#fff" }}
        ></i>
      </div>

      <nav
        ref={navBarRef}
        className={`nav ${isMenuOpen ? "nav-active" : ""}`}
      >
        <div className="nav-links">
          <div className="left">
            <NavLink to="/products" onClick={handleNavClick} ref={shopRef}>
              Shop
            </NavLink>
            <NavLink
              to="https://www.amazon.com/stores/page/DADD59A5-1DF2-49CC-997F-8A585A126AA8"
              onClick={handleNavClick}
              target="_blank"
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
              Cart <i className="ri-shopping-cart-line"></i>
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet context={{ onPageReady: handlePageReady }} />

      {showFooter && (
        <footer ref={footerRef}>
          {/* your existing footer content */}
        </footer>
      )}
    </>
  );
};

export default Layout;
