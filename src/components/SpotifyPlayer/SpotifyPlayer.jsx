import React from "react";
import { Fade } from "react-awesome-reveal";

import "./SpotifyPlayer.css";

export default function SpotifyPlayer() {
  return (
    <Fade duration={1500} direction="up">
      <iframe
        className="spotify-embed mt-3"
        src="https://open.spotify.com/embed/playlist/6aTz7YX8U0OmNImQfT98g4?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </Fade>
  );
}
