import React from "react";
import "./CreatePost.css";
import Navbar from "../Navbar/Navbar";

import heart from "./heart.png";
import { Button } from "@material-ui/core";

let title = "Create Post";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", content: "" };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }
  handleSubmit(event) {
    alert(
      "A name was submitted: " + this.state.title + " " + this.state.content
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <Navbar title={title} />
        <form onSubmit={this.handleSubmit}>
          <div className="formDivs">
            <label style={style.labelss}>
              Title:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleTitleChange}
              />
            </label>
          </div>
          <div className="formDivs">
            <label style={style.labelss}>
              Content:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleContentChange}
              />
            </label>
          </div>
          <div>
          <Button type="submit" value="Submit">
            <img src={heart} />
          </Button>
          </div>
        </form>
      </div>
    );
  }
}

const style = {
  labelss: {
    color: "black",
    fontWeight: "600",
  },
};

export default CreatePost;
