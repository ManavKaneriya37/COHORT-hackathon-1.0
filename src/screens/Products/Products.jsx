import React from "react";
import "remixicon/fonts/remixicon.css";
import { NavLink } from "react-router-dom";

import {
  icebanner,
  hydrationbanner,
  rapidhydrationbanner,
  energybanner,
  sticksbanner,
} from "./imgs";
import "./Products.css";

const Products = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="products-container">
      <NavLink to={-1} className="backArrow"><div><i class="ri-arrow-left-line"></i></div></NavLink>
      <h1>PRODUCTS</h1>

      <div className="ice-hydration">
        <div>
          <h2>Ice Hydration</h2>
          <p>
            Cool. Crisp. Legendary. PRIME Hydration Ice Pop is the ultimate
            fusion of icy refreshment and functional hydration. Inspired by the
            nostalgic red, white, and blue popsicles of summer, this flavor
            bursts with bold notes of cherry, lime, and blue raspberry,
            delivering a frozen treat vibe in every sip. Whether you're crushing
            a workout, recovering after a game, or just craving something wildly
            refreshing, Ice Pop keeps you energized and recharged. With zero
            added sugar, 10% coconut water, BCAAs, electrolytes, and
            antioxidants, it's hydration that works as hard as you do – and
            tastes like summer in a bottle.
          </p>
          <NavLink to="/products/ice-hydration">
            VIEW <i class="ri-arrow-right-line"></i>
          </NavLink>
        </div>

        <img src={icebanner} alt="" />
      </div>

      <div className="hydration">
        <img src={hydrationbanner} alt="" />
        <div>
          <h2>Hydration</h2>
          <p>
            Engineered for hydration. Designed for greatness. PRIME Hydration
            isn’t just another sports drink — it’s a performance-boosting,
            recovery-focused formula created to fuel your lifestyle. Packed with
            functional ingredients like 10% coconut water for natural
            electrolytes, BCAAs for muscle recovery, antioxidants to combat
            fatigue, and 250mg of essential electrolytes, every bottle is built
            to keep you performing at your peak. With zero added sugar and only
            25 calories per bottle, PRIME Hydration is the clean, refreshing
            boost your body craves — whether you’re in the gym, on the field, or
            on the go. Hydrate like a pro. Stay PRIME.
          </p>
          <NavLink to="/products/hydration">
            VIEW <i class="ri-arrow-right-line"></i>
          </NavLink>
        </div>
      </div>

      <div className="rapid-hydration">
        <div>
          <h2>Rapid Hydration</h2>
          <p>
            Fast. Effective. Instantly refreshing. PRIME Rapid Hydration is your
            go-to solution when you need hydration in overdrive. Formulated with
            a cutting-edge blend of electrolytes, amino acids, vitamins, and
            trace minerals, it’s designed for quick absorption and instant
            impact. Whether you’re bouncing back after intense training,
            powering through a busy day, or recovering from dehydration, PRIME
            Rapid delivers hydration that works fast and lasts. With no sugar,
            no artificial colors, and a refreshing burst of flavor, it's a
            smarter, cleaner way to rehydrate — anytime, anywhere. When seconds
            matter, stay sharp. Stay Rapid. Stay PRIME.
          </p>
          <NavLink to="/products/rapid-hydration">
            VIEW <i class="ri-arrow-right-line"></i>
          </NavLink>
        </div>
        <img src={rapidhydrationbanner} alt="" />
      </div>

      <div className="energy">
        <img src={energybanner} alt="" />
        <div>
          <h2>Energy</h2>
          <p>
            Energy redefined. Focus unlocked. PRIME Energy isn’t your average
            caffeine kick — it’s a precision-formulated fuel for your body and
            mind. With 200mg of clean caffeine, zero sugar, and no crash, PRIME
            Energy delivers sustained energy, sharpened focus, and enhanced
            performance when you need it most. Infused with electrolytes for
            hydration, B vitamins for endurance, and bold, refreshing flavors
            that hit just right, this drink powers your grind — from workouts
            and gaming to long days and late nights. No jitters. No compromises.
            Just pure, elevated energy. Level up with PRIME.
          </p>
          <NavLink to="/products/energy">
            VIEW <i class="ri-arrow-right-line"></i>
          </NavLink>
        </div>
      </div>

      <div className="sticks">
        <img src={sticksbanner} alt="" />
        <div>
          <h2>Sticks</h2>
          <p>
            Hydration on-the-go. Power in your pocket. PRIME Hydration Sticks
            bring the same elite-level formula of our hydration drinks in a
            compact, travel-friendly powder stick — so you can stay fueled
            anywhere, anytime. Just mix with water and experience the refreshing
            burst of electrolytes, 10% coconut water, BCAAs, antioxidants, and
            essential vitamins designed to keep you hydrated, energized, and
            recovered. With zero sugar and only 20 calories per serving, these
            sticks are perfect for workouts, travel, or daily hydration.
            Lightweight, fast-dissolving, and incredibly flavorful — PRIME
            Hydration Sticks are proof that big performance can come in small
            packages.
          </p>
          <NavLink to="/products/sticks">
            VIEW <i class="ri-arrow-right-line"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Products;
