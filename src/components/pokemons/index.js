import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

import { BotaoCarregarMais } from "../botao-carregar-mais";

async function limitPokemons(limite) {
  // const limite = 10
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

const setLimite = () => {
  const limite = 10
  return limite
}

export const PokemonsList = () => {
  const [pokemon, setPokemon] = useState({
    limite: 0,
    pokemonsList: [],
  });

  useEffect(() => {
    async function fetchData() {
      const limitePokemons = setLimite()
      const data = await limitPokemons(limitePokemons);
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
        limite: limitePokemons,
        pokemonsList: detalhesPokemons,
      });
    }

    fetchData();
  }, []);

  const testeDeFuncao = (limite, detalhesPokemons) => {
    console.log(`O limite é: ${limite}`);
    setPokemon({
      limite: limite + 10,
      pokemonsList: detalhesPokemons,
    })
    console.log(`Agora o limite é: ${limite}`);
  }

  return (
    <section className="pokemons-container">
      <ul className="pokemons-lista">
        {pokemon.pokemonsList.map((pokemon, index) => {
          return (
            <Link key={index}>
              <li className="pokemons-pokemon" key={index}>
                <div className="pokemons-detalhes">
                  <div className="pokemons-nomes-tipos">
                    <p className="pokemons-nome">{pokemon.name}</p>
                    {pokemon.types.map((tipos, index) => {
                      return (
                        <p className="pokemons-tipos" key={index}>
                          {tipos.type.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <img
                  className="pokemons-imagem"
                  src={pokemon.sprites.front_default}
                  alt={`imagem ${pokemon.name}`}
                />
              </li>
            </Link>
          );
        })}
        <BotaoCarregarMais detalhesPokemons={pokemon.pokemonsList} limite={pokemon.limite} CarregarMais={testeDeFuncao}/>
      </ul>
    </section>
  );
};
