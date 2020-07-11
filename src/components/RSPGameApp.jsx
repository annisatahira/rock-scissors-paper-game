import React from "react";
import Header from "./Header.jsx";
import PlayerImage from "./PlayerImage.jsx";
import Choice from "./Choice.jsx";

const weapons = ["rock", "scissors", "paper"];

class RSPGameApp extends React.Component {
  state = {
    weaponPlayerOne: undefined,
    weaponPlayerTwo: undefined,
    scorePlayerOne: 0,
    scorePlayerTwo: 0,
  };

  handleSelectWeaponPlayerOne = (weapon) => {
    this.setState({
      weaponPlayerOne: weapon,
    });
  };

  handleSelectWeaponPlayerTwo = (weapon) => {
    this.setState({
      weaponPlayerTwo: weapon,
    });
  };

  handleCountScore = () => {
    const { weaponPlayerOne, weaponPlayerTwo } = this.state;

    if (weaponPlayerOne === weaponPlayerTwo) {
      console.log("Oops it's a Tie!");
    } else if (
      (weaponPlayerOne === "rock" && weaponPlayerTwo === "scissors") ||
      (weaponPlayerOne === "scissors" && weaponPlayerTwo === "paper") ||
      (weaponPlayerOne === "paper" && weaponPlayerTwo === "rock")
    ) {
      console.log("Player One Win");
      this.setState((prevCount) => ({
        scorePlayerOne: prevCount.scorePlayerOne + 1,
      }));
    } else {
      console.log("Player Two Win");
      this.setState((prevCount) => ({
        scorePlayerTwo: prevCount.scorePlayerTwo + 1,
      }));
    }
  };

  handleFinalWinner = () => {
    let countPlayerOne = this.state.scorePlayerOne;
    let countPlayerTwo = this.state.scorePlayerTwo;

    if (countPlayerOne === 5) {
      alert("Player One Winner");
    } else if (countPlayerTwo === 5) {
      alert("Player Two Winner");
    }
  };

  render() {
    const {
      weaponPlayerOne,
      weaponPlayerTwo,
      scorePlayerOne,
      scorePlayerTwo,
    } = this.state;

    return (
      <div>
        {/* Player One */}
        <Header playerName={this.props.playerName} totalWin={scorePlayerOne} />
        <PlayerImage image={weaponPlayerOne} />
        {weapons.map((weapon) => (
          <Choice
            key={weapon}
            weapon={weapon}
            handleSelectWeapon={() => this.handleSelectWeaponPlayerOne(weapon)}
          />
        ))}

        {/* Player Two */}
        <Header playerName={this.props.playerName} totalWin={scorePlayerTwo} />
        <PlayerImage image={weaponPlayerTwo} />
        {weapons.map((weapon) => (
          <Choice
            key={weapon}
            weapon={weapon}
            handleSelectWeapon={() => this.handleSelectWeaponPlayerTwo(weapon)}
          />
        ))}
        {weaponPlayerOne !== undefined && weaponPlayerTwo !== undefined && (
          <button onClick={this.handleCountScore}>Run</button>
        )}
        <h1>tes{this.handleFinalWinner()}</h1>
      </div>
    );
  }
}

RSPGameApp.defaultProps = {
  wins: 0,
};

export default RSPGameApp;
