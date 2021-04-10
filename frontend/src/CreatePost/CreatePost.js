import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./CreatePost.css";
import Navbar from '../Navbar/Navbar';

let title = "Create Post"

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', content: ''};

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }
  handleContentChange(event) {
    this.setState({content: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.title + ' ' + this.state.content);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <Navbar title={title}/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.value} onChange={this.handleTitleChange} />
          </label>
          <label>
            Content:
            <input type="text" value={this.state.value} onChange={this.handleContentChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreatePost;
