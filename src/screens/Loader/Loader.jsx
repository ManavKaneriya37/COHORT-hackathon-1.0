import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.css";

const Loader = ({ onFinished }) => {
  // All refs for the combined animation
  const loaderRef = useRef(null);
  const textOutlineRef = useRef(null);
  const textSolidRef = useRef(null);
  const waveGroupRef = useRef(null);
  const glossHighlightRef = useRef(null);
  const particlesGroupRef = useRef(null);
  const progressBarRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onFinished) {
          onFinished();
        }
      },
    });

    // Element references
    const waves = waveGroupRef.current.children;
    const textOutline = textOutlineRef.current;
    const textSolid = textSolidRef.current;
    const glossHighlight = glossHighlightRef.current;
    const particles = particlesGroupRef.current.children;
    const progressBar = progressBarRef.current;
    const counterText = counterRef.current;
    const counter = { value: 0 };
    const progressBarWidth = 250;

    // --- INITIAL STATES ---
    gsap.set(loaderRef.current, { autoAlpha: 1, backgroundColor: "#f8fafc" });
    gsap.set(textOutline, { autoAlpha: 1, stroke: "#94a3b8" });
    gsap.set(textSolid, { autoAlpha: 0, fill: "#1e293b" });
    gsap.set(waves, { y: 120 });
    gsap.set(glossHighlight, { attr: { x: -350 }, opacity: 0 });
    gsap.set(particlesGroupRef.current, { autoAlpha: 0 });
    gsap.set(progressBar, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(counterText, { autoAlpha: 0 });


    // --- ANIMATION TIMELINE ---

    // 1. ORIGINAL ANIMATIONS (RESTORED)
    tl.to(glossHighlight, {
        attr: { x: 350 },
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut",
        repeat: 1,
        repeatDelay: 0.3,
      }, 0.2)
      .to(waves, {
        y: -10,
        duration: 2,
        ease: "elastic.out(1.2, 0.5)",
        stagger: 0.18,
      }, 0.5)
      .addLabel("loading", 0.5);

    // 2. NEW "ATTRACTIVE" LOADING SEQUENCE
      tl.to(progressBar, {
        scaleX: 1,
        duration: 2,
        ease: "power1.inOut"
      }, "loading")
      .to(counter, {
        value: 100,
        duration: 2,
        ease: 'power1.inOut',
        onStart: () => gsap.to(counterText, {autoAlpha: 1, duration: 0.1}),
        onUpdate: () => {
          const newX = -progressBarWidth / 2 + (counter.value / 100) * progressBarWidth;
          counterText.textContent = `${Math.round(counter.value)}%`;
          // The counter text follows the progress bar's edge
          gsap.set(counterText, { x: newX });
        }
      }, "loading")
      .to([progressBar, counterText], {
          autoAlpha: 0,
          duration: 0.4
      }, "+=0.3"); // Fade out when done

    // 3. ORIGINAL TEXT TRANSITION & WOBBLE (RESTORED)
      tl.to(textSolid, {
        autoAlpha: 1,
        duration: 0.8,
        ease: "power2.inOut",
      }, 0.6)
      .to(textOutline, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.out",
      }, 1.0)
      .to(waves, {
        x: "+=20",
        ease: "sine.inOut",
        duration: 0.9,
        yoyo: true,
        repeat: 1,
        stagger: { each: 0.06, from: "center" },
      }, 1.2)
      .addLabel("exit", "+=0.3");

    // 4. PIXEL DECONSTRUCTION EXIT
    tl.to([textSolid, waveGroupRef.current], {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.in",
      }, "exit")
      .set(particlesGroupRef.current, { autoAlpha: 1 }, "exit")
      .to(particles, {
        x: () => gsap.utils.random(-250, 250),
        y: () => gsap.utils.random(-150, 150),
        scale: () => gsap.utils.random(0.5, 2),
        rotation: () => gsap.utils.random(-720, 720),
        autoAlpha: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: {
          amount: 0.8,
          from: "random",
        },
      }, "exit")
      .to(loaderRef.current, { autoAlpha: 0, duration: 0.6 }, "-=1.2");
  }, [onFinished]);

  const renderParticles = () => {
    const particles = [];
    const gridSize = 20;
    const textWidth = 280;
    const textHeight = 100;
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize / 2; j++) {
        particles.push(
          <rect
            key={`${i}-${j}`}
            x={-textWidth / 2 + (i * textWidth) / gridSize}
            y={-textHeight / 2 + (j * textHeight) / (gridSize / 2)}
            width={textWidth / gridSize}
            height={textHeight / (gridSize / 2)}
            fill="#1e293b"
          />
        );
      }
    }
    return particles;
  };

  return (
    <div className="loader-container">
      <div ref={loaderRef} className="loader-content">
        <svg width="100%" height="100%" viewBox="-300 -150 600 300">
          <defs>
            <clipPath id="text-mask">
              <text textAnchor="middle" dy=".3em" fontSize="100" letterSpacing="-5" fontFamily="Arial, sans-serif" fontWeight="bold">
                PRIME
              </text>
            </clipPath>
            <linearGradient id="glossGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          <text ref={textOutlineRef} textAnchor="middle" dy=".3em" fill="none" stroke="#94a3b8" strokeWidth="1" fontSize="100" letterSpacing="-5" fontFamily="Arial, sans-serif" fontWeight="bold">
            PRIME
          </text>

          <text ref={textSolidRef} textAnchor="middle" dy=".3em" fill="#1e293b" fontSize="100" letterSpacing="-5" fontFamily="Arial, sans-serif" fontWeight="bold" clipPath="url(#text-mask)">
            PRIME
          </text>
          
          <g ref={particlesGroupRef} clipPath="url(#text-mask)">
            {renderParticles()}
          </g>

          <g ref={waveGroupRef} clipPath="url(#text-mask)">
            <path d="M-400,50 C-200,150 200,-50 400,50 L400,150 L-400,150 Z" fill="#818cf8" opacity="0.5"/>
            <path d="M-400,60 C-250,100 150,0 400,60 L400,150 L-400,150 Z" fill="#38bdf8" opacity="0.5"/>
            <path d="M-400,70 C-300,50 300,150 400,70 L400,150 L-400,150 Z" fill="#2dd4bf" opacity="0.5"/>
          </g>

          <rect ref={glossHighlightRef} y="-60" width="80" height="160" fill="url(#glossGradient)" opacity="0.9" transform="skewX(-20)" clipPath="url(#text-mask)" />
          
          {/* --- Attractive Loading Bar & Counter --- */}
          <g transform="translate(0, 80)">
            <text className="loader-label">Please wait to get PRIME experience</text>
             <rect x="-125" y="0" width="250" height="1.5" fill="#e2e8f0" rx="1" />
             <rect ref={progressBarRef} x="-125" y="0" width="250" height="1.5" fill="#4f46e5" rx="1" />
             <text className="loader-counter" ref={counterRef} y="-8" textAnchor="middle" fill="#4f46e5" fontSize="14" fontWeight="bold">
                0%
             </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;