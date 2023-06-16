import { createContext, useState } from "react";

async function gerandoPokemons() {
  const maxPokemon = 20;
  const api = "https://pokeapi.co/api/v2/";
  const response = await fetch(`${api}pokemon?limit=${maxPokemon}`);
  const pokemons = await response.json();
  const urlsPokemons = pokemons.results.map((pokemon) => {
    return pokemon.url;
  });
  return urlsPokemons;
}


export const nomesPokemons = [
    await gerandoPokemons()
]

export const PokemonsContext = createContext([])

export const PokemonList = (props) => {
    const [ pokemons, setPokemons ] = useState({
        urlsPokemons: nomesPokemons[0]
    })

    return (
        <PokemonsContext.Provider value={{pokemons, setPokemons}}>
            {props.children}
        </PokemonsContext.Provider>
    )
}