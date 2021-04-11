import React from "react";
import "./ViewPost.css";
import heart2 from "./heart2.png";
import upArrow from "./arrowUp.png";
import downArrow from "./arrowDown.png";

import { Link, Route } from 'react-router-dom';
import { Button } from "@material-ui/core";

class ViewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      feed_index: 0,
      post: null,
    }
  }

  componentDidMount() {
    console.log("HERE");
    fetch('/api/user/feed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ feed: data })
        this.getPost(this.state.feed_index);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  getPost(feed_index) {
    fetch('/api/posts/getPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.feed[this.state.feed_index]),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ post: data })
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <Link className="link" to="/home">
            <Button id="leftbutton" className="button" variant="contained" color="#FFFFFF">
              Home
              </Button>
          </Link>
          <h1 className="title">Be Kind to Others!</h1>
        </div>
        {
          this.state.feed.length > 0 &&
          <div>
            <Button id="upArr" onclick={() => {
              if (this.state.feed_index > 0) {
                this.setState({ feed_index: this.state.feed_index - 1 })
              }
              this.getPost(this.state.feed_index - 1);
            }
            }>
              <img src={upArrow} />
            </Button>
            <div className="box">
              <div className="topBox">
                <h2 className="mainTittle" style={{ color: "white" }}>
                  {this.post.name}
                </h2>
                <h2 className="mainTitle">{this.post.title}</h2>
              </div>
              <p className="blog">{this.post.content}</p>
              <label id="labelThing">Comment!:</label>
              <br></br>
              <div id="comment">
                <textarea id="textBox" type="text" />
                <Button id="heartButton">
                  <img src={heart2} />
                </Button>
              </div>
            </div>
            <Button id="doArr" onclick={() => {
              if (this.state.feed_index < this.state.feed.length - 1) {
                this.setState({ feed_index: this.state.feed_index + 1 })
              }
              this.getPost(this.state.feed_index + 1);
            }
            }>
              <img src={downArrow} />
            </Button>
          </div>
        }
        <h1>No Posts Currently...</h1>
      </div>
    );
  }
}

export default ViewPost;