{
  /* Install react-slick for testmonial */
}
// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";

const Data = [
  {
    id: 1,
    name: "Meera",
    text: "lorem Ips iud in Lore   mollis et soll te  tellus et netus et sapien et sapien et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapien et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapien et",
    img: "https://photos.app.goo.gl/31S3T9nGhimxFJWy8",
  },
  {
    id: 2,
    name: "Prayag",
    text: "lorem Ips iud in Lore   mollis et soll te  tellus et netus et sapien et sapien et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapien et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapien et",
    img: "https://unsplash.com/photos/red-and-white-car-scale-model-vGbkqyCRA1Q",
  },
  {
    id: 3,
    name: "Hitesh",
    text: "lorem Ips iud in Lore   mollis et soll te  tellus et netus et sapien et sapien et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapien et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapien et",
    img: "https://photos.app.goo.gl/UKCruq8Ts5SWsKBx7",
  },
  {
    id: 4,
    name: "Avenger",
    text: "lorem Ips iud in Lore   mollis et soll te  tellus et netus et sapien et sapien et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapien et sapienet et sapienet et sapienet et sapienet et sapienet et sapienet et sapien et",
    img: "https://photos.app.goo.gl/ni6m3ZprpcDBMxbh9",
  },
];
function Testmonial() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlides: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 my-10">
      <div  data-aos="fade-up" data-aos-delay="500" className="container">
        {/* header sec */}
        <div className="text-center">
          <h1 className="text-3xl font-bold dark:text-white">Testimonial</h1>
        </div>
        {/* testimonial sec */}
        <div>
          <Slider {...settings}>
            {Data.map((data) => {
              return (
                <div key={data.id} className="my-6">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/20 ">
                    <div className="mb-4">
                      <img
                        className="rounded-full w-2o h-20"
                        src={data.img}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center gap-5 ">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <p className="text-xl font-bold dark:text-white text-black/80">
                          {data.name}
                        </p>
                      </div>
                    </div>

                    <p className="text-9xl text-gray-500 absolute top-0 right-5 font-serif text-primary/20 ">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testmonial;
