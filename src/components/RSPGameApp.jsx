import React from "react";
import Header from "./Header.jsx";
import PlayerImage from "./PlayerImage.jsx";
import Choice from "./Choice.jsx";

class RSPGameApp extends React.Component {
  state = {
    selectedChoice: 0,
  };

  handleSelectWeapon = (weapon) => {
    this.setState({
      selectedChoice: weapon,
    });
  };

  handleCalculateWin = () => {
    this.setState(() => console.log("working!"));
  };

  render() {
    const playerName = "One";
    const weapons = ["rock", "scissor", "paper"];
    return (
      <div>
        <Header playerName={playerName} totalWin={this.state.wins} />
        <PlayerImage image={this.state.selectedChoice} />
        {weapons.map((weapon) => (
          <Choice
            key={weapon}
            weapon={weapon}
            handleSelectWeapon={() => this.handleSelectWeapon(weapon)}
          />
        ))}
      </div>
    );
  }
}

RSPGameApp.defaultProps = {
  wins: 0,
};

export default RSPGameApp;
