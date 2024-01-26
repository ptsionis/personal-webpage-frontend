import React from "react";
import { Fade } from "react-awesome-reveal";

import "./SpotifyPlayer.css";

export default function SpotifyPlayer() {
  return (
    <iframe
      className="spotify-embed mt-4"
      src="https://open.spotify.com/embed/playlist/6aTz7YX8U0OmNImQfT98g4?utm_source=generator&theme=0"
      width="90%"
      height="152"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
