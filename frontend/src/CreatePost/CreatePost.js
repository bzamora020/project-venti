import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./CreatePost.css";
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

}));

function CreatePost() {
  const classes = useStyles();

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
}

export default CreatePost;
