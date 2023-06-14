import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

async function gerandoPokemons() {
  const maxPokemon = 10;
  const api = "https://pokeapi.co/api/v2/";
  const response = await fetch(`${api}pokemon?limit=${maxPokemon}`);
  const pokemons = await response.json();
  const nomesPokemons = pokemons.results.map((pokemon) => {
    return pokemon.name;
  });
  return nomesPokemons;
}

// async function detalhesPokemons(context) {
//   const api = "https://pokeapi.co/api/v2/";
//   const nomesPokemons = context.map(pokemon => {
//     return fetch(`${api}pokemon/${pokemon}/`)
//   })
//   // const response = ;
//   console.log(await nomesPokemons);
//   // return await response.json()
// }

export const PokemonsList = () => {
  const [pokemon, setPokemon] = useState({
    nomesPokemons: [gerandoPokemons()],
    teste2: [],
  });

  async function detalhesPokemons() {
    const api = "https://pokeapi.co/api/v2/";
    const nomesPokemons = pokemon.nomesPokemons.map((pokemon) => {
      return `${api}pokemon/${pokemon}/`;
    });
    console.log(await nomesPokemons);
  }

  detalhesPokemons();

  useEffect(() => {
    const fetchData = async () => {
      const data = await gerandoPokemons();
      // const pokemons = await detalhesPokemons(data);

      console.log("data, ", data);

      setPokemon({
        nomesPokemons: data,
        // teste2: pokemons,
      });
    };

    fetchData();
  }, []);

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
        {pokemon.testes.map((teste, index) => {
          return (
            <li key={index}>
              <Link to={teste.url}>
                <p>{teste.name}</p>
              </Link>
            </li>
          );
        })}
      </ul> */}
      {/* <button onClick={() => maisPokemons()}>Carregar Mais</button> */}
    </section>
  );
};
