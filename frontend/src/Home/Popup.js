import React from "react";
import './Popup.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <button className="close-btn" onClick={() => props.setTrigger(false)}> X</button>
        {props.children}
    </div>
  ) : "";
}

export default Popup;
