export const COLORS = [
  { color: "black", code: "#000000" },
  { color: "white", code: "#ffffff" },
  { color: "blue", code: "#2195ee" },
  { color: "red", code: "#9b0100" },
  { color: "yellow", code: "#fceb3d" },
  { color: "orange", code: "#fd9802" },
  { color: "green", code: "#4cae4f" },
  { color: "purple", code: "#9926ac" },
];

export const SHAPES = ["square", "triangle", "rectangle", "circle"];

export const QUESTIONS = {
  "background color": (p) => p.background.color,
  "color text background color": (p) => p.colorText.color.color,
  "shape text background color": (p) => p.shapeText.color.color,
  "number color": (p) => p.number.color.color,
  "shape color": (p) => p.shape.color.color,
  "color text": (p) => p.colorText.text,
  "shape text": (p) => p.shapeText.text,
  "shape": (p) => p.shape.text,
};

export const samplePuzzlePieces = [
  {
    background: { code: "#9b0100", color: "red" },
    colorText: {
      color: { code: "#4cae4f", color: "green" },
      text: "white",
    },
    displayNum: 4,
    number: {
      color: { code: "#fceb3d", color: "yellow" },
      text: 4,
    },
    shape: {
      text: "triangle",
      color: { code: "#9926ac", color: "purple" },
    },
    shapeText: {
      text: "circle",
      color: { code: "#ffffff", color: "white" },
    },
  },
  {
    background: { code: "#ffffff", color: "white" },
    colorText: {
      color: { code: "#2195ee", color: "blue" },
      text: "green",
    },
    displayNum: 2,
    number: {
      color: { code: "#9926ac", color: "purple" },
      text: 8,
    },
    shape: {
      text: "rectangle",
      color: { code: "#4cae4f", color: "green" },
    },
    shapeText: {
      text: "rectangle",
      color: { code: "#fceb3d", color: "yellow" },
    },
  },
  {
    background: { code: "#fceb3d", color: "yellow" },
    colorText: {
      color: { code: "#9926ac", color: "purple" },
      text: "blue",
    },
    displayNum: 3,
    number: {
      color: { code: "#000000", color: "black" },
      text: 4,
    },
    shape: {
      text: "circle",
      color: { code: "#ffffff", color: "white" },
    },
    shapeText: {
      text: "square",
      color: { code: "#9b0100", color: "red" },
    },
  },
  {
    background: { code: "#4cae4f", color: "green" },
    colorText: {
      color: { code: "#fceb3d", color: "yellow" },
      text: "orange",
    },
    displayNum: 4,
    number: {
      color: { code: "#ffffff", color: "white" },
      text: 1,
    },
    shape: {
      text: "circle",
      color: { code: "#fd9802", color: "orange" },
    },
    shapeText: {
      text: "triangle",
      color: { code: "#2195ee", color: "blue" },
    },
  },
];
