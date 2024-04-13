/* eslint-disable no-unused-vars */
import React from "react";

function Contact() {
  return (
    <div className="dark:text-white my-14">
      <div className="container dark:bg-dark bg-gray-200 py-16  ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
          <div className="col-span-2 ">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-black/80 dark:text-white p-8">
              <span data-aos="fade-up"  className="text-primary">Sweat, Sacrifice, Success.</span>
              When it comes
              <br /> to eating right and exercising, there is no
              <br /> I will start tomorrow
            </h1>
          </div>
          <div className="text-center grid place-items-center">
            <button data-aos="fade-up" data-aos-delay="500" className="primary-btn">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
