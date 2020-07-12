import React from "react";
import scissors from "../../public/images/scissor.png";
import paper from "../../public/images/paper.png";
import rock from "../../public/images/rock.png";

const Choice = (props) => (
  <div>
    <img
      onClick={props.handleSelectWeapon}
      src={
        props.weapon === "rock"
          ? rock
          : props.weapon === "scissors"
          ? scissors
          : paper
      }
    />
  </div>
);

export default Choice;
