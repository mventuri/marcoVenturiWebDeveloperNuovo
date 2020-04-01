import React from "react";
import aboutMe from "../shared/aboutMe";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import GithubDetails from "./GithubDetails";

const data = aboutMe;

function AboutMeIntro() {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: theme.spacing(1.5)
    }
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>{data.title}</h1>
      <span className="fuckTypography">
        <Paper className={classes.root}>
          <p>{data.body}</p>
          <GithubDetails />
        </Paper>
      </span>
    </React.Fragment>
  );
}

export default AboutMeIntro;
