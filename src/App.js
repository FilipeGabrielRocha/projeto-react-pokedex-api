import { AlternadorTemas } from "./components/alternador-temas";
import { ThemeProvider } from "./contexts/tema-contexto";

import { AppRoutes } from "./pages/routes";

import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </div>
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
`;

export default App;
