import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.css';

const Loader = ({ onFinished }) => {
  const loaderRef = useRef(null);
  const textOutlineRef = useRef(null);
  const textSolidRef = useRef(null); // Ref for the solid text
  const waveGroupRef = useRef(null);
  const glossHighlightRef = useRef(null); // Ref for the gloss highlight

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onFinished) {
            onFinished(); // Removed setTimeout for faster transition
        }
      }
    });

    const waves = waveGroupRef.current.children;
    const textOutline = textOutlineRef.current;
    const textSolid = textSolidRef.current;
    const glossHighlight = glossHighlightRef.current;

    // Light theme initial settings
    gsap.set(loaderRef.current, { autoAlpha: 1, backgroundColor: '#f8fafc' });
    gsap.set(textOutline, { autoAlpha: 1 }); 
    gsap.set(textSolid, { autoAlpha: 0 }); 
    gsap.set(waves, { y: 120 }); 
    gsap.set(glossHighlight, { 
        attr: { x: -350 },  // Start further left
        opacity: 0  // Start invisible
    }); 

    // Faster animation sequence
    tl.to(glossHighlight, { 
        attr: { x: 350 },  // Move further right
        opacity: 1,  // Fade in during movement
        duration: 1,  // Longer duration
        ease: 'power1.inOut',
        repeat: 1,  // Repeat the effect
        repeatDelay: 0.5  // Add delay between repeats
    }, 0.2)

    .to(waves, {
      y: -10, 
      duration: 3,  // Reduced duration
      ease: 'elastic.out(1.4, 0.6)',
      stagger: 0.2
    }, 0.6)

    .to(textOutline, {
      autoAlpha: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, 0.8)

    .to(textSolid, { 
      autoAlpha: 1,
      duration: 0.6,
      ease: 'power2.out'
    }, 0.8)

    .to(waves, {
      x: '+=20', 
      ease: 'sine.inOut',
      duration: 1,
      repeat: 0,
      yoyo: true, 
      stagger: {
        each: 0.08,
        from: 'center'
      }
    }, 1.2)

    // Faster exit sequence
    .to([textSolid, waveGroupRef.current], {
        scale: 1.05,
        filter: 'brightness(1.2) saturate(1.1)',
        duration: 0.3,
        ease: "power1.inOut"
    })
    .to([textSolid, waveGroupRef.current], {
        scale: 0.95,
        x: '100vw',
        skewX: 10,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: {
            amount: 0.08,
            from: "start"
        }
    }, "-=0.1")
    .to(loaderRef.current, {
        backgroundColor: '#ffffff',
        duration: 0.2,
        ease: "none"
    }, "-=0.4")
    .to(loaderRef.current, {
        x: '100vw',
        duration: 0.4,
        ease: "power2.inOut"
    }, "-=0.2");

  }, [onFinished]);

  return (
    <div className="loader-container">
      <div 
        ref={loaderRef} 
        className="loader-content"
      >
        <svg width="100%" height="100%" viewBox="-300 -150 600 300">
          <defs>
              {/* The clipPath correctly contains the text shape to mask the waves and gloss. */}
              <clipPath id="text-mask">
                  <text 
                      textAnchor="middle" 
                      dy=".3em" 
                      fontSize="100" 
                      letterSpacing="-5"  // Add this line
                      fontFamily="Arial, sans-serif" 
                      fontWeight="bold">
                      PRIME
                  </text>
              </clipPath>
              <linearGradient id="glossGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
          </defs>

          {/* --- Text Outline (Visible at the start) --- */}
          <text 
              ref={textOutlineRef} 
              textAnchor="middle" 
              dy=".3em" 
              fill="none" 
              stroke="#94a3b8" 
              strokeWidth="1" 
              fontSize="100" 
              letterSpacing="-5"  // Add this line
              fontFamily="Arial, sans-serif" 
              fontWeight="bold">
              PRIME
          </text>

          {/* --- Solid Text (Fades in as the outline fades out) --- */}
          <text 
              className='primetxt' 
              ref={textSolidRef} 
              textAnchor="middle" 
              dy=".3em" 
              fill="#0f172a" 
              fontSize="100" 
              letterSpacing="-5"  // Add this line
              fontFamily="Arial, sans-serif" 
              fontWeight="bold">
              PRIME
          </text>

          {/* --- Liquid Wave Group (Clipped by the text mask) --- */}
          <g ref={waveGroupRef} clipPath="url(#text-mask)">
              <path d="M-400,50 C-200,150 200,-50 400,50 L400,150 L-400,150 Z" 
                  fill="#818cf8" opacity="0.7"/>
              <path d="M-400,60 C-250,100 150,0 400,60 L400,150 L-400,150 Z" 
                  fill="#38bdf8" opacity="0.7"/>
              <path d="M-400,70 C-300,50 300,150 400,70 L400,150 L-400,150 Z" 
                  fill="#2dd4bf" opacity="0.7"/>
          </g>

          {/* --- Gloss Highlight (Also clipped by the text mask) --- */}
          <rect ref={glossHighlightRef} 
              y="-60" 
              width="80"  // Increased width
              height="160"  // Increased height
              fill="url(#glossGradient)"  // Use gradient instead of solid color
              opacity="0.9"  // Increased opacity
              transform="skewX(-20)" 
              clipPath="url(#text-mask)" />
        </svg>
      </div>
    </div>
  );
};


export default Loader;
