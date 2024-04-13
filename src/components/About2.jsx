/* eslint-disable no-unused-vars */
import React from "react";
import Gym from "../assets/gym.png";

function About2() {
  return (
    <div className="py-14 dark:bg-dark bg-slate-100 duration-200 pl-28">
      <div className="container m-10">
        <div data-aos="fade-up" data-aos-once="false" className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          {/* img sec */}
          <div className="pr-12 lg:hidden mb-6">
            <img
              src={Gym}
              alt=""
              className="w-[300px] h-[300px] sm:scale-125 max-h-[400px] drop-shadow-md mx-auto mr-28 "
            />
          </div>
          {/* text sec */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="text-primary text-7xl ">
                <h1 data-aos="fade-up" data-aos-delay="300" className="font-bold">02</h1>
              </div>
              <div>
                <p data-aos="fade-up" data-aos-delay="300" className="text-primary">Global fitness</p>
                <h1 data-aos="fade-up" data-aos-delay="300" className="text-2xl sm:text-4xl font-bold dark:text-white">
                  OUR CULTURE
                </h1>
              </div>
            </div>
            <div>
              <p data-aos="fade-up" data-aos-delay="300" className="dark:text-white pr-28">
                We know that building a positive culture is incredibly
                important. <br />
                We believe in encouraging, supporting, challenging, learning and
                <br />
                growing to be the best! Our flexible working solutions, gym
                rebates <br />
                and educational opportunities create a positive work/lifebalance{" "}
                <br />
                for all our employees.
              </p>
            </div>
            <button data-aos="fade-up" data-aos-delay="700" className="outline-btn">Get started</button>
          </div>

          {/* img sec */}
          <div className="pr-12 hidden sm:block">
            <img
              src={Gym}
              alt=""
              className="w-[300px] h-[300px] sm:scale-125 max-h-[400px] drop-shadow-md mx-auto mr-28 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
