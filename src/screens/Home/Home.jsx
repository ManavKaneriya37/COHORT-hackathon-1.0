import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import Loader from '../Loader/Loader'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const homeContentRef = useRef(null)

  const handleLoaderFinish = () => {
    // Called when loader animation completes
    setLoading(false)
    
    // Create a timeline for home content animation
    const tl = gsap.timeline()
    
    tl.fromTo(homeContentRef.current,
      {
        opacity: 0,
        y: 30,  // Reduced from 50
        scale: 0.98  // Less scale for faster animation
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,  // Reduced from 1.2
        ease: "power2.out"  // Changed to faster ease
      }
    )
  }

  return (
    <>
      {loading ? (
        <Loader onFinished={handleLoaderFinish} />
      ) : (
        <div ref={homeContentRef} className="home-content min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="container mx-auto px-4 py-20">
            <h1 className="text-6xl font-bold text-slate-800 text-center mb-8 tracking-tight">
              Welcome to PRIME
            </h1>
            {/* Add more content here */}
          </div>
        </div>
      )}
    </>
  )
}

export default Home