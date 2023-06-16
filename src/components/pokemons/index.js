import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PokemonsContext } from "../../contexts/pokemons-context";

// async function pegarPokemonDetalhes(id) {
//   const api = "https://pokeapi.co/api/v2/";
//   const response = await fetch(`${api}pokemon/${id}/`)
//   return await response.json()
// }

export const PokemonsList = () => {

  const { pokemons, setPokemons } = useContext(PokemonsContext)

  console.log(pokemons);

  async function detalhesPokemons(context) {
    const urlsPokemons = async () => {
      context.map(async (urlPokemon) => {
        const response = await fetch(urlPokemon.toString());
        return await response.json();
      });
    };
    return urlsPokemons();
  }

  // const somar = () => {
  //   const limite += 10
  //   return limite
  // };

  // const maisPokemons = async () => {
  //   const limite = 0;
  //   const data = await gerandoPokemons(limite);

  //   setPokemon({
  //     testes: data.results,
  //   });
  // };

  return (
    <section>
      <h1>Lista de pokemons</h1>
      {/* <ul>
        {pokemon.urlsPokemons.map((teste, index) => {
          return (
            <li key={index}>
              <Link>
                <p>{teste}</p>
              </Link>
            </li>
          );
        })}
      </ul> */}
      {/* <button onClick={() => maisPokemons()}>Carregar Mais</button> */}
    </section>
  );
};
