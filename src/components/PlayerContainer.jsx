import React from "react";
import Header from "./Header.jsx";
import PlayerImage from "./PlayerImage.jsx";
import Choice from "./Choice.jsx";

const weapons = ["rock", "scissor", "paper"];

class PlayerContainer extends React.Component {
  state = {
    selectedChoice: undefined,
  };

  handleSelectWeapon = (weapon) => {
    this.setState({
      selectedChoice: weapon,
    });
  };

  render() {
    return (
      <div>
        <Header playerName={this.props.playerName} totalWin={this.state.wins} />
        <PlayerImage image={this.state.selectedChoice} />
        {weapons.map((weapon) => (
          <Choice
            key={weapon}
            weapon={weapon}
            handleSelectWeapon={() => this.handleSelectWeapon(weapon)}
          />
        ))}
        <button onClick={this.props.handleWinner}>tes</button>
      </div>
    );
  }
}

PlayerContainer.defaultProps = {
  wins: 0,
};

export default PlayerContainer;
