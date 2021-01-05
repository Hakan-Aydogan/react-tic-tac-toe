import React, { useState } from "react";
import "./styles.css";
import Box from "./box/";

const board = [[], [], []];
const totalBoard = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
];

export const Game = () => {
  const [turn, setTurn] = useState("x");

  const changeTurn = (row, col) => {
    setTurn((turn) => (turn === "x" ? "o" : "x"));
    board[row][col] = turn;
    let w = checkForWin();
    console.log(w);
  };

  const checkForWin = () => {
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      if (row[0] === row[1] && row[1] === row[2] && row[0]) {
        return row[0];
      }
    }
    for (let i = 0; i < board.length; i++) {
      const row0 = board[0][i];
      const row1 = board[1][i];
      const row2 = board[2][i];
      if (row0 === row1 && row1 === row2 && row0) {
        return row0;
      }
      for (let i = 0; i < board.length; i++) {}

      const row00 = board[0][0];
      const row11 = board[1][1];
      const row22 = board[2][2];
      const row02 = board[0][2];
      const row20 = board[2][0];

      if (row00 === row11 && row11 === row22 && row00) {
        return row00;
      }
      if (row02 === row11 && row11 === row20 && row02) {
        return row02;
      }
    }
  };

  return (
    <div id="game">
      <div id="win"> Winner: {checkForWin()} </div>
      <div className="row">
        <Box row="0" col="0" currentState={turn} changeTurn={changeTurn}></Box>
        <Box row="0" col="1" currentState={turn} changeTurn={changeTurn}></Box>
        <Box row="0" col="2" currentState={turn} changeTurn={changeTurn}></Box>
      </div>
      <div className="row">
        <Box row="1" col="0" currentState={turn} changeTurn={changeTurn}></Box>
        <Box row="1" col="1" currentState={turn} changeTurn={changeTurn}></Box>
        <Box row="1" col="2" currentState={turn} changeTurn={changeTurn}></Box>
      </div>
      <div className="row">
        <Box row="2" col="0" currentState={turn} changeTurn={changeTurn}></Box>
        <Box row="2" col="1" currentState={turn} changeTurn={changeTurn}></Box>
        <Box row="2" col="2" currentState={turn} changeTurn={changeTurn}></Box>
      </div>
      <button title="New Game" onClick={() => window.location.reload()}>
        New Game
      </button>
    </div>
  );
};

//export default Game;
