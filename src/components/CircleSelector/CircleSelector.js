import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => {
  const changeHandler = (e) => {
    props.handleButtonSelection(e.target.value);
  };
  if (props.selButtonIdx)
    return (
      <div className="CircleSelector">
        <button
          className={props.selButtonIdx === "1" ? "selected" : ""}
          value="1"
          onClick={changeHandler}
        >
          {props.selected === "1" ? "Circle 1 Selected" : "Select Circle 1"}
        </button>
        <button
          className={props.selButtonIdx === "2" ? "selected" : ""}
          value="2"
          onClick={changeHandler}
        >
          {props.selected === "2" ? "Circle 2 Selected" : "Select Circle 2"}
        </button>
        <button
          className={props.selButtonIdx === "3" ? "selected" : ""}
          value="3"
          onClick={changeHandler}
        >
          {props.selected === "3" ? "Circle 3 Selected" : "Select Circle 3"}
        </button>
        <button
          className={props.selButtonIdx === "4" ? "selected" : ""}
          value="4"
          onClick={changeHandler}
        >
          {props.selected === "4" ? "Circle 4 Selected" : "Select Circle 4"}
        </button>
      </div>
    );
};

export default CircleSelector;
