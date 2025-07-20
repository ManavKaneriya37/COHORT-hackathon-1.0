import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "../Loader/Loader";
import "./Home.css";
import "./responsive.css"
import { Canvas } from "@react-three/fiber";
import ModelViewer from "../../components/ModelViewer";
import "remixicon/fonts/remixicon.css";
import LazyCanvas from "../../components/LazyCanvas";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [loading, setLoading] = useState(false);
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
    const lenis = new Lenis({ smooth: true, duration: 4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothTouch: true });

    const animate = (time) => {
      lenis.raf(time)
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
      y: "40rem",
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
      scrollTrigger: {
        trigger: view2Ref.current,
        start: "top bottom",
        end: "+=900",
        scrub: 4,
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
          <div className="hammenu" style={{fontSize: "2rem",padding: "1rem 2rem" , margin: "0.4rem", display: "none", alignItems: "center", justifyContent: "center", backgroundColor: "#000", width: "3rem"}}><i style={{color: "#fff"}} className="ri-menu-2-line"></i></div>
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

          <section className="slide1" ref={slide1}>
            <h1 ref={slide1h1}>PRIME: Hydration. Energy. Refuel.</h1>
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

            <div className="page page3" ref={page3Ref}>
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
            <img
              src="src\Assets\View3\PR_RapidRehydration_GO_Web_PDP_Front_2000x2000_fd03bf87-bb43-4ca6-9767-756907babcd5_600x.webp"
              alt=""
            />
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
                <h4>Dripsicle</h4>
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

          <footer>
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
                  <i class="ri-facebook-circle-fill"></i>
                  <i class="ri-instagram-line"></i>
                  <i class="ri-tiktok-fill"></i>
                  <i class="ri-twitter-x-line"></i>
                </div>
              </div>
              <div className="box2">
                <a href="">RAPID HYDRATION</a>
                <a href="">ICE HYDRATOIN</a>
                <a href="">HYDRATON</a>
                <a href="">HYDRATION + STICKS</a>
                <a href="">ENERGY</a>
              </div>
              <div className="box3">
                <a href="">ABOUT PRIME</a>
                <a href="">TEAM + ATHLETES</a>
                <a href="">CREATORS</a>
                <a href="">ARTISTS</a>
                <a href="">AMBASSADORS</a>
              </div>
              <div className="box4">
                <a href="">FAQS</a>
                <a href="">PRIVACY POLICY</a>
                <a href="">RETURN POLICY</a>
                <a href="">WHERE TO BUY</a>
                <a href="">CONTACT US</a>
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
                <a href="">Cookie Choice</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms of Use</a>
                <a href="">Accessibility Statement</a>
                <a href="">Contact</a>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Home;
