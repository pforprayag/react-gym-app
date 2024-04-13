// eslint-disable-next-line no-unused-vars
import React from "react";
import Playstore from "../assets/play_store.png";
import Appstore from "../assets/app_store.png";
import Dumbell from "../assets/dumbell.jpg";

const dumbellImg = {
  backgroundImage: `url(${Dumbell})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};
function Banner() {
  return (
    <div>
      <div className="container text-white">
        <div
          style={dumbellImg}
          className="min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl "
        >
          <div>
            <div className="max-w-xl mx-auto space-y-6">
              <h1 data-aos="fade-up" className="text-2xl text-center sm:text-4xl font-semibold pt-8">
                Download the app
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="text-center sm:px-20 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                reprehenderit adipisci aliquam minima. Cumque, tempora?
                Distinctio recusandae officia culpa nesciunt?
              </p>
              <div className="flex justify-center items-center gap-5">
                <a  data-aos="fade-up" data-aos-delay="500" href="#">
                  <img
                    src={Appstore}
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    alt=""
                  />
                </a>
                <a  data-aos="fade-up" data-aos-delay="700" href="#">
                  <img
                    src={Playstore}
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
