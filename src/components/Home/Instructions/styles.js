import styled from "styled-components";

export const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: #000;
  padding: 1rem;
  overflow-y: scroll;
`;

export const Italics = styled.i`
  font-size: 1rem;
  max-width: 40ch;
  text-align: center;
`;

export const InstructionsText = styled.p`
  font-size: ${(props) => props.size || "1rem"};
  max-width: 55ch;
  text-align: center;
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 3;
  color: #fff;
  font-size: 2rem;
  background: none;
  border: none;
  transition-duration: 200ms;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.lgray};
  }
`;

export const InstructionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.gap || "1rem"};
  border: ${(props) => (props.border ? "1px solid #fff" : "none")};
`;

export const InstructionCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap || "1rem"};
  border: ${(props) => (props.border ? "1px solid #fff" : "none")};
  padding: ${(props) => (props.border ? "1rem 2rem" : "0rem")};
`;

export const NumBoxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  min-height: 100px;
  background: ${({ theme }) => theme.gray};
  font-size: 4rem;
  border: 1px solid #fff;
`;
