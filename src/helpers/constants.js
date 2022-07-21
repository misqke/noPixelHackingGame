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
  "shape text bbackground color": (p) => p.shapeText.color.color,
  "number color": (p) => p.number.color.color,
  "shape color": (p) => p.shape.color.color,
  "color text": (p) => p.colorText.text,
  "shape text": (p) => p.shapeText.text,
  "shape": (p) => p.shape.text,
};
