import React from "react";

import { Button } from "@material-ui/core";
import littleIcon from "./littleIcon.png"

import "./UserPost.css";


const UserPost = (props) => (
  <div>
    <Button id = "messageCard">
      <div id="testing">
        <img id = "liIcon" src = {littleIcon} />
        <p id = "postTittle">{props.title}</p>
        <p id="message">{props.content}</p>
      </div>
    </Button>
  </div>
)

export default UserPost;
