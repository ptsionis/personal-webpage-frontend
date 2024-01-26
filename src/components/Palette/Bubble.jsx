import React from "react";
import "./Bubble.css";

const Bubble = ({ color }) => {
  const style = { backgroundColor: color };

  return (
    <span
      onClick={() => {
        document.documentElement.style.setProperty("--clr-hover", color);
        document.querySelector(".cursor").style.borderColor = color;
        localStorage.setItem("theme", color);
      }}
      className="color-bubble hover my-2"
      style={style}
    ></span>
  );
};

export default Bubble;
