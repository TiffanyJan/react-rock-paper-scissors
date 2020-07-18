import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Choice from "./Choice.js";
import RockImg from "./rock.png";
import ScissorsImg from "./scissors.png";
import PaperImg from "./paper.png";

function App() {
  const [selectedChoice, setSelectedChoice] = useState("");

  const [computerChoice, setComputerChoice] = useState("");

  const [showChoices, setShowChoices] = React.useState(false);

  const [showRound, setShowRound] = useState(0);

  function ready(option) {
    let array = ["Rock", "Paper", "Scissors"];
    let randomItem = array[Math.floor(Math.random() * array.length)];
    setShowChoices(true);
    setComputerChoice(randomItem);
    setSelectedChoice(option);
    setShowRound((round) => round + 1);
  }

  return (
    <div className="col-xs-1" align="center">
      <div className="container">
        <div className="row"></div>
        <h1>Rock Paper Scissors</h1>

        <div className="row mt-3">
          <div className="card">
            <div className="card-body">Round {showRound}</div>
          </div>
        </div>

        <div className="row mt-5">
          <Choice option={"Rock"} picture={RockImg} ready={ready} />
          <Choice option={"Paper"} picture={PaperImg} ready={ready} />
          <Choice option={"Scissors"} picture={ScissorsImg} ready={ready} />
        </div>
      </div>

      {showChoices ? (
        <div className="row mt-5">
          <div className="col-sm">
            Player
            <div className="row m-2 justify-content-center">
              <button type="button" className="btn btn-primary btn-lg">
                {selectedChoice}
              </button>
            </div>
          </div>

          <div className="col-sm">
            Computer
            <div className="row m-2 justify-content-center">
              <button type="button" className="btn btn-primary btn-lg">
                {computerChoice}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
