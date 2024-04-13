// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/l1.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
// import Darkmode from "./Darkmode";

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

function Footer() {
  return (
    <>
      <nav className=" shadow-md w-full dark:bg-dark dark:text-white">
        <div className="">
          <div className="flex items-center justify-between h-24">
            <div className="flex gap-6 ">
              <img src={Logo} className="ml-8 w-24 mt-2 sm:w-24" alt="gym" />
              <div className="flex gap-6 mt-12">
                <a href="https://www.instagram.com/accounts/login/">
                  <FaInstagram className="text-2xl dark:text-white/60 text-black hover:text-primary dark:hover:text-primary cursor-pointer duration-300" />
                </a>
                <a href="https://www.threads.net/login">
                  <FaThreads className="text-2xl dark:text-white/60 text-black hover:text-primary dark:hover:text-primary cursor-pointer duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/prayag-jadav-75222b246/">
                  <FaLinkedinIn className="text-2xl dark:text-white/60 text-black hover:text-primary dark:hover:text-primary cursor-pointer duration-300" />
                </a>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="sm:flex flex gap-2  dark:text-white text-black font-bold hover:text-primary dark:hover:text-primary duration-200 cursor-pointer ml-20 mr-8">
                <span>
                  <FaPhoneVolume className="text-primary mt-1 " />
                </span>{" "}
                : +91 8758808843
              </h1>
            </div>

            <div className="hidden sm:block">
              <ul className="flex gap-8 mr-10 mt-4">
                {Navlinks.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        className="inline-block text-lg font-semibold hover:text-primary duration-200"
                        href={link.link}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
                {/* <Darkmode /> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Footer;
