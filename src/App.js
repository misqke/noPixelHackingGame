import React, { useState } from "react";
import { Page, Home, GameBoard } from "./components";

const App = () => {
  const [playMode, setPlayMode] = useState(false);
  const [timeLimit, setTimeLimit] = useState(15);
  const [numPieces, setNumPieces] = useState(4);
  const [numRounds, setNumRounds] = useState(5);

  const startGame = (time, pieces, rounds) => {
    setTimeLimit(time);
    setNumPieces(pieces);
    setNumRounds(rounds);
    setPlayMode(true);
  };

  return (
    <Page className="App">
      {!playMode ? (
        <Home start={startGame} />
      ) : (
        <GameBoard
          timeLimit={timeLimit}
          numPieces={numPieces}
          numRounds={numRounds}
        />
      )}
    </Page>
  );
};

export default App;
