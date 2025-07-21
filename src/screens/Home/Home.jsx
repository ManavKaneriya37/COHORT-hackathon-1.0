import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "../Loader/Loader";
import "./Home.css";
import "./responsive.css";
import { Canvas } from "@react-three/fiber";
import ModelViewer from "../../components/ModelViewer";
import "remixicon/fonts/remixicon.css";
import LazyCanvas from "../../components/LazyCanvas";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const homeContentRef = useRef(null);

  const navref = useRef();
  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  const view1Ref = useRef();
  const view2Ref = useRef();
  const bottleRef = useRef();
  const slide1h1 = useRef();
  const collectBtn = useRef();
  const slide1 = useRef();

  useEffect(() => {
    if (!loading) {
      handleLoaderFinish();
    }
  }, [loading]);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: true,
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);

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
        stagger: {
          amount: 0.3,
        },
        ease: "power1.inOut",
      },
      "-=0.5"
    );

    const el = slide1h1.current;
    const words = el.textContent.split("");
    el.innerHTML = "";

    words.forEach((word) => {
      el.innerHTML += `<span>${word}</span>`;
    });

    const spans = el.querySelectorAll("span");
    console.log(spans);

    tl.fromTo(
      spans,
      {
        opacity: 0,
      },
      {
        stagger: {
          amount: 0.6,
        },
        opacity: 1,
      }
    );

    tl.fromTo(
      collectBtn.current,
      {
        opacity: 0,
        scale: 0.7,
      },
      {
        duration: 0.5,
        ease: "power1.inOut",
        opacity: 1,
        scale: 1,
      }
    );

    const allImgsPage1 = slide1.current.querySelectorAll("img");

    tl.fromTo(
      allImgsPage1,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 0.8,
        },
        duration: 0.3,
      },
      "-=0.5"
    );

    const page1H5 = slide1.current.querySelectorAll("h5");

    tl.fromTo(
      page1H5,
      {
        opacity: 0,
      },
      { opacity: 1 }
    );

    // Page 1 animation on load
    const page1Elements =
      page1Ref.current.querySelectorAll("img, h3, p, button");

    gsap.fromTo(
      page1Elements,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        stagger: 0.15,
        delay: 0.4,
        ease: "elastic.inOut",
        scrollTrigger: {
          trigger: page1Ref.current,
          start: "top bottom",
        },
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
      y: "35rem",
      x: -80,
      rotate: 0, // Use rotate instead of transform
      scrollTrigger: {
        trigger: view1Ref.current, // Start scroll animation with the whole section
        start: "top 90%", // Start animation early
        end: "+=450", // when bottom of section hits top of viewport
        scrub: 2,
      },
    });

    view2Animation(tl);
  };

  const view2Animation = (tl) => {
    const h5head = view2Ref.current.querySelector("h5");
    tl.to(h5head, {
      transform: "translate(-75rem, 90rem) rotate(-30deg)",
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: view2Ref.current,
        start: "top bottom",
        end: "+=2000", // Increased scroll distance even more
        scrub: {
          trigger: true,
          smooth: 3.5, // Increased smoothing
          ease: "power2.inOut",
          duration: 2, // Added duration
        },
      },
    });

    const allProducts = view2Ref.current.querySelectorAll("article .product");

    tl.to(allProducts, {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: view2Ref.current,
        start: "top bottom",
        scrub: true,
        stagger: {
          amount: 0.3,
        },
      },
    });
  };

  return (
    <>
      {loading ? (
        <Loader onFinished={handleLoaderFinish} />
      ) : (
        <div ref={homeContentRef} className="home-content">
          <div
            className="hammenu"
            style={{
              fontSize: "2rem",
              padding: "1rem 2rem",
              margin: "0.4rem",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000",
              width: "3rem",
            }}
          >
            <i style={{ color: "#fff" }} className="ri-menu-2-line"></i>
          </div>
          

          <section className="slide1" ref={slide1}>
            <h1 ref={slide1h1}>Refuel. Energy. Hydration.</h1>
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
            <button ref={collectBtn}>Collect Now</button>
          </section>

          <div className="view1" ref={view1Ref}>
            <div className="page page1" ref={page1Ref}>
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
                <span></span>
                <div className="content">
                  <h3>Ice Pop</h3>
                  <p>
                    Prime's Ice Pop flavor is a nostalgic blend of cherry, blue
                    raspberry, and lemon-lime, offering a refreshing taste
                    perfect for summer.
                  </p>
                  <button>BUY NOW</button>
                </div>
              </div>
            </div>

            <div className="page page2" ref={page2Ref}>
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

            <div className="page  page3" ref={page3Ref}>
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

          <section className="view2" ref={view2Ref}>
            <h5>Hydration</h5>

            <article>
              <div className="product product1">
                <img src="src\Assets\view2\PRIME_hydration_white.webp" alt="" />
                <h3>Prime Collector Series</h3>
                <button>Know More</button>
              </div>
              <div className="product produc2">
                <img src="src\Assets\view2\Sournova.webp" alt="" />
                <h3>Sournova</h3>
                <button>Know More</button>
              </div>
              <div className="product product3">
                <img
                  src="src\Assets\view2\Prime_hydration_PesoPluma.webp"
                  alt=""
                />
                <h3>Peso Pluma</h3>
                <button>Know More</button>
              </div>
              <div className="product product4">
                <img
                  src="src\Assets\view2\PrimeHydration_FutureFreeze.webp"
                  alt=""
                />
                <h3>Future Freeze</h3>
                <button>Know More</button>
              </div>
              <div className="product product5">
                <img
                  src="src\Assets\view2\Prime_hydration_CherryFreeze.webp"
                  alt=""
                />
                <h3>Cherry Freeze</h3>
                <button>Know More</button>
              </div>
            </article>
          </section>

          <section className="view3">
            <h3>
              RAPID
              <br />
              REHYDRATION
            </h3>
            <div className="imgs">
              <div className="img">
                <img
                  src="src\Assets\View3\PR_RapidRehydration_GO_Web_PDP_Front_2000x2000_fd03bf87-bb43-4ca6-9767-756907babcd5_600x.png"
                  alt=""
                />
              </div>
              <div className="img">
                <img
                  src="src\Assets\View3\PR_RapidRehydration_OC_Web_PDP_Front_2000x2000_a0a85545-b084-4303-86d8-5ced85a845b1_600x.png"
                  alt=""
                />
              </div>
              <div className="img">
                <img
                  src="src\Assets\View3\PR_RapidRehydration_CBR_Web_PDP_Front_2000x2000_18fe6542-ade6-44fd-a8e5-1ef8b1fc5c84_600x.png"
                  alt=""
                />
              </div>
            </div>
          </section>

          <section className="view4">
            <h2>ENERGY</h2>

            <div className="canvas-row">
              <div className="canvas-box">
                <LazyCanvas>
                  <ambientLight intensity={1.5} />
                  <directionalLight
                    position={[3, 3, 3]}
                    intensity={1}
                    castShadow
                  />
                  <ModelViewer modelPath="src\Assets\View4\Drink1.glb" />
                </LazyCanvas>
                <h4>Cherry Limeade</h4>
                <button>LEARN MORE</button>
              </div>

              <div className="canvas-box">
                <LazyCanvas>
                  <ambientLight intensity={1.5} />
                  <directionalLight
                    position={[3, 3, 3]}
                    intensity={1}
                    castShadow
                  />
                  <ModelViewer modelPath="src\Assets\View4\Drink2.glb" />
                </LazyCanvas>

                <h4>Dripsicle</h4>
                <button>LEARN MORE</button>
              </div>

              <div className="canvas-box">
                <LazyCanvas>
                  <ambientLight intensity={1.5} />
                  <directionalLight
                    position={[3, 3, 3]}
                    intensity={1}
                    castShadow
                  />
                  <ModelViewer modelPath="src\Assets\View4\Drink3.glb" />
                </LazyCanvas>
                <h4>Original</h4>
                <button>LEARN MORE</button>
              </div>
            </div>
          </section>

          <div className="view5">
            <div className="left">
              <img
                className="can1"
                src="src\Assets\View4\CherryLimeade-Front_400x.webp"
                alt=""
              />
              <img
                className="can2"
                src="src\Assets\View4\PE-Original_V2_400x.webp"
                alt=""
              />
              <img
                className="can3"
                src="src\Assets\View4\PRIME_energy_1serve_16oz_US_Drpsicle_00000_400x.webp"
                alt=""
              />
              <img
                className="can4"
                src="src\Assets\View4\PE-Dream_V2_400x.webp  "
                alt=""
              />
            </div>
            <div className="right">
              <img
                src="src\Assets\View5\Updated_PRIME_US_Energy_Grouped_Callout_Image_-_Oct_2023_1000x.webp"
                alt=""
              />
            </div>
          </div>         
        </div>
      )}
    </>
  );
};

export default Home;
