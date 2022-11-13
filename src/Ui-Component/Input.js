import React from "react";
import "./Input.css";
const Input = (props) => {
  const {type,name,value,placeholder} =props
  const classes = "input " + props.className;
  return (
    <div>
      <input className={classes} type={type} name={name} placeholder={placeholder}/>
    </div>
  );
};

export default Input;
