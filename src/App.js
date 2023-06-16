import { AppRoutes } from "./pages/routes";
import { PokemonsUrls } from "./contexts/pokemons-urls-context";

import "./App.css";

function App() {
  return (
    <div>
      <PokemonsUrls>
        <AppRoutes />
      </PokemonsUrls>
    </div>
  );
}

export default App;
