import React from "react";
import UserPosts from "../ViewUserPosts/UsersPosts";
import "./Home.css";

import { Link, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Popup from "./Popup";

let title = "Venti";

function Home() {
  return (
    <div>
      <div className="container">
        <div>
          <Link className="link" to="/createpost">
            <h1 className="title"> VENTI</h1>
          </Link>
        </div>

        <UserPosts />
        <footer id="foot">
          <Link className="link" to="/home">
            <Button
              id="leftbutton"
              className="button"
              variant="contained"
              color="#FFFFFF"
            >
              Home
            </Button>
          </Link>
          <Link className="link" to="/viewpost">
            <Button
              id="rightbutton"
              className="button"
              variant="contained"
              color="#FFFFFF"
            >
              Show Love ❤
            </Button>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Home;
