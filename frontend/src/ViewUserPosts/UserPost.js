import React from "react";

import { Button } from "@material-ui/core";
import littleIcon from "./littleIcon.png";
import Popup from "../Home/Popup";
import { useState } from "react";

import "./UserPost.css";

function UserPost(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <Button onClick={() => setButtonPopup(true)} id="messageCard">
        <div id="testing">
          <img id="liIcon" src={littleIcon} />
          <p id="postTittle">{props.title}</p>
          <p id="message">{props.content}</p>
        </div>
      </Button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div id="shadows">
          <div id="popups">
            <p id="popTittle">{props.title}</p>
            <p id="popMessage">{props.content}</p>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default UserPost;
