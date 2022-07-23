import React from "react";
import {
  InstructionsContainer,
  InstructionsText,
  Italics,
  InstructionRow,
  InstructionCol,
  NumBoxes,
  CloseBtn,
} from "./styles";
import { Title } from "../styles";
import Piece from "../../Game/Piece";
import { AiFillCloseCircle } from "react-icons/ai";
import { samplePuzzlePieces } from "../../../helpers/constants";

const Instructions = ({ close }) => {
  return (
    <InstructionsContainer>
      <CloseBtn onClick={() => close()}>
        <AiFillCloseCircle />
      </CloseBtn>
      <Title>How to play</Title>
      <Italics>
        This is a recreation of the bank heist minigame used in the NoPixel GTA
        server.
      </Italics>
      <InstructionsText>
        Use the sliders to select the number of rounds, time per round, and
        puzzle length and click Start Game.
      </InstructionsText>
      <InstructionCol>
        <InstructionRow>
          <NumBoxes>3</NumBoxes>
          <NumBoxes>1</NumBoxes>
          <NumBoxes>4</NumBoxes>
          <NumBoxes>2</NumBoxes>
        </InstructionRow>
        <InstructionsText>
          Squares will show up displaying the number assigned to each box. After
          a few seconds the boxs will change, the timer will start, and you will
          be asked two questions about the puzzle.
        </InstructionsText>
      </InstructionCol>
      <InstructionCol>
        <InstructionRow>
          <Piece piece={samplePuzzlePieces[0]} active={true} SIZE={100} />
          <Piece piece={samplePuzzlePieces[1]} active={true} SIZE={100} />
          <Piece piece={samplePuzzlePieces[2]} active={true} SIZE={100} />
          <Piece piece={samplePuzzlePieces[3]} active={true} SIZE={100} />
        </InstructionRow>
        <InstructionsText>{`Background color ( 2 ) AND Shape color ( 4 )`}</InstructionsText>
      </InstructionCol>
      <InstructionsText>
        Type the answer to each question seperated by a space (
        <Italics>green white</Italics> ) and hit ENTER.
      </InstructionsText>
      <InstructionsText>
        If your answer is corrent, you will advance to the next round. Complete
        the selected number of rounds to win.
      </InstructionsText>
      <InstructionCol border>
        <InstructionsText size={"1.5rem"}>EXAMPLE</InstructionsText>
        <Italics>
          All possible questions and their answers corresponding to the puzzle
          piece to the right.
        </Italics>
        <InstructionRow>
          <InstructionCol>
            <ul>
              <li>background color: red (background of the whole piece)</li>
              <li>color text: white (the word representing a color)</li>
              <li>
                color text background color: green (the color of the color text)
              </li>
              <li>shape text: circle (the word representing a shape)</li>
              <li>
                shape text background color: white (the color of the shape text)
              </li>
              <li>shape: triangle (the shape displayed on the piece)</li>
              <li>shape color: (the color of the shape)</li>
              <li>
                number color: yellow (the color of the number on the piece)
              </li>
            </ul>
          </InstructionCol>
          <Piece piece={samplePuzzlePieces[0]} active={true} SIZE={175} />
        </InstructionRow>
      </InstructionCol>
      <InstructionsText size={"1.5rem"}>GOOD LUCK!</InstructionsText>
    </InstructionsContainer>
  );
};

export default Instructions;
