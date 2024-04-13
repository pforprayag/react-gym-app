/* eslint-disable no-unused-vars */
import React from "react";
import Gym from "../assets/gym.png";

function About() {
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-200">
      <div className="container m-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          {/* img sec */}
          <div data-aos="fade-up" data-aos-once="false" className="pr-12">
            <img
              src={Gym}
              alt=""
              className="w-[300px] h-[300px] sm:scale-125 max-h-[400px] drop-shadow-md mx-auto"
            />
          </div>
          {/* text sec */}
          <div className="space-y-8 pt-4 pl-24 pr-20">
            <div className="flex items-center gap-4">
              <div className="text-primary text-7xl ">
                <h1 data-aos="fade-up" data-aos-delay="300" className="font-bold">01</h1>
              </div>
              <div>
                <p data-aos="fade-up" data-aos-delay="300" className="text-primary">Global fitness</p>
                <h1 data-aos="fade-up" data-aos-delay="300" className="text-2xl sm:text-4xl font-bold dark:text-white">
                  ABOUT US
                </h1>
              </div>
            </div>
            <div>
              <p data-aos="fade-up" data-aos-delay="300" className="dark:text-white">
                At Gym and Fitness, we believe that fitness and wellbeing are{" "}
                <br />
                the cornerstones of a full and vibrant life.
                <br /> Our real success lies in the thousands of customers we've{" "}
                <br />
                empowered to live longer, more joyful, and healthier lives.
              </p>
            </div>
            <button data-aos="fade-up" data-aos-delay="700" className="outline-btn ">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
