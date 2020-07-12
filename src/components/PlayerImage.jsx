import React from "react";
import scissors from "../../public/images/scissor.png";
import paper from "../../public/images/paper.png";
import rock from "../../public/images/rock.png";

const PlayerImage = (props) => (
  <div>
    <img
      className="player-image"
      src={
        props.image === "rock"
          ? rock
          : props.image === "scissors"
          ? scissors
          : paper
      }
    />
  </div>
);

export default PlayerImage;
