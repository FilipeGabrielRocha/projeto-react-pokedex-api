import { useEffect, useState } from "react";

async function limitPokemons(limite) {
  const api = "https://pokeapi.co/api/v2/";
  const response = await fetch(`${api}pokemon?limit=${limite}`);
  const data = await response.json();
  return data.results;
}

const pokemonsDetalhes = async (pokemonNome) => {
  const api = "https://pokeapi.co/api/v2/";
  const response = await fetch(`${api}pokemon/${pokemonNome}`);
  const data = await response.json();
  return data;
};

export const PokemonsList = () => {
  const [pokemon, setPokemon] = useState({
    limite: 10,
    pokemonsList: [],
  });

  useEffect(() => {
    async function fetchData() {
      const data = await limitPokemons(pokemon.limite);
      const nomesPokemons = data.map((pokemon) => {
        return pokemon.name;
      });

      const detalhesPokemons = [];

      for (const pokemon of nomesPokemons) {
        const detalhes = await pokemonsDetalhes(pokemon);
        detalhesPokemons.push(detalhes);
      }

      console.log(detalhesPokemons);

      setPokemon({
        limite: 10,
        pokemonsList: detalhesPokemons,
      });
    }

    fetchData();
  }, [pokemon.limite]);

  return (
    <section>
      <h1>Listagem de Pokemons</h1>
      <ul>
        {pokemon.pokemonsList.map((pokemon, index) => {
          return (
            <li key={index}>
                <img src={pokemon.sprites.front_default} alt={`imagem ${pokemon.name}`} />
              <p>{pokemon.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
