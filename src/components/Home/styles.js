import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  position: relative;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const RangeSelector = styled.input``;

export const PlayBtn = styled.button`
  width: 200px;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #fff;
  color: #fff;
  background: ${({ theme }) => theme.lgray};
  cursor: pointer;
  transition-duration: 200ms;
  font-weight: 600;
  &:hover {
    background: ${({ theme }) => theme.gray};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.25rem;
`;
