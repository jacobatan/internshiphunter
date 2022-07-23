import React from "react";
import "./index.css";

const Button = (props) => {
  return(
      <button className="cta" id={props.id} onClick={props.onClick}>
        <span className="hover-underline-animation"> {props.text} </span>
      </button>
  );
};

export default Button;
