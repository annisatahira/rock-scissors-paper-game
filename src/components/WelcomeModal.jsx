import React from "react";
import Modal from "react-modal";
import Grid from "@material-ui/core/Grid";
import Choice from "./Choice.jsx";

Modal.setAppElement(document.getElementById("app"));

const weapons = ["rock", "scissors", "paper"];
class WelcomeModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.welcomeModal}
        contentLabel="Winner Modal"
        onRequestClose={this.props.handleCloseWelcome}
        closeTimeoutMS={200}
        className="modal"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Rock - Scissor - Paper Game</h1>
            <Grid container justify="center" spacing={4}>
              {weapons.map((weapon) => (
                <Choice
                  key={weapon}
                  weapon={weapon}
                  handleSelectWeapon={() => this.handleSelectWeaponP1(weapon)}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
        <h1
          className="text-button__welcome"
          onClick={this.props.handleCloseWelcome}
        >
          Start Game
        </h1>
      </Modal>
    );
  }
}

export default WelcomeModal;
