import { AppRoutes } from "./pages/routes";
import { PokemonList } from "./contexts/pokemons-context";

import "./App.css";

function App() {
  return (
    <div>
      <PokemonList>
        <AppRoutes />
      </PokemonList>
    </div>
  );
}

export default App;
