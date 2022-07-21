import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  background: #334;
}
*, *::after, *::before{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`;
export default GlobalStyles;
