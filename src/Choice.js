import React from "react";

export default function Choice(props) {
  return (
    <div className="col-sm card" style={{ border: "none" }}>
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
