import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <button onClick={() => props.onClick(1)}><span>Naruto</span></button>
      <button onClick={() => props.onClick(2)}><span>Ichigo</span></button>
      <button onClick={() => props.onClick(3)}><span>Luffy</span></button>
    </div>
  );
};

export default Buttons;