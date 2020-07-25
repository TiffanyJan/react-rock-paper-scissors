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

  const [choices, setChoices] = useState([
    { name: "Rock", image: RockImg, show: true, class: "move-right" },
    { name: "Paper", image: PaperImg, show: true },
    { name: "Scissors", image: ScissorsImg, show: true, class: "move-left" },
  ]);

  const [winnerText, setWinnerText] = useState(" ");

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
      { name: "Paper", image: PaperImg, show: true },
      { name: "Scissors", image: ScissorsImg, show: true },
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
        { name: "Rock", image: RockImg, show: true, class: "move-right" },
        { name: "Paper", image: PaperImg, show: false, class: "fade" },
        {
          name: "Scissors",
          image: ScissorsImg,
          show: false,
          class: "fade",
        },
      ];
      setChoices(newChoices);
    } else if (playerChoice == "Scissors") {
      let newChoices = [
        { name: "Rock", image: RockImg, show: false, class: "fade" },
        { name: "Paper", image: PaperImg, show: false, class: "fade" },
        {
          name: "Scissors",
          image: ScissorsImg,
          show: true,
          class: "move-left",
        },
      ];
      setChoices(newChoices);
    } else {
      let newChoices = [
        { name: "Rock", image: RockImg, show: false, class: "fade" },
        { name: "Paper", image: PaperImg, show: true },
        {
          name: "Scissors",
          image: ScissorsImg,
          show: false,
          class: "fade",
        },
      ];
      setChoices(newChoices);
    }
  }

  function playerScore(playerChoice, computerChoice) {
    if (playerChoice === computerChoice.name) {
      setPlayerShowScore((score) => (score += 0));
      setWinnerText("Draw");
    } else if (playerChoice === "Rock" && computerChoice.name === "Scissors") {
      setPlayerShowScore((score) => score + 1);
      setWinnerText("You Win");
    } else if (playerChoice === "Paper" && computerChoice.name === "Rock") {
      setPlayerShowScore((score) => score + 1);
      setWinnerText("You Win");
    } else if (playerChoice === "Scissors" && computerChoice.name === "Paper") {
      setPlayerShowScore((score) => score + 1);
      setWinnerText("You Win");
    } else {
      setComputerScore((score) => score + 1);
      setWinnerText("Computer Wins");
    }
  }

  function refreshPage() {
    setShowChoices(false);
    setChoices([
      { name: "Rock", image: RockImg, show: true, class: "move-right" },
      { name: "Paper", image: PaperImg, show: true },
      { name: "Scissors", image: ScissorsImg, show: true, class: "move-left" },
    ]);
  }

  function computerOption() {
    if (showChoices === true) {
      return "col-sm";
    } else {
      return "col-sm hide";
    }
  }

  return (
    <div className="background">
      <div className="col-xs-1" align="center">
        <div className="container">
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
                <CSSTransition
                  in={showChoices}
                  timeout={2000}
                  classNames={choice.class}
                >
                  <Choice
                    key={choice.name}
                    option={choice.name}
                    picture={choice.image}
                    ready={ready}
                    show={choice.show}
                    showChoices={showChoices}
                  />
                </CSSTransition>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className={computerOption()}>
            <Button onClick={refreshPage}>Replay?</Button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <CSSTransition in={showChoices} timeout={9000} classNames="fade">
              <div className="score">{winnerText}</div>
            </CSSTransition>
          </div>
        </div>

        <div className="row mt-5">
          <div className={computerOption()}>
            Computer's Choice
            <CSSTransition in={showChoices} timeout={9000} classNames="fade">
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
