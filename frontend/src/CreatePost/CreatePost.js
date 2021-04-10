import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./CreatePost.css";

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
      <div>
        <h1>Create Post</h1>
      </div>
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
