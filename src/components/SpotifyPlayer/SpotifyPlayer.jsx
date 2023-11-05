import React, { useEffect } from "react";
import "./SpotifyPlayer.css";

export default function SpotifyPlayer() {

  return (
    <iframe
      className="spotify-embed mt-3"
      src="https://open.spotify.com/embed/playlist/0Sdb5BILPZauc1bDm74UPT?utm_source=generator&theme=0"
      width="100%"
      height="152px"
    ></iframe>
  );
}
