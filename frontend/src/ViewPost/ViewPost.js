import React from "react";
import './ViewPost.css';

import Navbar from '../Navbar/Navbar';
let title = "Be Kind To Others!"

function ViewPost() {
  return (
    <div>
      <Navbar title={title}/>
      <div className= "box">
        <div className= "topBox">
          <h2 style={{ color: 'white' }}>RandomUser:</h2> <h2> Mr Stark I am not feeling so good</h2>
        </div>
        <p className= "blog">Hello there, this is some text in a text area</p>
        <label>Comment:</label>
        <br></br>
        <input type="text" /> <input type="submit" value="Submit" />
      </div>
    </div>
  );
}

export default ViewPost;
