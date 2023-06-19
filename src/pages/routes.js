import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Pokemons } from "./pokemons";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route extac path="/" element={<Pokemons />} />
      </Routes>
    </BrowserRouter>
  );
};
