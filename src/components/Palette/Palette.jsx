import React, { useState, useEffect } from "react";

import Bubble from "./Bubble";

import "./Palette.css";

const Palette = () => {
  const [togglePalette, setTogglePalette] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (togglePalette && !event.target.closest(".palette")) {
        setTogglePalette(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [togglePalette]);

  return (
    <div
      className={`palette d-flex flex-column justify-content-center align-items-center mt-5 p-4 ${
        togglePalette ? "open" : ""
      }`}
    >
      <Bubble color="#d0d4d0" />
      <Bubble color="#e90770" />
      <Bubble color="#00c3ff" />
      <Bubble color="#f07807" />
      <Bubble color="#06f512" />
      <Bubble color="#f30808" />
      <div
        className="palette-pop px-3 py-3"
        onClick={() => {
          setTogglePalette(!togglePalette);
        }}
      >
        C
      </div>
    </div>
  );
};

export default Palette;
