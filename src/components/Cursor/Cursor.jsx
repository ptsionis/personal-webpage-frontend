import React, { useEffect } from "react";

import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const hoverTargets = document.querySelectorAll(".hover");

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    window.requestAnimationFrame(function mousePos(e) {
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
      window.requestAnimationFrame(mousePos);
    });

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", function (e) {
        cursor.style.transform = "scale(0) translate(-150%, -150%)";
      });

      target.addEventListener("mouseleave", function (e) {
        cursor.style.transform = "scale(1) translate(-50%, -50%)";
      });
    });
  }, []);
  return <div className="cursor"></div>;
};

export default Cursor;
