import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Choice from "./Choice.js";
import RockImg from "./rock.png";
import ScissorsImg from "./scissors.png";
import PaperImg from "./paper.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function App() {
  const [selectedChoice, setSelectedChoice] = useState("");

  const [computerChoice, setComputerChoice] = useState("");

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
    if (showRound >= 3) {
      setModalShow(true);
      console.log("end");
    }
  }, [showRound]);

  function ready(playerChoice) {
    let array = ["Rock", "Paper", "Scissors"];
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
    if (playerChoice === computerChoice) {
      setPlayerShowScore((score) => (score += 0));
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
      setPlayerShowScore((score) => score + 1);
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      setPlayerShowScore((score) => score + 1);
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      setPlayerShowScore((score) => score + 1);
    } else {
      setComputerScore((score) => score + 1);
    }
  }

  function finalScore() {
    if (showPlayerScore === showComputerScore) {
      return "Draw";
    } else if (showPlayerScore > showComputerScore) {
      return "You Win";
    } else {
      return "Computer Wins";
    }
  }

  return (
    <div className="background">
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
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
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
    </div>
  );

  function refreshPage() {
    window.location.reload(false);
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {finalScore()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-xs-1" align="center">
            <Button onClick={refreshPage}>Replay?</Button>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }
}

export default App;
