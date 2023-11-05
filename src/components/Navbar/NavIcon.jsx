import React from 'react';

import "./NavIcon.css";

export default function NavIcon({openNav, toggleNav}) {
  return (
    <div
        className={`kebab-menu${openNav ? " opened" : ""} rounded`}
        onClick={() => toggleNav()}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
  )
}
