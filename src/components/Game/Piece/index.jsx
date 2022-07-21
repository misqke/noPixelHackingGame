import React, { useEffect, useRef } from "react";
import { PieceContainer, Canvas, PieceNumber } from "./styles";

const SIZE = 225;

const Piece = ({ piece, active }) => {
  const canvasRef = useRef();

  useEffect(() => {
    // set up canvas
    const canvas = canvasRef.current;
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext("2d");

    // background color
    ctx.fillStyle = piece.background.code;
    ctx.fillRect(0, 0, SIZE, SIZE);

    // draw shape
    const shape = piece.shape.text;
    ctx.fillStyle = piece.shape.color.code;
    if (shape === "square") {
      ctx.fillRect(SIZE * 0.15, SIZE * 0.15, SIZE * 0.7, SIZE * 0.7);
    } else if (shape === "rectangle") {
      ctx.fillRect(SIZE * 0.05, SIZE * 0.22, SIZE * 0.9, SIZE * 0.56);
    } else if (shape === "circle") {
      ctx.beginPath();
      ctx.arc(SIZE / 2, SIZE / 2, SIZE * 0.4, 0, Math.PI * 2, true);
      ctx.fill();
    } else if (shape === "triangle") {
      ctx.beginPath();
      ctx.moveTo(SIZE * 0.1, SIZE * 0.85);
      ctx.lineTo(SIZE * 0.9, SIZE * 0.85);
      ctx.lineTo(SIZE / 2, SIZE * 0.15);
      ctx.fill();
    }

    // write text
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = "#000";
    ctx.strokeWidth = "5px";
    ctx.font = "800 30px sans-serif";
    ctx.fillStyle = piece.colorText.color.code;
    ctx.strokeText(piece.colorText.text.toUpperCase(), SIZE / 2, SIZE * 0.32);
    ctx.fillText(piece.colorText.text.toUpperCase(), SIZE / 2, SIZE * 0.32);

    ctx.fillStyle = piece.shapeText.color.code;
    ctx.strokeText(piece.shapeText.text.toUpperCase(), SIZE / 2, SIZE * 0.68);
    ctx.fillText(piece.shapeText.text.toUpperCase(), SIZE / 2, SIZE * 0.68);

    ctx.fillStyle = piece.number.color.code;
    ctx.font = "500 80px sans-serif";
    ctx.strokeText(piece.number.text, SIZE / 2, SIZE / 2);
    ctx.fillText(piece.number.text, SIZE / 2, SIZE / 2);
  }, [piece]);

  return (
    <PieceContainer active={active}>
      <Canvas ref={canvasRef} active={active} />

      <PieceNumber>{piece.displayNum}</PieceNumber>
    </PieceContainer>
  );
};

export default Piece;
