import React from "react";
// import Modal from "react-modal";

// Modal.setAppElement(document.getElementById("app"));

class ResultModal extends React.Component {
  render() {
    return (
      <div>
        <h1>Player One</h1>
        <h2>Weapon : {this.props.weaponChoiceP1}</h2>
        <span>VS</span>
        <h1>Player Two</h1>
        <h2>Weapon : {this.props.weaponChoiceP2}</h2>
      </div>
    );
  }
}

export default ResultModal;
