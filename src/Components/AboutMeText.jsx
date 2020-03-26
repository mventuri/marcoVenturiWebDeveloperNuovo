import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Expertise from "./Expertise";
import AboutMeIntro from "./AboutMeIntro";
import ChipsArrayCert from "./ChipsCertification";
import mappa from "../Images/maps/mappa.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function AboutMeText() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AboutMeIntro />
            </Grid>
            <Grid item md={6}>
              <h1>Top Skills</h1>
              <Expertise />
            </Grid>
            <Grid item md={6}>
              <h1>Certifications</h1>
              <ChipsArrayCert />
            </Grid>
            <Grid item xs={12}>
              <h1>Countries I've been working or did business with</h1>
              <i className="countries">(...in blue)</i>
            </Grid>
            <Grid item={12}>
              <br />
              <CardMedia image={mappa} component="img" width="600" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default AboutMeText;
