import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div class="col-xs-1" align="center">
      <div class="container">
        <div class="row"></div>
        <h1>Rock Paper Scissors</h1>

        <div class="row mt-3">
          <div class="col-sm">Number of Rounds</div>
        </div>
        <div class="row mt-5">
          <div class="col-sm">Rock</div>
          <div class="col-sm">Paper</div>
          <div class="col-sm">Scissors</div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-sm">
          <button type="button" class="btn btn-primary btn-lg">
            Ready?
          </button>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-sm">
          Player
          <div class="row m-2 justify-content-center">
          <button type="button" class="btn btn-primary btn-lg">
            Rock
          </button>
          </div>
        </div>

        <div class="col-sm">
          Computer
          <div class="row m-2 justify-content-center">
          <button type="button" class="btn btn-primary btn-lg">
            Paper
          </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
