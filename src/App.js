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
  const [computerChoice, setComputerChoice] = useState({});

  const [playerChoices, setPlayerChoices] = useState([
    { choiceName: "Rock", image: RockImg, show: true, class: "move-right" },
    { choiceName: "Paper", image: PaperImg, show: true },
    {
      choiceName: "Scissors",
      image: ScissorsImg,
      show: true,
      class: "move-left",
    },
  ]);

  const [playGame, setplayGame] = React.useState(false);

  const [round, setRound] = useState(0);

  const [playerScore, setPlayerScore] = useState(0);

  const [computerScore, setComputerScore] = useState(0);

  const [winnerText, setWinnerText] = useState(" ");

  function startGame(playerChoice) {
    let computerChoices = [
      { choiceName: "Rock", image: RockImg, show: true },
      { choiceName: "Paper", image: PaperImg, show: true },
      { choiceName: "Scissors", image: ScissorsImg, show: true },
    ];
    let computerChoice =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    setplayGame(true);
    setComputerChoice(computerChoice);
    setRound((round) => round + 1);
    calculateWinner(playerChoice, computerChoice.choiceName);
    hideOptions(playerChoice);
  }

  function hideOptions(playerChoice) {
    if (playerChoice == "Rock") {
      let newChoices = [
        { choiceName: "Rock", image: RockImg, show: true, class: "move-right" },
        { choiceName: "Paper", image: PaperImg, show: false, class: "fade" },
        {
          choiceName: "Scissors",
          image: ScissorsImg,
          show: false,
          class: "fade",
        },
      ];
      setPlayerChoices(newChoices);
    } else if (playerChoice == "Scissors") {
      let newChoices = [
        { choiceName: "Rock", image: RockImg, show: false, class: "fade" },
        { choiceName: "Paper", image: PaperImg, show: false, class: "fade" },
        {
          choiceName: "Scissors",
          image: ScissorsImg,
          show: true,
          class: "move-left",
        },
      ];
      setPlayerChoices(newChoices);
    } else {
      let newChoices = [
        { choiceName: "Rock", image: RockImg, show: false, class: "fade" },
        { choiceName: "Paper", image: PaperImg, show: true },
        {
          choiceName: "Scissors",
          image: ScissorsImg,
          show: false,
          class: "fade",
        },
      ];
      setPlayerChoices(newChoices);
    }
  }

  function calculateWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      setPlayerScore((score) => (score += 0));
      setWinnerText("Draw");
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
      setPlayerScore((score) => score + 1);
      setWinnerText("You Win");
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      setPlayerScore((score) => score + 1);
      setWinnerText("You Win");
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      setPlayerScore((score) => score + 1);
      setWinnerText("You Win");
    } else {
      setComputerScore((score) => score + 1);
      setWinnerText("Computer Wins");
    }
  }

  function restart() {
    setplayGame(false);
    setPlayerChoices([
      { choiceName: "Rock", image: RockImg, show: true, class: "move-right" },
      { choiceName: "Paper", image: PaperImg, show: true },
      {
        choiceName: "Scissors",
        image: ScissorsImg,
        show: true,
        class: "move-left",
      },
    ]);
  }

  function computerOption() {
    if (playGame === true) {
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
                round {round}
                <div className="row mt-1">
                  {playerScore} : {computerScore}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="row mt-3" style={{ margin: "0 auto" }}>
              {playerChoices.map((choice) => (
                <CSSTransition
                  in={playGame}
                  timeout={2000}
                  classNames={choice.class}
                >
                  <Choice
                    key={choice.choiceName}
                    choiceName={choice.choiceName}
                    picture={choice.image}
                    startGame={startGame}
                    show={choice.show}
                    playGame={playGame}
                  />
                </CSSTransition>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className={computerOption()}>
            <Button onClick={restart}>Replay?</Button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <CSSTransition in={playGame} timeout={9000} classNames="fade">
              <div className="score">{winnerText}</div>
            </CSSTransition>
          </div>
        </div>

        <div className="row mt-5">
          <div className={computerOption()}>
            Computer's Choice
            <CSSTransition in={playGame} timeout={9000} classNames="fade">
              <div className="row m-2 justify-content-center">
                <Choice
                  key={computerChoice.choiceName}
                  choiceName={computerChoice.choiceName}
                  picture={computerChoice.image}
                  startGame={startGame}
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
