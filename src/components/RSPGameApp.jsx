import React from "react";
import Header from "./Header.jsx";
import PlayerImage from "./PlayerImage.jsx";
import Choices from "./Choices.jsx";

class RSPGameApp extends React.Component {
  state = {
    wins: this.props.wins,
  };

  handleCalculateWin = () => {
    this.setState(() => console.log("working!"));
  };

  render() {
    const playerName = "One";
    const image = "hello";
    return (
      <div>
        <Header playerName={playerName} totalWin={this.state.wins} />
        <PlayerImage image={image} />
        <Choices />
      </div>
    );
  }
}

RSPGameApp.defaultProps = {
  wins: 0,
};

export default RSPGameApp;
