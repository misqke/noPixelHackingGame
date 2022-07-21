import styled, { keyframes } from "styled-components";

const shrink = keyframes`
  0% {
    transform: scale(100%);
  }
  100% {
    transform: scale(0%);
  }
`;

export const PieceContainer = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => (props.active ? "#20242e" : "#fff")};
`;

export const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

export const PieceNumber = styled.div`
  font-size: 6rem;
  color: #fff;
  font-weight: 500;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: ${shrink};
  animation-duration: 2500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;
