import React from "react";
import { Link } from "react-router-dom";

import SpotifyPlayer from "../../components/SpotifyPlayer/SpotifyPlayer";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="wrapper">
      <main className="container d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="page-header">404</h1>
        <Link className="back-to-home h6 mx-2 p-2 rounded text-decoration-none" to={"/"}>
          Back to Home
        </Link>
        <SpotifyPlayer />
      </main>
    </div>
  );
};

export default NotFound;
