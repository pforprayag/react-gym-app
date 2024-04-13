/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  // console.log(element);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun className="text-2xl" onClick={() => setTheme("light")} />
      ) : (
        <BiSolidMoon className="text-2xl" onClick={() => setTheme("dark")} />
      )}
    </>
  );
}

export default DarkMode;
