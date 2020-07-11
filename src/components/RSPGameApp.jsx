import React from "react";
import Header from "./Header.jsx";
import PlayerImage from "./PlayerImage.jsx";
import Choice from "./Choice.jsx";

const weapons = ["rock", "scissor", "paper"];

class RSPGameApp extends React.Component {
  state = {
    weaponPlayerOne: undefined,
    weaponPlayerTwo: undefined,
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

  handleWinner = () => {
    const { weaponPlayerOne, weaponPlayerTwo } = this.state;

    if (weaponPlayerOne === weaponPlayerTwo) {
      console.log("Oops it's a Tie!");
    } else if (
      (weaponPlayerOne === "rock" && weaponPlayerTwo === "scissors") ||
      (weaponPlayerOne === "scissors" && weaponPlayerTwo === "paper") ||
      (weaponPlayerOne === "paper" && weaponPlayerTwo === "rock")
    ) {
      console.log("Player One Win");
    } else {
      console.log("Player Two Win");
    }
  };

  tes = () => {
    console.log(this.state.weaponPlayerOne);
  };

  render() {
    return (
      <div>
        {/* Player One */}
        <Header playerName={this.props.playerName} totalWin={this.state.wins} />
        <PlayerImage image={this.state.weaponPlayerOne} />
        {weapons.map((weapon) => (
          <Choice
            key={weapon}
            weapon={weapon}
            handleSelectWeapon={() => this.handleSelectWeaponPlayerOne(weapon)}
          />
        ))}

        {/* Player Two */}
        <Header playerName={this.props.playerName} totalWin={this.state.wins} />
        <PlayerImage image={this.state.weaponPlayerTwo} />
        {weapons.map((weapon) => (
          <Choice
            key={weapon}
            weapon={weapon}
            handleSelectWeapon={() => this.handleSelectWeaponPlayerTwo(weapon)}
          />
        ))}
        <button onClick={this.handleWinner}>Run</button>
      </div>
    );
  }
}

RSPGameApp.defaultProps = {
  wins: 0,
};

export default RSPGameApp;
