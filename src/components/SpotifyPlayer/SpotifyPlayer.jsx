import React from "react";
import { Fade } from "react-awesome-reveal";

import "./SpotifyPlayer.css";

export default function SpotifyPlayer() {
  return (
    <Fade duration={1500} direction="up">
      <iframe
        className="spotify-embed mt-3"
        src="https://open.spotify.com/embed/playlist/0Sdb5BILPZauc1bDm74UPT?utm_source=generator&theme=0"
        width="100%"
        height="152px"
      ></iframe>
    </Fade>
  );
}
