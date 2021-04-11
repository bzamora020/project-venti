import React from "react";

import { Button } from "@material-ui/core";
import littleIcon from "./littleIcon.png"
import Popup from "../Home/Popup";
import { useState } from 'react';

import "./UserPost.css";


function UserPost (props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
  <div>
    <Button onClick= {() => setButtonPopup(true)} id = "messageCard">
      <div id="testing">
        <img id = "liIcon" src = {littleIcon} />
        <p id = "postTittle">{props.title}</p>
        <p id="message">{props.content}</p>
      </div>
    </Button>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <h3> Testing popup</h3>
    </Popup>
  </div>
  )
}

export default UserPost;
