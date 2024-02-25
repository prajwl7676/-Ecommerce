import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import hero_image from "../../assets/hero_image.png";
import "../hero/hero.css";
import arrow from "../../assets/arrow.png"

const Hero = () => {
  return (
    <>
      <div className="hero container-fluid">
        <div className="row h-100">
          <div className="hero-left col-6">
            <p>NEW ARRIVALS ONLY</p>
            <div className="hand-icon">
              <h2>new </h2>
              <img src={hand_icon} />
            </div>
            <h2>collections</h2>
            <h2>for everyone</h2>
            <button className="btn btn-danger ">Latest Collection <img src={arrow} className="pl-4"/></button>
          </div>
          <div className="hero-right col-6">
            <img src={hero_image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
