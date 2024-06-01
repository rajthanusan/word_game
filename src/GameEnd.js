import React from "react";
import "./GameEnd.css";

const GameEnd = ({ didWin, gameMode, timeLeft, startGame }) => {
  return (
    <div className="game-end-container">
      {didWin ? (
        <div>
          <p>
            Wow, we have run out of words to describe you as well as for the
            quiz, literally. You have aced this with flying colors. You are truly a champion and deserve this.
            <span role="img" aria-label="medal-emoji"> 🥇 </span>
          </p>
        </div>
      ) : (
        <div>
          <p style={{ margin: "18px", color: "#644566", fontWeight: "bold" }}>
            <span>
              {gameMode === "Easy"
                ? "Sorry, but you have used up all your lives. "
                : timeLeft === 0
                ? "Sorry, but the time ran out. "
                : "Sorry, but you have used up all your lives. "}
            </span>
            However if you want to continue challenging yourself, get started
            again.
          </p>
          <button className="btn" onClick={startGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default GameEnd;
