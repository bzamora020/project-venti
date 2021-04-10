import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./CreatePost.css";
import Navbar from '../Navbar/Navbar';

let title ="Create Post"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      background: "#F2D091",
      borderRadius: 10,
    },
  },

}));

function CreatePost() {
  const classes = useStyles();

  return (
    <div>
      <Navbar title={title}/>
      <div className = "wholeForm">
        <form className={classes.root} noValidate autoComplete="off">
          <label className="labels"> Enter your tittle: </label>
          <div className = "boxInput">
            <br></br>
              <TextField id="standard-basic" label="Tittle" />
          </div>
          <label className="labels"> Enter your message: </label>
          <div className = "boxInput">
            <br></br>
              <TextField id="standard-basic" label="Message" />
          </div>
          <input type="image" src="https://jekyllcodex.org/uploads/grumpycat.jpg" />
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
