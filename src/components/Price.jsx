/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Prices = [
  {
    id: 1,
    name: "Gold",
    price: "₹6999",
    duration: "3 months",
    description: [
      "Monthly access to fitness services",
      "Training sessions on demand",
      "Personal training sessions on demand",
      "Live training sessions on demand",
    ],
    aosDelay: "300",
  },
  {
    id: 2,
    name: "Silver",
    price: "₹9999",
    duration: "6 months",
    description: [
      "Monthly access to fitness services",
      "Training sessions on demand",
      "Personal training sessions on demand",
      "Live training sessions on demand",
    ],
    aosDelay: "500",
  },
  {
    id: 3,
    name: "Platinum ",
    price: "₹12999",
    duration: "12 months",
    description: [
      "Monthly access to fitness services",
      "Training sessions on demand",
      "Personal training sessions on demand",
      "Live training sessions on demand",
    ],
    aosDelay: "700",
  },
];

function Price() {
  return (
    <div className="my-14 py-12 ">
      <div className="container">
        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-primary text-center ">
          🪙Our Prices🪙
        </h1>
        {/* card sec */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {Prices.map((price) => (
            // eslint-disable-next-line react/jsx-key
            <div
              key={price.id} data-aos="fade-up" data-aos-delay={price.aosDelay}
              className="space-y-3 text-center dark:bg-dark bg-gray-200 dark:text-white text-black p-8 m-2 sm:py-16 rounded-lg group shadow-xl hover:bg-primary/30 dark:hover:bg-primary/50 duration-200"
            >
              <h1 className="text-3xl font-bold">{price.name}</h1>
              <h1 className="text-4xl font-bold text-primary">{price.price}</h1>
              <p className="text-2xl font-semibold py-3">
                Duration : {price.duration}
              </p>
              {price.description.map((desc) => (
                <p>{desc}</p>
              ))}
              <button className="primary-btn">Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Price;
