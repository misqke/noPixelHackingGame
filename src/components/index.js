import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import GameBoard from "./Game";

import Home from "./Home";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export { GlobalStyles, Page, Home, GameBoard };
