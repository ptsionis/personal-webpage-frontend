import React from "react";

import "./Name.css";

const Name = () => {
  return (
    <>
      <div className="name mb-5">
        <h1 className="page-header">PANAGIOTIS TSIONIS</h1>
      </div>
      <svg className="name-svg">
        <filter id="fire">
          <feTurbulence
            id="turbulence"
            baseFrequency="0.1 0.1"
            numOctaves="2"
            seed="3"
          >
            <animate
              attributeName="baseFrequency"
              dur="10s"
              values="0.1 0.1; 0.16 0.2"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="10"></feDisplacementMap>
        </filter>
      </svg>
    </>
  );
};

export default Name;
