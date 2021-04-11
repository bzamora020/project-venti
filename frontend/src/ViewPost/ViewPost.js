import React from "react";
import "./ViewPost.css";
import heart from "./heart2.png";
import upArrow from "./arrowUp.png";
import downArrow from "./arrowDown.png";

import Navbar from "../Navbar/Navbar";
import { Button } from "@material-ui/core";
let title = "Be Kind To Others!";

function ViewPost() {
  return (
    <div>
      <Navbar title={title} />
      <Button id = "upArr">
        <img src={upArrow} />
      </Button>
      <div className="box">
        <div className="topBox">
          <h2 className="mainTittle" style={{ color: "white" }}>
            RandomUser:
          </h2>
          <h2 className="mainTitle"> Mr Stark I am not feeling so good</h2>
        </div>
        <p className="blog">Hello there, this is some text in a text area </p>
        <label id="labelThing">Comment:</label>
        <br></br>
        <div id="comment">
          <textarea id="textBox" type="text" />
          <Button id="heartButton">
            <img src={heart} />
          </Button>
        </div>
      </div>
      <Button id = "doArr">
        <img src={downArrow} />
      </Button>
    </div>
  );
}

export default ViewPost;
