import React from "react";
// import Modal from "react-modal";

// Modal.setAppElement(document.getElementById("app"));

class WinnerModal extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <h2>{this.props.winner}</h2>
        <button onClick={this.props.handlePlayAgain}>Play Again</button>
      </div>
    );
  }
}

export default WinnerModal;
