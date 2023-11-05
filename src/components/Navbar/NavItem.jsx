import React from "react";
import { Link } from "react-router-dom";

import "./NavItem.css";

export default function NavItem({ activeNavItem, linkPath, setOpenNav }) {
  return (
    <li className="my-3">
      <Link
        className={`nav-li mx-2 p-2 rounded fw-bold text-center ${
          activeNavItem ? "active" : ""
        }`}
        title={linkPath.toUpperCase()}
        to={linkPath === `home` ? `/` : `/${linkPath}`}
        onClick={() => setOpenNav()}
      >
        {linkPath.toUpperCase()}
      </Link>
    </li>
  );
}
