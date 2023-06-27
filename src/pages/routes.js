import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Pokemons } from "./pokemons";
import { PaginaContatos } from "./contato";
import { PokemonsDetalhes } from "./pokemonDetalhe";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route extac path="/" element={<Pokemons />} />
        <Route extac path="/contatos" element={<PaginaContatos />} />
        <Route extac path="/pokemon-detalhe" element={<PokemonsDetalhes />} />
      </Routes>
    </BrowserRouter>
  );
};
