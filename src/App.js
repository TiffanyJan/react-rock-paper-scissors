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

  const [showPlayerScore, setPlayerShowScore] = useState(0);

  const [showComputerScore, setComputerScore] = useState(0);

  function ready(playerChoice) {
    let array = ["Rock", "Paper", "Scissors"];
    let computerChoice = array[Math.floor(Math.random() * array.length)];
    setShowChoices(true);
    setComputerChoice(computerChoice);
    setSelectedChoice(playerChoice);
    setShowRound((round) => round + 1);
    playerScore(playerChoice, computerChoice);
    setComputerScore(playerChoice, computerChoice);
  }

  function playerScore(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      setPlayerShowScore((score) => (score += 0));
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
      setPlayerShowScore((score) => score + 1);
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      setPlayerShowScore((score) => score + 1);
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      setPlayerShowScore((score) => score + 1);
    } else {
    }

    // if player == Paper, cpu == rock, player = 1
    // if player == Rock, cpu == scissors, player 1
    // if player == Scissors, cpu = paper, player 1
  }

  return (
    <div className="col-xs-1" align="center">
      <div className="container">
        <div className="row"></div>
        <h1>Rock Paper Scissors</h1>

        <div className="row mt-3">
          <div className="card">
            <div className="card-body">
              Round {showRound}
              <div className="row mt-1">
                {showPlayerScore} : {showComputerScore}
              </div>
            </div>
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
