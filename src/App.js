import { ThemeProvider } from "./contexts/tema-contexto";

import { AppRoutes } from "./pages/routes";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`

  * {
      list-style-type: none;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      text-decoration: none;
      color: black;
      position: relative;
  }
  
  html {
      font-size: 62.5%;
      font-family: 'Montserrat', sans-serif;
  }

  body {
    transition: background .2s linear;
  }
`;

export default App;
