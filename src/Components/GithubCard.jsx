import React from "react";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles(theme => ({
  root: {
    width: "fit-content",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    "& svg": {
      margin: theme.spacing(1.5)
    },
    "& hr": {
      margin: theme.spacing(0, 0.5)
    }
  }
}));

const GithubCard = ({ info }) => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" className={classes.root}>
      <GitHubIcon fontSize="large" />
      <Divider orientation="vertical" flexItem />
      <span title="Repositories">
        <Badge badgeContent={info.public_repos} color="secondary">
          <CodeIcon fontSize="large" />
        </Badge>
      </span>
      <span title="Followers">
        <Badge badgeContent={info.followers} color="primary">
          <StarBorderIcon fontSize="large" />
        </Badge>
      </span>
      <span title="Following">
        <Badge badgeContent={info.following} color="error">
          <StarIcon fontSize="large" />
        </Badge>
      </span>
    </Grid>
  );
};

export default GithubCard;
