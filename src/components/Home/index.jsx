import React, { useState } from "react";
import {
  HomePage,
  Form,
  FormControl,
  RangeSelector,
  PlayBtn,
  Title,
  ButtonBox,
} from "./styles";
import Instructions from "./Instructions";

const Home = ({ start }) => {
  const [timeLimit, setTimeLimit] = useState(15);
  const [numPieces, setNumPieces] = useState(4);
  const [numRounds, setNumRounds] = useState(5);
  const [showInstructions, setShowInstructions] = useState(false);

  const closeInstructions = () => {
    setShowInstructions(false);
  };

  return (
    <HomePage>
      <Title>No Pixel Hacking Game</Title>
      <Form>
        <FormControl>
          <label htmlFor="time">Time Limit</label>
          <RangeSelector
            id="time"
            type="range"
            min={5}
            max={30}
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
          />
          <p>{timeLimit} seconds</p>
        </FormControl>
        <FormControl>
          <label htmlFor="pieces">Puzzle Pieces</label>
          <RangeSelector
            id="pieces"
            type="range"
            min={4}
            max={6}
            value={numPieces}
            onChange={(e) => setNumPieces(e.target.value)}
          />
          <p>{numPieces} pieces</p>
        </FormControl>
        <FormControl>
          <label htmlFor="rounds">Rounds</label>
          <RangeSelector
            id="rounds"
            type="range"
            min={4}
            max={8}
            value={numRounds}
            onChange={(e) => setNumRounds(e.target.value)}
          />
          <p>{numRounds} rounds</p>
        </FormControl>
      </Form>
      <ButtonBox>
        <PlayBtn
          type="button"
          onClick={() => start(timeLimit, numPieces, numRounds)}
        >
          Play Game
        </PlayBtn>
        <PlayBtn onClick={() => setShowInstructions(true)}>How to play</PlayBtn>
      </ButtonBox>
      {showInstructions === true && <Instructions close={closeInstructions} />}
    </HomePage>
  );
};

export default Home;
