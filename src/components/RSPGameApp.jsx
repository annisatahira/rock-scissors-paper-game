import React from "react";
import Header from "./Header.jsx";
import PlayerImage from "./PlayerImage.jsx";
import Choice from "./Choice.jsx";
import ResultModal from "./ResultModal.jsx";
import WinnerModal from "./WinnerModal.jsx";

import Grid from "@material-ui/core/Grid";

const weapons = ["rock", "scissors", "paper"];

class RSPGameApp extends React.Component {
  state = {
    weaponP1: undefined,
    weaponP2: undefined,
    weaponResultP1: undefined,
    weaponResultP2: undefined,
    scoreP1: 0,
    scoreP2: 0,
    message: "",
    winner: "",
  };

  handleSelectWeaponP1 = (weapon) => {
    this.setState({
      weaponP1: weapon,
    });
    clearTimeout(this.timerP1);
  };

  handleSelectWeaponP2 = (weapon) => {
    this.setState({
      weaponP2: weapon,
    });
    clearTimeout(this.timerP2);
  };

  handleLoadingGame = () => {
    let counter = 0;

    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        weaponResultP1: weapons[Math.floor(Math.random() * weapons.length)],
        weaponResultP2: weapons[Math.floor(Math.random() * weapons.length)],
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          weaponResultP1: this.state.weaponP1,
          weaponResultP2: this.state.weaponP2,
        });
        this.handleRunGame();
      }
    }, 100);
  };

  handleRunGame = () => {
    const { weaponP1, weaponP2 } = this.state;

    if (weaponP1 === weaponP2) {
      this.setState(() => ({
        message: "Oops it's a Tie!",
      }));
    } else if (
      (weaponP1 === "rock" && weaponP2 === "scissors") ||
      (weaponP1 === "scissors" && weaponP2 === "paper") ||
      (weaponP1 === "paper" && weaponP2 === "rock")
    ) {
      this.setState(() => ({
        message: "Player One Win",
      }));
      this.setState((prevCount) => ({
        scoreP1: prevCount.scoreP1 + 1,
      }));
    } else {
      this.setState(() => ({
        message: "Player Two Win",
      }));
      this.setState((prevCount) => ({
        scoreP2: prevCount.scoreP2 + 1,
      }));
    }

    this.handleRemoveWeapon();
    setTimeout(() => {
      this.handleTimeOutP1();
    }, 3000);

    setTimeout(() => {
      this.handleTimeOutP2();
    }, 3000);

    this.handleFinalWinner();
  };

  handleRemoveWeapon = () => {
    this.setState(() => ({
      weaponP1: undefined,
      weaponP2: undefined,
    }));
    console.log(this.state.weaponP1);
  };

  handleRemoveScore = () => {
    this.setState(() => ({
      scoreP1: 0,
      scoreP2: 0,
    }));
  };

  handleFinalWinner = () => {
    let count = 0;
    let countP1 = this.state.scoreP1;
    let countP2 = this.state.scoreP2;

    count = countP1 + countP2;
    console.log(count);

    if (countP1 === 3) {
      this.setState(() => ({
        winner: "Player One Win Game",
      }));
    } else if (countP2 === 3) {
      this.setState(() => ({
        winner: "Player Two Win The Game",
      }));
    }

    if (count === 5 || countP1 === 3 || countP1 === 3) {
      this.handlePlayAgain();
    }
  };

  handlePlayAgain = () => {
    this.setState(() => ({
      weaponP1: undefined,
      weaponP2: undefined,
      weaponResultP1: undefined,
      weaponResultP2: undefined,
      scoreP1: 0,
      scoreP2: 0,
      message: "",
      winner: "",
    }));

    setTimeout(() => {
      this.handleTimeOutP1();
    }, 3000);

    setTimeout(() => {
      this.handleTimeOutP2();
    }, 3000);
  };

  handleTimeOutP1 = () => {
    if (this.state.weaponP1 === undefined) {
      this.setState(() => ({
        weaponP1: weapons[Math.floor(Math.random() * weapons.length)],
      }));
    }
  };

  handleTimeOutP2 = () => {
    if (this.state.weaponP2 === undefined) {
      this.setState(() => ({
        weaponP2: weapons[Math.floor(Math.random() * weapons.length)],
      }));
    }
  };

  timerP1 = setTimeout(() => {
    this.handleTimeOutP1();
  }, 3000);

  timerP2 = setTimeout(() => {
    this.handleTimeOutP2();
  }, 3000);

  render() {
    const {
      weaponP1,
      weaponP2,
      scoreP1,
      scoreP2,
      weaponResultP1,
      weaponResultP2,
    } = this.state;

    return (
      <div className="container">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6} className="player">
              {/* Player One */}
              <Header playerName={"Player One"} totalWin={scoreP1} />

              {/* <PlayerImage image={weaponP1} /> */}
              <Grid item xs={12}>
                <Grid container justify="center" spacing={4}>
                  {weapons.map((weapon) => (
                    <Choice
                      key={weapon}
                      weapon={weapon}
                      handleSelectWeapon={() =>
                        this.handleSelectWeaponP1(weapon)
                      }
                    />
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              {/* Player Two */}
              <Header playerName={"Player Two"} totalWin={scoreP2} />
              {/* <PlayerImage image={weaponP2} /> */}
              <Grid item xs={12}>
                <Grid container justify="center" spacing={4}>
                  {weapons.map((weapon) => (
                    <Choice
                      key={weapon}
                      weapon={weapon}
                      handleSelectWeapon={() =>
                        this.handleSelectWeaponP2(weapon)
                      }
                    />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid container item xs={12} justify="center" spacing={1}>
              {weaponP1 !== undefined && weaponP2 !== undefined && (
                <button onClick={this.handleLoadingGame}>Run Winner</button>
              )}
            </Grid>
          </Grid>
        </div>

        {/* <WinnerModal
          message={this.state.message}
          winner={this.state.winner}
          handlePlayAgain={this.handlePlayAgain}
        />
        <ResultModal
          weaponChoiceP1={weaponResultP1}
          weaponChoiceP2={weaponResultP2}
        /> */}
      </div>
    );
  }
}

export default RSPGameApp;
