import React, { useEffect, useState } from "react";

import "./Cursor.css";

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePos = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePos);
    window.addEventListener("scroll", updateMousePos);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
      window.removeEventListener("scroll", updateMousePos);
    };
  }, []);

  const isMobile = window.innerWidth <= 1024;

  if (isMobile) return null;

  return (
    <div
      className="cursor"
      style={{ left: mousePos.x + "px", top: mousePos.y + "px" }}
    ></div>
  );
};

export default Cursor;
