import React from "react";
import uuid from 'uuid';
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import certifications from "../shared/certifications";
import Avatar from "@material-ui/core/Avatar";

const getData = certifications;
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

export default function ChipsArrayCert() {
  const classes = useStyles();
  const [chipData] = React.useState(getData);

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        return (
          <Chip
            key={uuid()}
            avatar={<Avatar>{data.initial}</Avatar>}
            label={data.certification}
            color="primary"
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}
