import React from "react";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("app"));

const WinnerModal = (props) => (
  // <Modal
  //   isOpen={true}
  //   contentLabel="Winner Modal"
  //   onRequestClose={props.handlePlayAgain}
  //   closeTimeoutMS={200}
  //   className="modal"
  // >
  //   <h1>{props.message}</h1>
  //   <h2>{props.winner}</h2>
  //   <button onClick={props.handlePlayAgain}>Play Again</button>

  // </Modal>
  <div>
    <h1>{props.message}</h1>
    <h2>{props.winner}</h2>
    <button onClick={props.handlePlayAgain}>Play Again</button>
  </div>
);

export default WinnerModal;
