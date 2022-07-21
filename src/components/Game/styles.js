import styled, { keyframes } from "styled-components";

const timerAnim = keyframes`
  0% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 100%);
  }
  5% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 95%);
  }
  10% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 90%);
  }
  15% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 85%);
  }
  20% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 80%);
  }
  25% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 75%);
  }
  30% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 70%);
  }
  35% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 65%);
  }
  40% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 60%);
  }
  45% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 55%);
  }
  50% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 50%);
  }
  55% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 45%);
  }
  60% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 40%);
  }
  65% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 35%);
  }
  70% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 30%);
  }
  75% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 25%);
  }
  80% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 20%);
  }
  85% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 15%);
  }
  90% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 10%);
  }
  95% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 05%);
  }
  100% {
    background: radial-gradient(circle at center, #0f0 0, #0f00 1%);
  }
`;

export const PlayArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  width: 90%;
  height: 85%;

  background: ${({ theme }) => theme.gray};
  gap: 1rem;
`;

export const LoadingMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.25rem;
  color: #fff;
`;

export const PiecesRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

export const TimerArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const Timer = styled.div`
  display: flex;
  width: 90%;
  height: 1rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  animation: ${timerAnim};
  animation-duration: ${(props) => props.timeLimit};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  height: 40%;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;
export const QuestionText = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const GuessInput = styled.input`
  width: 250px;
  border: none;
  text-align: center;
  outline: none;
  border-bottom: 1px solid #fff;
  background: none;
  font-size: 1.5rem;
  color: #fff;
  padding: 0.25rem;
`;

export const GameOver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.gray};
  gap: 1rem;
`;

export const GameOverText = styled.p`
  font-size: ${(props) => props.size || 1.25}rem;
  font-weight: 600;
  z-index: 3;
`;

export const IconContainer = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 75px;
`;

export const Btn = styled.button`
  width: 200px;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #fff;
  cursor: pointer;
  background: ${({ theme }) => theme.lgray};
  color: #fff;
  font-weight: 600;
  transition-duration: 200ms;
  &:hover {
    background-color: ${({ theme }) => theme.dark};
  }
`;
