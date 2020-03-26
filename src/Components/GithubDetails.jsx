import React, { Component } from "react";
import GithubCard from "./GithubCard";

class GithubDetails extends Component {
  render() {
    return <GithubCard info={this.state.information} />;
  }

  state = {
    information: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/mventuri")
      .then(res => res.json())
      .then(data => {
        this.setState({ information: data });
      })
      .catch(console.log);
  }
}

export default GithubDetails;
