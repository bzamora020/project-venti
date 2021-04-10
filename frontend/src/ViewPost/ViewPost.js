import React from "react";
import './ViewPost.css';

function ViewPost() {
  return (
    <div className= "box">
      <div className= "topBox">
        <h3 style={{ color: 'white' }}>RandomUser:</h3> <h3> Mr Stark I am not feeling so good</h3>
      </div>
      <p className= "blog">Hello there, this is some text in a text area</p>
      <label>Comment:</label>
      <br></br>
      <input type="text" /> <input type="submit" value="Submit" />
    </div>
  );
}

export default ViewPost;
