import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "../Loader/Loader";
import "./Home.css";
import "../../components/Layout.css";
import "./responsive.css";
import ModelViewer from "../../components/ModelViewer";
import "remixicon/fonts/remixicon.css";
import LazyCanvas from "../../components/LazyCanvas";
import Lenis from "@studio-freight/lenis";
import { NavLink, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const homeContentRef = useRef(null);
  const navref = useRef();
  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  const view1Ref = useRef();
  const view2Ref = useRef();
  const footerRef = useRef();
  const bottleRef = useRef();
  const slide1h1 = useRef();
  const view3Ref = useRef();
  const collectBtn = useRef();
  const slide1 = useRef();
  const view4Ref = useRef();
  const view4head = useRef();

  useEffect(() => {
    if (!loading) {
      handleLoaderFinish();
    }
  }, [loading]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Slightly slower easing
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 0.6, // lower = harder to scroll on touch
      wheelMultiplier: 0.6,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoaderFinish = () => {
    setLoading(false);

    const tl = gsap.timeline();

    const navItems =
      navref.current?.querySelectorAll("nav div h2, .middle") || [];

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

    tl.fromTo(
      spans,
      {
        opacity: 0,
        y: 20, // Add y translation
        scale: 0.9, // Add scale
      },
      {
        stagger: {
          amount: 0.8,
        },
        opacity: 1,
        y: 0, // Animate back to original position
        scale: 1, // Animate back to original scale
        ease: "back.out(1.7)", // A more dynamic ease
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
      { opacity: 0, y: 50, scale: 0.95, skewY: 5 }, // Add skewY
      {
        opacity: 1,
        y: 0,
        scale: 1,
        skewY: 0, // Animate skewY back to 0
        duration: 1.8,
        stagger: 0.3,
        delay: 0.4,
        ease: "elastic.out(0.5)", // More dynamic elastic ease
        scrollTrigger: {
          trigger: page1Ref.current,
          once: true,
          start: "top 80%",
          end: "bottom bottom",
        },
      }
    );

    gsap.to(page1Ref.current.querySelector(".candy1"), {
      y: -30,
      x: 20,
      rotate: 15,
      scale: 1.1,
      repeat: -1, // Infinite loop
      yoyo: true, // Go back and forth
      ease: "power1.inOut",
      duration: 3,
      scrollTrigger: {
        trigger: page1Ref.current,
        start: "top bottom",
        toggleActions: "play pause resume reverse", // Play when entering, pause when leaving
      },
    });

    gsap.to(page1Ref.current.querySelector(".candy2"), {
      y: 20,
      x: -15,
      rotate: -10,
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 3.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: page1Ref.current,
        start: "top bottom",
        toggleActions: "play pause resume reverse",
      },
    });

    // ScrollTrigger for Page 2
    const page2Elements =
      page2Ref.current.querySelectorAll("img, h3, p, button");

    gsap.fromTo(
      page2Elements,
      { opacity: 0, y: 50, scale: 0.95, skewY: 5 },
      {
        opacity: 1,
        y: 0,
        skewY: 0, // Animate skewY back to 0
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)",
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
      { opacity: 0, y: 50, scale: 0.95, skewY: 5 },
      {
        opacity: 1,
        y: 0,
        skewY: 0, // Animate skewY back to 0
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)",
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

    const view3head = view3Ref.current.querySelector("h3");
    gsap.fromTo(
      view3head,
      {
        y: -40,
        opacity: 0,
        skewX: -20,
      },
      {
        opacity: 1,
        y: 0,
        skewX: 0,
        scrollTrigger: {
          trigger: view3Ref.current,
          start: "top 90%",
          end: "+=500",
          scrub: true,
        },
      }
    );
    // In useEffect where other ScrollTriggers are
    const view3Imgs = view3Ref.current.querySelectorAll(".imgs img"); // Assuming you add a ref to view3 for this

    gsap.fromTo(
      view3Imgs,
      {
        opacity: 0,
        x: -100, // Start off-screen left
        rotate: 0, // Start with no rotation
      },
      {
        opacity: 1,
        x: 0, // Move to original x position
        rotate: -90, // Rotate to -90 degrees
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: view3Ref.current,
          start: "top 90%",
          end: "+=400",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );

    // const view4head = view4Ref.current.querySelector("h2")
    // gsap.fromTo(view4head, {
    //   opacity: 0,
    //   y:-200
    // },{
    //   y: 40,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: view4Ref.current,
    //     start: "top bottom",
    //     scrub: true,
    //     toggleActions: "play none none none"
    //   }
    // })

    let stmt = view4head.current;

    // Ensure stmt exists before proceeding
    if (stmt) {
      const wrds = stmt.textContent.split(""); // Get text content and split into characters
      stmt.innerHTML = ""; // Clear existing content

      // Corrected: Use innerHTML += to append span elements
      wrds.forEach((word) => {
        stmt.innerHTML += `<span>${word === " " ? "&nbsp;" : word}</span>`; // Handle spaces with &nbsp;
      });

      // console.log(stmt); // This will log the DOM element, not its string representation

      const splits = stmt.querySelectorAll("span"); // Select all newly created spans
      gsap.fromTo(
        splits,
        {
          x: -50,
          opacity: 0,
        },
        {
          opacity: 1,
          x: 0,
          stagger: {
            amount: 0.9,
          }, // Adjusted stagger for a faster, more natural reveal
          ease: "power2.out", // Added an ease for smoother animation
          scrollTrigger: {
            trigger: view4Ref.current, // Ensure view4Ref is correctly set up
            start: "top 90%", // When the top of the trigger hits 90% from the top of the viewport
            toggleActions: "play none none none", // Play animation once when entering viewport
          },
        }
      );
    }

    // In useEffect where other ScrollTriggers are
    const canvasBoxes = view4Ref.current.querySelectorAll(
      ".canvas-row .canvas-box"
    ); // Assuming you add a ref to view4

    gsap.fromTo(
      canvasBoxes,
      {
        opacity: 0,
        y: 100,
        rotationX: -90, // Rotate on X-axis for a 3D flip effect
        transformOrigin: "center center",
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: view4Ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // In useEffect where other ScrollTriggers are
    // const footerTopBoxes = footerRef.current.querySelectorAll(".top > div"); // Assuming you add a ref to the footer
    // const footerBottom = footerRef.current.querySelector(".bottom");
    // const footerUserStuff = footerRef.current.querySelector(".user-stuff");

    // gsap.fromTo(
    //   footerTopBoxes,
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.8,
    //     stagger: 0.1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: footerRef.current,
    //       start: "top 95%",
    //       toggleActions: "play none none none",
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   footerBottom,
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 2,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: footerBottom,
    //       start: "top 90%",
    //       toggleActions: "play none none none",
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   footerUserStuff,
    //   { opacity: 0, y: 30 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1,
    //     ease: "power1.out",
    //     scrollTrigger: {
    //       trigger: footerUserStuff,
    //       start: "top 95%",
    //       toggleActions: "play none none none",
    //     },
    //   }
    // );

    view2Animation(tl);
  };

  const view2Animation = (tl) => {
    const h5head = view2Ref.current.querySelector("h5");
    tl.to(h5head, {
      transform: "translate(-150rem) rotate(0deg)",
      opacity: 1,
      ease: "power1.inOut", // Changed to smoother easing
      scrollTrigger: {
        trigger: view2Ref.current,
        start: "top bottom",
        end: "+=800", // Increased scroll distance significantly
        scrub: {
          trigger: true,
          smooth: 5, // Increased smoothing
          ease: "linear",
          duration: 3, // Increased duration
        },
      },
    });

    const allProducts = view2Ref.current.querySelectorAll("article .product");

    tl.fromTo(
      allProducts,
      {
        opacity: 0,
        y: 50,
        scale: 0.6,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1, // Increased duration for a slower reveal
        ease: "back.out(1.7)", // A nice bouncy ease
        scrollTrigger: {
          trigger: view2Ref.current,
          start: "top 70%", // Start earlier
          end: "bottom center", // End when the section is mostly visible
          scrub: 0.5, // Slightly scrubbed entrance
          stagger: {
            amount: 0.5, // Slower stagger
            grid: "auto", // Stagger based on grid layout if applicable
            from: "center", // Stagger from the center outwards
          },
          toggleActions: "play none none none",
        },
      }
    );
  };

  return (
    <>
      {loading ? (
        <Loader onFinished={handleLoaderFinish} />
      ) : (
        <div ref={homeContentRef} className="home-content">
          <div className="loginlink"></div>


          <h1 id="prime">PRIME</h1>

          <section className="slide1" ref={slide1}>
            <h1 ref={slide1h1}>Refuel. Energy. Hydration.</h1>
            <h5>THE ULTIMATE COLLECTORS TAKE HOME $1M USD*</h5>
            <img className="img1" src="/Home slide 1/bottle1.webp" alt="" />

            <img
              ref={bottleRef}
              className="img2"
              src="/page1center.png"
              alt=""
            />

            <img className="img3" src="/Home slide 1/bottle2.webp" alt="" />
            <a href={`${import.meta.env.VITE_HOST}/products`} ref={collectBtn}>
              Collect Now
            </a>
          </section>

          <div className="view1" ref={view1Ref}>
            <div className="page page1" ref={page1Ref}>
              <div className="page1display">
                <img src="/Page1/candy1.png" alt="" className="candy1" />
                <img src="/Page1/candy2.png" alt="" className="candy2" />
                <span></span>
                <div className="content">
                  <h3>Ice Pop</h3>
                  <p>
                    Prime's Ice Pop flavor is a nostalgic blend of cherry, blue
                    raspberry, and lemon-lime, offering a refreshing taste
                    perfect for summer.
                  </p>
                  <a href={`${import.meta.env.VITE_HOST}/products/hydration`}>BUY NOW</a>
                </div>
              </div>
            </div>

            <div className="page page2" ref={page2Ref}>
              <div className="page2display">
                <img src="/page2/banana.png" alt="" className="obj1" />
                <img
                  src="/page2/strawberry-isolated-white-background-close-up-removebg-preview 1.png"
                  alt=""
                  className="obj2"
                />
                <img
                  className="centerImg"
                  src="/page2/HydrationFront_600x 1.png"
                  alt=""
                />
                <h3>Strawberry Banana</h3>
                <p>
                  Prime's Strawberry Banana flavor combines the sweet essence of
                  ripe strawberries with the creamy goodness of bananas,
                  creating a delightful.
                </p>
                <a href={`${import.meta.env.VITE_HOST}/products/hydration`}>BUY NOW</a>
              </div>
            </div>

            <div className="page  page3" ref={page3Ref}>
              <div className="page3display">
                <img
                  src="/page3/Bunch_of_fresh_red_cherries_-3-removebg-preview 1.png"
                  alt=""
                  className="obj1"
                />
                <img
                  className="centerImg"
                  src="/page3/CherryFreeze.png"
                  alt=""
                />
                <h3>Cherry Freeze</h3>
                <p>
                  Prime's Cherry Freeze flavor delivers a burst of icy
                  refreshment with the bold and tangy taste of cherries, perfect
                  for cooling down on hot days.
                </p>
                <a href={`${import.meta.env.VITE_HOST}products/hydration`}>BUY NOW</a>
              </div>
            </div>
          </div>

          <section className="view2" ref={view2Ref}>
            <h5>Hydration</h5>

            <article>
              <div className="product product1">
                <img src="/view2/PRIME_hydration_white.webp" alt="" />
                <h3>Prime Collector Series</h3>
                <a href={`${import.meta.env.VITE_HOST}/products/hydration`}>Know More</a>
              </div>
              <div className="product produc2">
                <img src="/view2/Sournova.webp" alt="" />
                <h3>Sournova</h3>
                <a href={`${import.meta.env.VITE_HOST}/products/hydration`}>Know More</a>
              </div>
              <div className="product product3">
                <img src="/view2/Prime_hydration_PesoPluma.webp" alt="" />
                <h3>Peso Pluma</h3>
                <a href={`${import.meta.env.VITE_HOST}/products/hydration`}>Know More</a>
              </div>
              <div className="product product4">
                <img src="/view2/PrimeHydration_FutureFreeze.webp" alt="" />
                <h3>Future Freeze</h3>
                <a href={`${import.meta.env.VITE_HOST}/products/hydration`}>Know More</a>
              </div>
              <div className="product product5">
                <img src="/view2/Prime_hydration_CherryFreeze.webp" alt="" />
                <h3>Cherry Freeze</h3>
                <a href={`${import.meta.env.VITE_HOST}/products/hydration`}>Know More</a>
              </div>
            </article>
          </section>

          <section ref={view3Ref} className="view3">
            <h3>
              RAPID
              <br />
              REHYDRATION
            </h3>
            <div className="imgs">
              <div className="img">
                <img
                  src="/View3/PR_RapidRehydration_GO_Web_PDP_Front_2000x2000_fd03bf87-bb43-4ca6-9767-756907babcd5_600x.png"
                  alt=""
                />
              </div>
              <div className="img">
                <img
                  src="/View3/PR_RapidRehydration_OC_Web_PDP_Front_2000x2000_a0a85545-b084-4303-86d8-5ced85a845b1_600x.png"
                  alt=""
                />
              </div>
              <div className="img">
                <img
                  src="/View3/PR_RapidRehydration_CBR_Web_PDP_Front_2000x2000_18fe6542-ade6-44fd-a8e5-1ef8b1fc5c84_600x.png"
                  alt=""
                />
              </div>
            </div>
            <a href={`${import.meta.env.VITE_HOST}/products/rapid-hydration`}>VIEW MORE</a>
          </section>

          <section className="view4" ref={view4Ref}>
            <h2 ref={view4head}>ENERGY</h2>

            <div className="canvas-row">
              <div className="canvas-box">
                <LazyCanvas>
                  <ambientLight intensity={1.5} />
                  <directionalLight
                    position={[3, 3, 3]}
                    intensity={1}
                    castShadow
                  />
                  <ModelViewer modelPath="/View4/Drink1.glb" />
                </LazyCanvas>
                <h4>Cherry Limeade</h4>
                <a href={`${import.meta.env.VITE_HOST}/products/energy`}>view More</a>
              </div>

              <div className="canvas-box">
                <LazyCanvas>
                  <ambientLight intensity={1.5} />
                  <directionalLight
                    position={[3, 3, 3]}
                    intensity={1}
                    castShadow
                  />
                  <ModelViewer modelPath="/View4/Drink2.glb" />
                </LazyCanvas>

                <h4>Dripsicle</h4>
                <a href={`${import.meta.env.VITE_HOST}/products/energy`}>view More</a>
              </div>

              <div className="canvas-box">
                <LazyCanvas>
                  <ambientLight intensity={1.5} />
                  <directionalLight
                    position={[3, 3, 3]}
                    intensity={1}
                    castShadow
                  />
                  <ModelViewer modelPath="/View4/Drink3.glb" />
                </LazyCanvas>
                <h4>Original</h4>
                <a href={`${import.meta.env.VITE_HOST}/products/energy`}>view More</a>
              </div>
            </div>
          </section>

          <div className="view5">
            <div className="left">
              <img
                className="can1"
                src="/View4/CherryLimeade-Front_400x.webp"
                alt=""
              />
              <img
                className="can2"
                src="/View4/PE-Original_V2_400x.webp"
                alt=""
              />
              <img
                className="can3"
                src="/View4/PRIME_energy_1serve_16oz_US_Drpsicle_00000_400x.webp"
                alt=""
              />
              <img
                className="can4"
                src="/View4/PE-Dream_V2_400x.webp  "
                alt=""
              />
            </div>
            <div className="right">
              <img
                src="/View5/Updated_PRIME_US_Energy_Grouped_Callout_Image_-_Oct_2023_1000x.webp"
                alt=""
              />
            </div>
          </div>

          <div className="foot" ref={footerRef}>
            <div className="top">
              <div className="box1">
                <h2>About Prime</h2>
                <p>
                  PRIME was developed to fill the void where great taste meets
                  function. With bold, thirst-quenching flavors to help you
                  refresh, replenish, and refuel, PRIME is the perfect boost for
                  any endeavor. We're confident you'll love it as much as we do.
                </p>
                <div className="icons">
                  <i className="ri-facebook-circle-fill"></i>
                  <i className="ri-instagram-line"></i>
                  <i className="ri-tiktok-fill"></i>
                  <i className="ri-twitter-x-line"></i>
                </div>
              </div>
              <div className="box2">
                <NavLink to="/login">LOGIN</NavLink>
                <a href={`${import.meta.env.VITE_HOST}/products/rapid-hydration`}>RAPID HYDRATION</a>
                <a href={`${import.meta.env.VITE_HOST}/products/ice-hydration`}>ICE HYDRATOIN</a>
                <a href={`${import.meta.env.VITE_HOST}/products/hydration`}>HYDRATON</a>
                <a href={`${import.meta.env.VITE_HOST}/products/sticks`}>HYDRATION + STICKS</a>
                <a href={`${import.meta.env.VITE_HOST}/products/energy`}>ENERGY</a>
              </div>
            </div>
            <div className="bottom">
              <h3>NEWSLETTER</h3>
              <p className="subTxt">
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>
              <input type="text" placeholder="Enter your email" />
              <p id="detail">
                By subscribing, you consent to receive marketing communications
                from PRIME using the provided email address and phone number.
                Consent to receive marketing is not required for purchase.
                Standard data and messaging rates may apply. You can opt-out at
                any time by contacting us or using the unsubscribe link. See our
                Privacy Policy for details.
              </p>
              <button>SUBSCRIBE</button>
            </div>
            <div className="user-stuff">
              <h6>&copy; Prime Hydration LLC</h6>
              <div className="links">
                <a href={`${import.meta.env.VITE_HOST}`}>Cookie Choice</a>
                <a href={`${import.meta.env.VITE_HOST}`}>Privacy Policy</a>
                <a href={`${import.meta.env.VITE_HOST}`}>Terms of Use</a>
                <a href={`${import.meta.env.VITE_HOST}`}>Accessibility Statement</a>
                <a href={`${import.meta.env.VITE_HOST}`}>Contact</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
