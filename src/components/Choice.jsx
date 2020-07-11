import React from "react";

const Choice = (props) => (
  <div>
    <button onClick={props.handleSelectWeapon}>{props.weapon}</button>
  </div>
);

export default Choice;
