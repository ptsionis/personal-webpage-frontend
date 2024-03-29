import React from "react";
import { Link } from "react-router-dom";

import "./LearnMore.css";

const LearnMore = ({ path, text }) => {
  return (
    <Link
      className="learn-more hover mb-5 px-5 py-3 mt-5"
      to={path}
      title="Learn More"
    >
      {text}
    </Link>
  );
};

export default LearnMore;
