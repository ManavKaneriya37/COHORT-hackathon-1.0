import React from "react";
import "./About.css"
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <NavLink to={-1} className="backArrow">
        <div>
          <i class="ri-arrow-left-line"></i>
        </div>
      </NavLink>
      <h1>ABOUT</h1>
      <img src="src\Assets\About\logan-paul-ksi-drinks-red-bg.jpg" alt="" />
      <p>
        We created PRIME to showcase what happens when rivals come together as
        brothers and business partners to fill the void where great taste meets
        function. We dropped our first product, PRIME Hydration in 2022 and
        since then, we've continued to work countless hours to expand in
        retailers, reach new markets and formulate new products we know you'll
        love. We've been humbled by the process of creating a real brand &
        surpassing some of the biggest beverage companies in the world. As
        underdogs, we always cherish the opportunity to show the world what's
        possible. Now that we're both fighting for the same team, we truly
        believe the sky is the limit.
      </p>
      <h4> ⁃ KSI & Logan Paul</h4>
    </div>
  );
};

export default About;
