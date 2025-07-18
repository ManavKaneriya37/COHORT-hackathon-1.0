import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "../Loader/Loader";
import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const homeContentRef = useRef(null);

  const navref = useRef();
  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  const view1Ref = useRef();
  const bottleRef = useRef();

  useEffect(() => {
    if (!loading) {
      handleLoaderFinish();
    }
  }, [loading]);

  const handleLoaderFinish = () => {
    setLoading(false);

    const tl = gsap.timeline();

    // Home entry animation
    tl.fromTo(
      homeContentRef.current,
      { opacity: 0, y: 30, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    const navItems = navref.current.querySelectorAll("nav div h2, .middle");

    tl.fromTo(
      navItems,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.inOut",
      },
      "-=0.5"
    );

    // Page 1 animation on load
    const page1Elements =
      page1Ref.current.querySelectorAll("img, h3, p, button");

    tl.fromTo(
      page1Elements,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        stagger: 0.15,
        ease: "elastic.inOut",
        // scrollTrigger: {
        //   trigger: page1Ref.current,
        //   start: "top 15%",
        // },
      },
      "-=0.4"
    );

    // ScrollTrigger for Page 2
    const page2Elements =
      page2Ref.current.querySelectorAll("img, h3, p, button");

    gsap.fromTo(
      page2Elements,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "elastic.inOut",
        scrollTrigger: {
          trigger: page2Ref.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      }
    );

    // ScrollTrigger for Page 3
    const page3Elements =
      page3Ref.current.querySelectorAll("img, h3, p, button");

    gsap.fromTo(
      page3Elements,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "elastic.inOut",
        scrollTrigger: {
          trigger: page3Ref.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(bottleRef.current, {
      y: 530,
      x: -80,
      rotate: 0, // Use rotate instead of transform
      scrollTrigger: {
        trigger: view1Ref.current, // Start scroll animation with the whole section
        start: "top 90%",     // Start animation early
    end: "+=600",    // when bottom of section hits top of viewport
        scrub: 2
      },
    });
  };

  return (
    <>
      {loading ? (
        <Loader onFinished={handleLoaderFinish} />
      ) : (
        <div ref={homeContentRef} className="home-content">
          <nav ref={navref}>
            <div className="left">
              <h2>Shop near me</h2>
              <h2>Where to buy</h2>
            </div>
            <div className="middle">PRIME</div>
            <div className="right">
              <h2>About Prime</h2>
              <h2>Verify your Prime</h2>
            </div>
          </nav>

          <section className="slide1">
            <h1>PRIME: Hydration. Energy. Refuel.</h1>
            <h5>THE ULTIMATE COLLECTORS TAKE HOME $1M USD*</h5>
            <img
              className="img1"
              src="src\Assets\Home slide 1\bottle1.webp"
              alt=""
            />
            <img
              ref={bottleRef}
              className="img2"
              src="src\Assets\page1center.png"
              alt=""
            />
            <img
              className="img3"
              src="src\Assets\Home slide 1\bottle2.webp"
              alt=""
            />
            <button>Collect Now</button>
          </section>

          <div className="view1" ref={view1Ref}>
            <div className="page1" ref={page1Ref}>
              <div className="page1display">
                <img
                  src="src/Assets/Page1/candy1.png"
                  alt=""
                  className="candy1"
                />
                <img
                  src="src/Assets/Page1/candy2.png"
                  alt=""
                  className="candy2"
                />
                <img
                  className="centerImg"
                  src="src/Assets/page1center.png"
                  alt=""
                />
                <h3>Ice Pop</h3>
                <p>
                  Prime's Ice Pop flavor is a nostalgic blend of cherry, blue
                  raspberry, and lemon-lime, offering a refreshing taste perfect
                  for summer.
                </p>
                <button>BUY NOW</button>
              </div>
            </div>

            <div className="page2" ref={page2Ref}>
              <div className="page2display">
                <img
                  src="src/Assets/page2/banana.png"
                  alt=""
                  className="obj1"
                />
                <img
                  src="src/Assets/page2/strawberry-isolated-white-background-close-up-removebg-preview 1.png"
                  alt=""
                  className="obj2"
                />
                <img
                  className="centerImg"
                  src="src/Assets/page2/HydrationFront_600x 1.png"
                  alt=""
                />
                <h3>Strawberry Banana</h3>
                <p>
                  Prime's Strawberry Banana flavor combines the sweet essence of
                  ripe strawberries with the creamy goodness of bananas,
                  creating a delightful.
                </p>
                <button>BUY NOW</button>
              </div>
            </div>

            <div className="page3" ref={page3Ref}>
              <div className="page3display">
                <img
                  src="src/Assets/page3/Bunch_of_fresh_red_cherries_-3-removebg-preview 1.png"
                  alt=""
                  className="obj1"
                />
                <img
                  className="centerImg"
                  src="src/Assets/page3/CherryFreeze.png"
                  alt=""
                />
                <h3>Cherry Freeze</h3>
                <p>
                  Prime's Cherry Freeze flavor delivers a burst of icy
                  refreshment with the bold and tangy taste of cherries, perfect
                  for cooling down on hot days.
                </p>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
