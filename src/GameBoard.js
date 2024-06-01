import React, { useState } from "react";
import "./GameBoard.css";
import { LEVEL_1 } from "./Constants";

function GameBoard() {
  const [score, setScore] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [currentWord, setCurrentWord] = useState(LEVEL_1[0]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.toLowerCase() === currentWord.actual.toLowerCase()) {
      setScore(score + 10);
     
      const currentIndex = LEVEL_1.indexOf(currentWord);
      const nextIndex = (currentIndex + 1) % LEVEL_1.length;
      setCurrentWord(LEVEL_1[nextIndex]);
    } else {
      setWrongAttempts(wrongAttempts + 1);
    }
    setInput("");
  };

  return (
    <div className="container">
      <h3>Score: {score}</h3>
      <h3>Wrong Attempts: {wrongAttempts}</h3>
      <div className="game-board">
        <h2>{currentWord.scrambled}</h2>
        <p>Clue: {currentWord.clue}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GameBoard;
