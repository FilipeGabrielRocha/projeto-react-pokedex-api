import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PokemonsList } from "../components/pokemons";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route extac path="/" element={<PokemonsList />} />
      </Routes>
    </BrowserRouter>
  );
};
