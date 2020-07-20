import React from "react";

export default function Choice(props) {
  function choiceClicked(option) {
    props.ready(option);
  }

  function classes() {
    if (props.show == true) {
      return "col-sm card";
    } else {
      return "col-sm card hide";
    }
  }

  return (
    <div
      className={classes()}
      style={{ border: "none" }}
      onClick={() => choiceClicked(props.option)}
    >
      <img
        className="card-img-top"
        src={props.picture}
        alt="Image"
        style={{ width: "16rem" }}
      ></img>
      <div className="card-body">{props.option}</div>
    </div>
  );
}
