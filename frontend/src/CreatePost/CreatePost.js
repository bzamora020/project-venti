import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./CreatePost.css";
<<<<<<< HEAD
import Navbar from '../Navbar/Navbar';

let title = "Create Post"

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', content: ''};
=======
import Button from "@material-ui/core/Button";
import heart from "./heart.png"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: '250px',
      borderRadius: 10,
    },
  },
>>>>>>> 31441cad6fbd82bd441aa135471d8cf539327478

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

<<<<<<< HEAD
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
=======
  return (
    <div>

      <div className = "wholeForm">
      <form className={classes.root} noValidate autoComplete="off">
      <label className= "labels"> Enter your tittle: </label>

      <div className = "boxInput">

      <input type="text" name="name" placeholder="Tittle"/>
        
      </div>
      <label className= "labels"> Enter your message: </label>

      <div className = "boxInput" >
      <textarea type="text" name="name" placeholder="Message"/>
      </div>
      <Button>
      <img src= {heart} />
      </Button>
      </form>
      </div>

    </div>
  );
>>>>>>> 31441cad6fbd82bd441aa135471d8cf539327478
}

export default CreatePost;
