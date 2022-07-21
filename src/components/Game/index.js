import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  PlayArea,
  PiecesRow,
  InputArea,
  QuestionText,
  GuessInput,
  TimerArea,
  LoadingMsg,
} from "./styles";
import generatePuzzle from "../../helpers/puzzleGenerator";
import Piece from "./Piece";
import GameOver from "./GameOver";

const GameBoard = ({ timeLimit, numPieces, numRounds, end }) => {
  const guessRef = useRef();
  const [loading, setLoading] = useState("Establishing Connection...");
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentPuzzle, setCurrentPuzzle] = useState(generatePuzzle(numPieces));
  const [guess, setGuess] = useState("");
  const [roundActive, setRoundActive] = useState(false);

  const startRound = useCallback(() => {
    if (currentRound > 0) {
      setCurrentPuzzle(generatePuzzle(numPieces));
    }
    setCurrentRound((prev) => prev + 1);
    setGuess("");
    setTimeout(() => {
      activateRound();
    }, 2500);
  }, [currentRound, numPieces]);

  const activateRound = () => {
    setRoundActive(true);
    setTimeout(() => {
      endRound();
    }, timeLimit * 1000);
  };

  const endRound = () => {
    if (guess.toLowerCase() !== currentPuzzle.answer) {
      setGameOver(true);
    } else {
      if (currentRound < numRounds) {
        startRound();
      } else {
        setGameOver(true);
        setWin(true);
      }
    }
  };

  const startGame = () => {
    setGameOver(false);
    setWin(false);
    setCurrentRound(0);
    setCurrentPuzzle(generatePuzzle());
    setGuess("");
    setRoundActive(false);
    setLoading("Establishing connection...");
    setTimeout(() => {
      setLoading("Doing some hackerman stuff...");
      setTimeout(() => {
        setLoading("Access code flagged; Requires human captcha input");
        setTimeout(() => {
          setLoading("");
          startRound();
        }, 1500);
      }, 1000);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading("Doing some hackerman stuff...");
      setTimeout(() => {
        setLoading("Access code flagged; Requires human captcha input");
        setTimeout(() => {
          setLoading("");
          startRound();
        }, 1500);
      }, 1000);
    }, 1000);
  }, []);

  useEffect(() => {
    const guessInput = guessRef.current;
    if (guessInput) {
      guessInput.focus();
    }
  }, [roundActive]);

  return (
    <PlayArea>
      {loading.length === 0 ? (
        <>
          <PiecesRow>
            {currentPuzzle.pieces.map((piece, i) => (
              <Piece key={i} piece={piece} active={roundActive} />
            ))}
          </PiecesRow>
          {roundActive === true && (
            <>
              <TimerArea></TimerArea>
              <InputArea>
                <QuestionText>{currentPuzzle.question}</QuestionText>
                <GuessInput
                  ref={guessRef}
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  type="text"
                />
              </InputArea>
            </>
          )}
        </>
      ) : gameOver === true ? (
        <GameOver win={win} />
      ) : (
        <LoadingMsg>{loading}</LoadingMsg>
      )}
    </PlayArea>
  );
};

export default GameBoard;
