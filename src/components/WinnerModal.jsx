import React from "react";
// import Modal from "react-modal";

// Modal.setAppElement(document.getElementById("app"));

class WinnerModal extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

export default WinnerModal;
