import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Step 1: Reset native scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Step 2: If you're using Lenis or custom scroll, reset it too
    const scrollContainer = document.querySelector(".main-scroll-container") || document.body;
    scrollContainer.scrollTop = 0;

    // Optional: Reset html element too
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
