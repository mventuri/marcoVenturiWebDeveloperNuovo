import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";

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
  console.log(props);
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

function CustomizedDialogs({ currentJob }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Button color="primary" onClick={() => setOpen(!open)}>
        Details
      </Button>
      <Dialog
        onClose={() => setOpen(!open)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => setOpen(!open)}
        >
          <div>
            <img
              src={currentJob.avatar}
              alt=""
              style={{
                width: "40px",
                height: "40px",
                top: "1px",
                position: "relative"
              }}
            />
            <span style={{ position: "absolute", top: "23px", left: "70px" }}>
              {currentJob.company}
            </span>
          </div>
        </DialogTitle>
        <DialogContent className="modalText" dividers>
          <Typography gutterBottom>{currentJob.jobDetails}</Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomizedDialogs;
