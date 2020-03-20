import React, { Component } from "react";
import companies from "../shared/companies.json";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import sourcesense from "../Images/sourcesense.png";

const getData = companies;

const CardList = props => (
  <React.Fragment>
    {getData.map(profile => (
      <CardExperience {...profile} />
    ))}
  </React.Fragment>
);

class CardExperience extends React.Component {
  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        maxWidth: 345
      },
      media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
      },
      expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shortest
        })
      },
      expandOpen: {
        transform: "rotate(180deg)"
      },
      avatar: {
        backgroundColor: red[500]
      }
    }));
    const profile = this.props;

    return (
      <Grid md={3} item>
        <Card className={useStyles.root}>
          <CardHeader
            avatar={<Avatar alt={profile.company} src={profile.avatar} />}
            title={profile.company}
            subheader={profile.date}
          />
          <CardMedia
            title={profile.company}
            className={useStyles.media}
            image={profile.coverImage}
            component="img"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {profile.jobTitle}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <CustomizedDialogs currentJob={profile} />
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

//modale
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

function CustomizedDialogs({ currentJob }) {
  console.log("qui", currentJob);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = props => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {currentJob.company}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {currentJob.jobDetails} <br /> <b>Skills: {currentJob.skills}</b>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
//modale

export default class CompaniesCard extends Component {
  render() {
    return <CardList />;
  }
}
