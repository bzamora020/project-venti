import React from "react";

import { Button } from "@material-ui/core";

import "./UserPost.css";


const UserPost = (props) => (
  <div>
    <Button>
      <div id="testing">
        <p>{this.props.title}</p>
        <p id="message">{this.props.comment}</p>
      </div>
    </Button>
  </div>
)

export default UserPost;
