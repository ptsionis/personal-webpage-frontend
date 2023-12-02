import React from "react";
import { Link } from "react-router-dom";

import "./LearnMore.css";

const LearnMore = ({ path }) => {
  return (
    <Link
      className="learn-more hover mb-5 p-3 mt-5"
      to={path}
      title="LEARN MORE"
    >
      {"LEARN MORE >"}
    </Link>
  );
};

export default LearnMore;
