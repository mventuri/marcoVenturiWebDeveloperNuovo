import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default class Footer extends Component {
  render() {
    return (
      <Grid container className="myFooter" justify="center" alignItems="center">
        <Grid item xs={12}>
          Made with <FavoriteBorderIcon /> and React by Marco Venturi
        </Grid>
        <Grid item xs={12}>
          Let's keep in touch{" "}
          <a target="_blank" href="https://www.linkedin.com/in/marcoventuri/">
            <LinkedInIcon />
          </a>{" "}
        </Grid>
      </Grid>
    );
  }
}
