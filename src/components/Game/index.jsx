import React, { useState, useEffect, useRef } from "react";
import {
  PlayArea,
  PiecesRow,
  InputArea,
  QuestionText,
  GuessInput,
  TimerArea,
  LoadingMsg,
  Timer,
  GameOver,
  GameOverText,
  Btn,
  IconContainer,
} from "./styles";
import generatePuzzle from "../../helpers/puzzleGenerator";
import Piece from "./Piece";
import { TiCancel } from "react-icons/ti";
import { GiSpy } from "react-icons/gi";

const GameBoard = ({ timeLimit, numPieces, numRounds, end, clock, dialUp }) => {
  const guessRef = useRef(null);
  const [loading, setLoading] = useState("Establishing Connection...");
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [win, setWin] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [currentPuzzle, setCurrentPuzzle] = useState(generatePuzzle(numPieces));
  const [guess, setGuess] = useState("");
  const [roundActive, setRoundActive] = useState(false);
  const [timer, setTimer] = useState(timeLimit);
  const [timerId, setTimerId] = useState("");
  const [size, setSize] = useState(225);

  const playAgain = () => {
    setGuess("");
    setRoundActive(false);
    setCurrentRound(1);
    setTimer(timeLimit);
    const newPuzzle = generatePuzzle(numPieces);
    setCurrentPuzzle(newPuzzle);
    setWin(false);
    setGameOver(false);
    setLoading("Establishing Connection...");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInterval(timerId);
    clock.pause();
    if (guess.toLowerCase() !== currentPuzzle.answer) {
      setGameOver(true);
      setGameOverMessage(`You guessed: ${guess}`);
      return;
    }
    if (currentRound === numRounds) {
      setGameOver(true);
      setWin(true);
      return;
    }
    const newPuzzle = generatePuzzle(numPieces);
    setCurrentPuzzle(newPuzzle);
    setTimer(timeLimit);
    setRoundActive(false);
    setCurrentRound((prev) => prev + 1);
    setGuess("");
  };

  useEffect(() => {
    const size = Math.floor(window.innerWidth / (numPieces + 2));
    setSize(size > 250 ? 250 : size);
  }, [numPieces]);

  useEffect(() => {
    if (loading === "Establishing Connection...") {
      dialUp.play();
      setTimeout(() => {
        setLoading("Doing some hackerman stuff...");
        setTimeout(() => {
          setLoading("Access code flagged; Requires human captcha input");
          setTimeout(() => {
            setLoading("");
          }, 1500);
        }, 1000);
      }, 1000);
    }
  }, [loading, dialUp]);

  useEffect(() => {
    if (loading === "" && !roundActive) {
      setTimeout(() => {
        setRoundActive(true);
        clock.play();
      }, 2500);
    }
  }, [loading, roundActive, clock]);

  useEffect(() => {
    const guessInput = guessRef.current;
    if (guessInput) {
      guessInput.focus();
      const id = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      setTimerId(id);
    }
  }, [roundActive]);

  useEffect(() => {
    if (timer === 0) {
      setGameOver(true);
      setGameOverMessage("Time ran out!");
      clearInterval(timerId);
      clock.pause();
    }
  }, [timer, timerId, clock]);

  return (
    <PlayArea>
      {gameOver ? (
        <GameOver>
          {win ? (
            <>
              <IconContainer>
                <GiSpy />
              </IconContainer>
              <GameOverText size={2}>
                The system has been bypassed.
              </GameOverText>
            </>
          ) : (
            <>
              <IconContainer>
                <TiCancel />
              </IconContainer>
              <GameOverText size={2}>
                The system didn't accept your answers.
              </GameOverText>
              <GameOverText>{gameOverMessage}</GameOverText>
              <GameOverText>
                The answer was: {currentPuzzle.answer}
              </GameOverText>
            </>
          )}
          <Btn onClick={() => playAgain()} type="button">
            Play Again
          </Btn>
          <GameOverText>To easy or hard?</GameOverText>
          <Btn onClick={() => end()} type="button">
            Settings
          </Btn>
        </GameOver>
      ) : loading.length === 0 ? (
        <>
          <PiecesRow>
            {currentPuzzle.pieces.map((piece, i) => (
              <Piece key={i} piece={piece} active={roundActive} SIZE={size} />
            ))}
          </PiecesRow>
          {roundActive === true && (
            <>
              <TimerArea>
                <Timer timeLimit={`${timeLimit}s`} />
              </TimerArea>
              <InputArea active={roundActive}>
                <QuestionText>{currentPuzzle.question}</QuestionText>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <GuessInput
                    ref={guessRef}
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    type="text"
                    disabled={!roundActive}
                  />
                  <button type="submit" hidden />
                </form>
              </InputArea>
            </>
          )}
        </>
      ) : (
        <LoadingMsg>
          <IconContainer>
            <GiSpy />
          </IconContainer>
          {loading}
        </LoadingMsg>
      )}
    </PlayArea>
  );
};

export default GameBoard;
