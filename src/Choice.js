import React from "react";

export default function Choice(props) {
  function choiceClicked(choiceName) {
    if (props.playGame == true) {
      return;
    }

    props.startGame(choiceName);
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
      onClick={() => choiceClicked(props.choiceName)}
    >
      <img
        className="card-img-top"
        src={props.picture}
        alt="Image"
        style={{ width: "10rem", margin: "0 auto" }}
      ></img>
      <div className="card-body">{props.choiceName}</div>
    </div>
  );
}
