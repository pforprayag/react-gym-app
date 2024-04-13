// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/l1.png";
import Darkmode from "./Darkmode";
import { FaPhoneVolume } from "react-icons/fa6";

// eslint-disable-next-line react-refresh/only-export-components
export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

function Navbar() {
  return (
    <>
      <nav className="relative z-10 shadow-md w-full dark:bg-dark dark:text-white">
        <div className="container">
          <div className="flex items-center justify-between h-24">
            <div className="">
              <h1 className="flex gap-2 dark:text-white text-black font-bold hover:text-primary dark:hover:text-primary duration-200 cursor-pointer ml-20">
                <span>
                  <FaPhoneVolume className="text-primary mt-1" />
                </span>{" "}
                : +91 8758808843
              </h1>
            </div>
            <div className="">
              <img
                src={Logo}
                className="ml-[80px] m-2 w-24 sm:w-24 sm:h-24 absolute top-6 right-0 sm:left-1/2 sm:-translate-x-1/2 sm:m-0"
                alt="gym"
              />
            </div>

            <div className="hidden sm:block">
              <ul className="flex gap-8 mr-10 ">
                {Navlinks.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        className="inline-block text-lg font-semibold hover:text-primary duration-200 "
                        href={link.link}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
                <Darkmode />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
