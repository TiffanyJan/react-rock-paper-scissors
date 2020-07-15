import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Choice from "./Choice.js";
import RockImg from "./rock.png";
import ScissorsImg from "./scissors.png";
import PaperImg from "./paper.png";

function App() {
  return (
    <div className="col-xs-1" align="center">
      <div className="container">
        <div className="row"></div>
        <h1>Rock Paper Scissors</h1>

        <div className="row mt-3">
          <div className="card">
            <div className="card-body">Round 1</div>
          </div>
        </div>

        <div className="row mt-5">
          <Choice option={"Rock"} picture={RockImg} />
          <Choice option={"Paper"} picture={PaperImg} />
          <Choice option={"Scissors"} picture={ScissorsImg} />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm">
          <button type="button" className="btn btn-primary btn-lg">
            Ready?
          </button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm">
          Player
          <div className="row m-2 justify-content-center">
            <button type="button" className="btn btn-primary btn-lg">
              Rock
            </button>
          </div>
        </div>

        <div className="col-sm">
          Computer
          <div className="row m-2 justify-content-center">
            <button type="button" className="btn btn-primary btn-lg">
              Paper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
