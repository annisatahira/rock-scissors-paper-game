import React from "react";
import Grid from "@material-ui/core/Grid";
import scissors from "../../public/images/scissor.png";
import paper from "../../public/images/paper.png";
import rock from "../../public/images/rock.png";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("app"));

class ResultModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        contentLabel="Winner Modal"
        onRequestClose={this.props.handleCloseModal}
        closeTimeoutMS={200}
        className="modal"
      >
        <div>
          <Grid container spacing={1}>
            <Grid container item xs={12} justify="center" spacing={1}>
              <h1 className="modal__result">{this.props.message}</h1>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid container item xs={5} justify="center" spacing={1}>
              <Grid container item xs={12} justify="center" spacing={1}>
                <h1>Player One</h1>
              </Grid>
              <Grid container item xs={12} justify="center" spacing={1}>
                <img
                  src={
                    this.props.weaponChoiceP1 === "rock"
                      ? rock
                      : this.props.weaponChoiceP1 === "scissors"
                      ? scissors
                      : paper
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={2} justify="center" spacing={1}>
              <h1>VS</h1>
            </Grid>
            <Grid container item xs={5} justify="center" spacing={1}>
              <Grid container item xs={12} justify="center" spacing={1}>
                <h1>Player Two</h1>
              </Grid>
              <Grid container item xs={12} justify="center" spacing={1}>
                <img
                  src={
                    this.props.weaponChoiceP2 === "rock"
                      ? rock
                      : this.props.weaponChoiceP2 === "scissors"
                      ? scissors
                      : paper
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid container item xs={12} justify="center" spacing={0}>
              <h1 className="text-button" onClick={this.props.handleCloseModal}>
                Okay
              </h1>
            </Grid>
          </Grid>
        </div>
      </Modal>
    );
  }
}

export default ResultModal;
