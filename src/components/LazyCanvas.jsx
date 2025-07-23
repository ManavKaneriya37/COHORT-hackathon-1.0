// LazyCanvas.js
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import "./LazyCanvas.css";

const LazyCanvas = ({ children, height = "300px" }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 500) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "500px",
        threshold: 0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCreated = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  return (
    <div
      ref={ref}
      style={{
        minHeight: height,
        position: "relative",
        opacity: isLoaded ? 1 : 0.3,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <div className={`loader ${inView && isLoaded ? 'hidden' : ''}`}>
        <div className="spinner"></div>
        <p>Loading product...</p>
      </div>
      
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 2] }}
          gl={{ toneMappingExposure: 0.6 }}
          onCreated={handleCreated}
        >
          {children}
        </Canvas>
      )}
    </div>
  );
};

export default LazyCanvas;
