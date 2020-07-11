import React from "react";
import Choice from "./Choice.jsx";

class Choices extends React.Component {
  state = {
    selectedChoice: 0,
  };

  handleChoice = () => {
    this.setState(() => ({ selectedChoice: choice }));
  };
  render() {
    return (
      <div>
        <Choice />
      </div>
    );
  }
}

export default Choices;
