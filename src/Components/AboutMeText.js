import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import aboutMe from "../shared/aboutMe";
import Expertise from "./Expertise";
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

const data = aboutMe;

export default function AboutMeText() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography>
                <h1>Top Skills</h1>
              </Typography>
              <Expertise />
            </Grid>
            <Grid item md={6}>
              <Typography>
                <h1>Certifications</h1>
              </Typography>
              <ChipsArrayCert />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <h1>Countries I've been working or made business with</h1>
                <i className="countries">(...in blue)</i>
              </Typography>
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
