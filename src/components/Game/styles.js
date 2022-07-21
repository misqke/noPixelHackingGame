import styled from "styled-components";

export const PlayArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  max-height: 600px;
  background: ${({ theme }) => theme.gray};
`;

export const LoadingMsg = styled.div`
  display: flex;
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
  height: 50%;
  gap: 2rem;
  align-items: center;
`;

export const TimerArea = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 40%;
`;
export const QuestionText = styled.p`
  font-size: 1.5rem;
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
