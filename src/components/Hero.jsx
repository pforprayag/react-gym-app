/* eslint-disable no-unused-vars */
import React from "react";
// eslint-disable-next-line no-unused-vars
import Img from "../assets/hero.jpg";

const BgStyle = {
  backgroundImage: `url(${Img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

function Hero() {
  return (
    <div style={BgStyle} className="bg-white dark:bg-black duration-200 ">
      <div className="dark:bg-black/40 bg-white/30 duration-200">
        <div className="container min-h-[420px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5 text-white">
            
            <h1 data-aos="fade-up" data className="dark:text-white text-black text-5xl md:text-7xl font-bold">
              Your Fitness Journey Starts...
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="dark:text-white text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <button data-aos="fade-up" data-aos-delay="600" className="primary-btn">Get start</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
