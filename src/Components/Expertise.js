import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import expertise from "../shared/expertise";
import Avatar from "@material-ui/core/Avatar";

const getData = expertise;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData] = React.useState(getData);

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        return (
          <Chip
            key={data.skills}
            avatar={<Avatar>{data.initial}</Avatar>}
            label={data.skills}
            color="secondary"
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}
