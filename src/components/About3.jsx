/* eslint-disable no-unused-vars */
import React from "react";
import Gym from "../assets/gym.png";

function About3() {
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-200">
      <div className="container m-10">
        <div data-aos="fade-up" data-aos-once="false" className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          {/* img sec */}
          <div className="pr-6">
            <img
              src={Gym}
              alt=""
              className="w-[300px] h-[300px] sm:scale-125 max-h-[400px] drop-shadow-md mx-auto"
            />
          </div>
          {/* text sec */}
          <div className="space-y-8 pl-20">
            <div className="flex items-center gap-4 p-8">
              <div className="text-primary text-7xl ">
                <h1 data-aos="fade-up" data-aos-delay="300" className="font-bold">03</h1>
              </div>
              <div>
                <p data-aos="fade-up" data-aos-delay="300" className="text-primary">Global fitness</p>
                <h1 data-aos="fade-up" data-aos-delay="300" className="text-2xl sm:text-4xl font-bold dark:text-white">
                  OUR VALUES
                </h1>
              </div>
            </div>
            <div className="">
              <p data-aos="fade-up" data-aos-delay="300" className="dark:text-white pl-10 pr-28">
                We live and breathe our six core values and six brand promises{" "}
                <br /> — they serve as the backbone of our operations and speak
                of our <br />
                commitment to improving the lives of our customers, supporting
                our
                <br /> team, championing industry standards, and driving our
                business with
                <br /> integrity and passion.
              </p>
            </div>
            <button data-aos="fade-up" data-aos-delay="700" className="outline-btn ml-8">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
