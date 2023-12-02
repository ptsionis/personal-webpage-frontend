import React from "react";

import "./LoadingFallback.css";

const LoadingFallback = () => {
  return (
    <div className="wrapper d-flex justify-content-center align-items-center">
      <span className="loader"></span>
    </div>
  );
};

export default LoadingFallback;
