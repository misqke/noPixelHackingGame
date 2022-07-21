import { COLORS, SHAPES, QUESTIONS } from "./constants";

const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

const randomNum = () => Math.floor(Math.random() * 9 + 1);

const shuffleArr = (arr) => {
  const ARR = [...arr];
  const result = [];
  while (ARR.length > 0) {
    const index = randomIndex(ARR);
    result.push(ARR.splice(index, 1)[0]);
  }
  return result;
};

const generatePuzzlePiece = () => {
  let piece = {};
  let availableColors = [...COLORS];
  // generate background color
  const bgIndex = randomIndex(availableColors);
  piece.background = availableColors[bgIndex];
  availableColors.splice(bgIndex, 1);
  // generate color text
  const colorText = COLORS[randomIndex(COLORS)].color;
  const colorTextIndex = randomIndex(availableColors);
  piece.colorText = {
    text: colorText,
    color: availableColors[colorTextIndex],
  };
  availableColors.splice(colorTextIndex, 1);
  // generate shape text
  const shapeText = SHAPES[randomIndex(SHAPES)];
  const shapeTextIndex = randomIndex(availableColors);
  piece.shapeText = {
    text: shapeText,
    color: availableColors[shapeTextIndex],
  };
  availableColors.splice(shapeTextIndex, 1);
  // generate number
  const number = randomNum();
  const numIndex = randomIndex(availableColors);
  piece.number = {
    text: number,
    color: availableColors[numIndex],
  };
  availableColors.splice(numIndex, 1);
  // generate shape
  const shape = SHAPES[randomIndex(SHAPES)];
  const shapeIndex = randomIndex(availableColors);
  piece.shape = {
    text: shape,
    color: availableColors[shapeIndex],
  };
  return piece;
};

const generatePuzzle = (numPieces) => {
  const pieces = [];
  // generate pieces array
  while (pieces.length < numPieces) {
    const displayNum = pieces.length + 1;
    const piece = generatePuzzlePiece();
    piece.displayNum = displayNum;
    pieces.push(piece);
  }
  // select random pieces
  let randomPiece1 = pieces[randomIndex(pieces)];
  let randomPiece2 = pieces[randomIndex(pieces)];

  while (randomPiece1.displayNum === randomPiece2.displayNum) {
    randomPiece2 = pieces[randomIndex(pieces)];
  }

  // select random questions
  const questionKeys = Object.keys(QUESTIONS);

  let questionIndex1 = randomIndex(questionKeys);
  let questionIndex2 = randomIndex(questionKeys);

  while (questionIndex1 === questionIndex2) {
    questionIndex2 = randomIndex(questionKeys);
  }

  const question1 = Object.keys(QUESTIONS)[questionIndex1];
  const question2 = Object.keys(QUESTIONS)[questionIndex2];
  const question = `${question1.toUpperCase()} (${
    randomPiece1.displayNum
  }) AND ${question2.toUpperCase()} (${randomPiece2.displayNum})`;

  // get answers
  const answer1 = QUESTIONS[question1](randomPiece1);
  const answer2 = QUESTIONS[question2](randomPiece2);

  const answer = `${answer1} ${answer2}`;

  // shuffle pieces array
  const shuffledPieces = shuffleArr(pieces);

  return {
    pieces: shuffledPieces,
    question,
    answer,
  };
};

export default generatePuzzle;
