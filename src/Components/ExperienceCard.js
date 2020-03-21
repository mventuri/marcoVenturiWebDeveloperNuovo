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
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CustomizedDialogs from "./CustomizedDialogs";

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
              <h4>{profile.jobTitle}</h4>
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

export default class CompaniesCard extends Component {
  render() {
    return <CardList />;
  }
}
