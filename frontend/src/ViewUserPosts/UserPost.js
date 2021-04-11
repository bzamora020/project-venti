import React from "react";

import { Button } from "@material-ui/core";

import "./UserPost.css";

class UserPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeData: null,
    };
  }

  componentDidMount() {
    fetch("/api/user/getHome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          homeData: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <Button>
          <div id="testing">
            <p>{this.props.header}</p>
            <p id="message">{this.props.comment}</p>
          </div>
        </Button>
      </div>
    );
  }
}

export default UserPost;
