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
    event.preventDefault();

    fetch("/api/posts/create", {
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
        this.props.history.push("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar title={title} id="barr" />
        <form onSubmit={this.handleSubmit}>
          <div className="formDivs">
            <label style={style.labelss}>
              Title:
              <input
                style={{
                  outline: 0,
                  border: 0,
                  borderBottom: "1px solid black",
                }}
                type="text"
                value={this.state.value}
                onChange={this.handleTitleChange}
              />
            </label>
          </div>
          <div className="formDivs">
            <p style={style.labelss}>Content</p>
            <label style={style.labelss}>
              <textarea
                style={{
                  outline: 0,
                  width: "100%",
                  height: 300,
                  backgroundColor: "#47B4F1",
                }}
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
