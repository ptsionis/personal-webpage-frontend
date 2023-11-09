import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import NavIcon from "./NavIcon";
import NavItem from "./NavItem";
import SocialLink from "../SocialLink/SocialLink";

import "./Navbar.css";
import navPaths from "../../json/nav.json";
import socials from "../../json/socials.json";

export default function Navbar() {
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);

  const isActiveNavItem = (path) => {
    if (path === "home") {
      return location.pathname === "/";
    } else {
      return location.pathname === `/${path}`;
    }
  };

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav
      className={`navbar-wrapper d-flex flex-column justify-content-center align-items-center p-4${
        openNav ? " open" : ""
      }`}
    >
      <NavIcon openNav={openNav} toggleNav={toggleNav} />
      <ul className="h-100 d-flex flex-column justify-content-center align-items-center list-unstyled m-0">
        {navPaths.map((path) => {
          return (
            <NavItem
              activeNavItem={isActiveNavItem(path)}
              key={path}
              linkPath={path}
              setOpenNav={setOpenNav}
            />
          );
        })}
      </ul>
      <ul className="social-list d-flex justify-content-center align-items-center list-unstyled py-3">
        {socials.map((social) => {
          return (
            <SocialLink key={social.code} code={social.code} url={social.url} svg={social.svg} />
          );
        })}
      </ul>
    </nav>
  );
}
