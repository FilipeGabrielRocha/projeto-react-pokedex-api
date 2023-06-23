import { AppRoutes } from "./pages/routes";

import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

* {
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: black;
}

html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
}
`;

export default App;
