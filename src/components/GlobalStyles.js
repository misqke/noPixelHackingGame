import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.colors.white}
}
*, *::after, *::before{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Chakra Petch', sans-serif;
}
`;
export default GlobalStyles;
