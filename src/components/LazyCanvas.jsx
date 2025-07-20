// LazyCanvas.js
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import "./LazyCanvas.css"; // <- Import your spinner styles

const LazyCanvas = ({ children, height = "300px" }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
    }, 50000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: height, position: "relative" }}>
      {!isLoaded && inView && <div className="spinner"></div>}
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 2] }}
          gl={{ toneMappingExposure: 0.6 }}
          onCreated={() => setIsLoaded(true)}
        >
          {children}
        </Canvas>
      )}
    </div>
  );
};

export default LazyCanvas;
