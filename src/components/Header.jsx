import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.playerName}</h1>
        <h2>WIN : {this.props.totalWin}</h2>
      </div>
    );
  }
}

export default Header;
