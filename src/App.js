import React, { useState } from "react";
import { Page, Home, GameBoard } from "./components";
import { playclock, playDialUp } from "./helpers/constants";

const App = () => {
  const [playMode, setPlayMode] = useState(false);
  const [timeLimit, setTimeLimit] = useState(15);
  const [numPieces, setNumPieces] = useState(4);
  const [numRounds, setNumRounds] = useState(5);
  const clock = playclock();
  const dialUp = playDialUp();

  const startGame = (time, pieces, rounds) => {
    setTimeLimit(time);
    setNumPieces(pieces);
    setNumRounds(rounds);
    setPlayMode(true);
  };

  const endGame = () => {
    setPlayMode(false);
  };

  return (
    <Page className="App">
      {!playMode ? (
        <Home start={startGame} />
      ) : (
        <GameBoard
          timeLimit={Number(timeLimit)}
          numPieces={Number(numPieces)}
          numRounds={Number(numRounds)}
          end={endGame}
          clock={clock}
          dialUp={dialUp}
        />
      )}
    </Page>
  );
};

export default App;
