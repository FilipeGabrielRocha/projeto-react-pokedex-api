import { createContext, useState } from "react";

async function gerandoPokemons() {
  const maxPokemon = 2;
  const api = "https://pokeapi.co/api/v2/";
  const response = await fetch(`${api}pokemon?limit=${maxPokemon}`);
  const pokemons = await response.json();
  return pokemons.results
//   const urlsPokemons = pokemons.results.map((pokemon) => {
//     return pokemon;
//   });
//   return urlsPokemons;
}


export const nomesPokemons = [
    await gerandoPokemons()
]

export const PokemonsContext = createContext([])

export const PokemonsUrls = (props) => {
    const [ pokemons, setPokemons ] = useState({
        urlsPokemons: nomesPokemons[0]
    })

    return (
        <PokemonsContext.Provider value={{pokemons, setPokemons}}>
            {props.children}
        </PokemonsContext.Provider>
    )
}