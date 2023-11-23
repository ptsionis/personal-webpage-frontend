import React, { useEffect } from "react";

import "./SocialLink.css";

export default function SocialLink({code, url, svg}) {
  useEffect(() => {
    document.getElementById(`svg-${code}`).innerHTML = svg;
  } ,[]);

  return (
    <li className="social-link-wrapper mx-2 p-2 rounded hover">
      <a className="social-link" href={url} target="_blank" title={code.toUpperCase()}>
        <div id={`svg-${code}`}></div>
      </a>
    </li>
  );
}
