import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import experience from "../shared/experience";
import CompaniesCard from "./ExperienceCard";

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

const data = experience;

export default function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12}>
              <Typography>
                <h1>{data.title}</h1>
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={12} spacing={2}>
            <CompaniesCard />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
