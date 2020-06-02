import React from "react";
import "./Circles.css";

const Circle = (props) => {
  return (
    <div className="Circles">
      <div className={props.selButtonIdx === "1" ? "selected" : null}>1</div>
      <div className={props.selButtonIdx === "2" ? "selected" : null}>2</div>
      <div className={props.selButtonIdx === "3" ? "selected" : null}>3</div>
      <div className={props.selButtonIdx === "4" ? "selected" : null}>4</div>
    </div>
  );
};

export default Circle;
