import React from "react";
import Grid from "@material-ui/core/Grid";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h1>{this.props.playerName}</h1>
          </Grid>
          <Grid item xs={4}>
            <h2>WIN : {this.props.totalWin}</h2>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Header;
