import React from "react";
import "./Input.css";
const Input = (props) => {
  const {type,name,value} =props
  const classes = "input " + props.className;
  return (
    <div>
      <input className={classes} type={type} name={name}/>
    </div>
  );
};

export default Input;
