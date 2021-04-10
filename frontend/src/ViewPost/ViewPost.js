import React from "react";
import './ViewPost.css';

function ViewPost() {
  return (
    <div className= "box">
      <div className= "topBox">
        <h2 style={{ color: 'white' }}>RandomUser:</h2> <h2> Mr Stark I am not feeling so good</h2>
      </div>
      <p className= "blog">Hello there, this is some text in a text area</p>
      <label>Comment:</label>
      <br></br>
      <input type="text" /> <input type="submit" value="Submit" />
    </div>
  );
}

export default ViewPost;
