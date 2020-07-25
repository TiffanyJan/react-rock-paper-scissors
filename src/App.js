import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Choice from "./Choice.js";
import RockImg from "./rock.png";
import ScissorsImg from "./scissors.png";
import PaperImg from "./paper.png";
import Button from "react-bootstrap/Button";
import { CSSTransition } from "react-transition-group";

function App() {
  const [selectedChoice, setSelectedChoice] = useState("");

  const [computerChoice, setComputerChoice] = useState({});

  const [showChoices, setShowChoices] = React.useState(false);

  const [showRound, setShowRound] = useState(0);

  const [showPlayerScore, setPlayerShowScore] = useState(0);

  const [showComputerScore, setComputerScore] = useState(0);

  const [modalShow, setModalShow] = React.useState(false);

  const [choices, setChoices] = useState([
    { name: "Rock", image: RockImg, show: true },
    { name: "Scissors", image: ScissorsImg, show: true },
    { name: "Paper", image: PaperImg, show: true },
  ]);

  useEffect(() => {
    if (showRound >= 1) {
      console.log(finalScore());
    }
  }, [finalScore]);

  function finalScore() {
    if (showRound === 0) {
      return " ";
    } else if (showPlayerScore === showComputerScore) {
      return "Draw";
    } else if (showPlayerScore > showComputerScore) {
      return "You Win";
    } else {
      return "Computer Wins";
    }
  }

  function ready(playerChoice) {
    let array = [
      { name: "Rock", image: RockImg, show: true },
      { name: "Scissors", image: ScissorsImg, show: true },
      { name: "Paper", image: PaperImg, show: true },
    ];
    let computerChoice = array[Math.floor(Math.random() * array.length)];
    setShowChoices(true);
    setComputerChoice(computerChoice);
    setSelectedChoice(playerChoice);
    setShowRound((round) => round + 1);
    playerScore(playerChoice, computerChoice);
    hideOptions(playerChoice);
  }

  function hideOptions(playerChoice) {
    if (playerChoice == "Rock") {
      let newChoices = [
        { name: "Rock", image: RockImg, show: true },
        { name: "Scissors", image: ScissorsImg, show: false },
        { name: "Paper", image: PaperImg, show: false },
      ];
      setChoices(newChoices);
    } else if (playerChoice == "Scissors") {
      let newChoices = [
        { name: "Rock", image: RockImg, show: false },
        { name: "Scissors", image: ScissorsImg, show: true },
        { name: "Paper", image: PaperImg, show: false },
      ];
      setChoices(newChoices);
    } else {
      let newChoices = [
        { name: "Rock", image: RockImg, show: false },
        { name: "Scissors", image: ScissorsImg, show: false },
        { name: "Paper", image: PaperImg, show: true },
      ];
      setChoices(newChoices);
    }
  }

  function playerScore(playerChoice, computerChoice) {
    if (playerChoice === computerChoice.name) {
      setPlayerShowScore((score) => (score += 0));
    } else if (playerChoice === "Rock" && computerChoice.name === "Scissors") {
      setPlayerShowScore((score) => score + 1);
    } else if (playerChoice === "Paper" && computerChoice.name === "Rock") {
      setPlayerShowScore((score) => score + 1);
    } else if (playerChoice === "Scissors" && computerChoice.name === "Paper") {
      setPlayerShowScore((score) => score + 1);
    } else {
      setComputerScore((score) => score + 1);
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="background">
      <div className="col-xs-1" align="center">
        <div className="container">
          <div className="row"></div>
          <h1>Rock Paper Scissors</h1>

          <div className="row mt-3">
            <div className="card">
              <div className="card-body roundDesign">
                Round {showRound}
                <div className="row mt-1">
                  {showPlayerScore} : {showComputerScore}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="row mt-3" style={{ margin: "0 auto" }}>
              {choices.map((choice) => (
                <Choice
                  key={choice.name}
                  option={choice.name}
                  picture={choice.image}
                  ready={ready}
                  show={choice.show}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm">
            <Button onClick={refreshPage}>Replay?</Button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <CSSTransition in={showChoices} timeout={9000} classNames="my-node">
              <div className="score">{finalScore()}</div>
            </CSSTransition>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm">
            Computer's Choice
            <CSSTransition in={showChoices} timeout={9000} classNames="my-node">
              <div className="row m-2 justify-content-center">
                <Choice
                  key={computerChoice.name}
                  option={computerChoice.name}
                  picture={computerChoice.image}
                  ready={ready}
                  show={computerChoice.show}
                />
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
