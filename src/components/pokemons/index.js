import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

async function gerandoPokemons() {
  const maxPokemon = 10;
  const api = "https://pokeapi.co/api/v2/";
  const response = await fetch(`${api}pokemon?limit=${maxPokemon}`);
  const pokemons = await response.json();
  const urlsPokemons = pokemons.results.map((pokemon) => {
    return pokemon.url;
  });
  console.log(urlsPokemons);
  return urlsPokemons;
}

async function pegarPokemonDetalhes(id) {
  const api = "https://pokeapi.co/api/v2/";
  const response = await fetch(`${api}pokemon/${id}/`)
  return await response.json()
}

// async function detalhesPokemons(context) {
//   const urlsPokemons = async () => {
//     context.map(async (urlPokemon) => {
//       const response = await fetch(urlPokemon.toString());
//       return await response.json();
//     });
//   };
//   return urlsPokemons();
// }

export const PokemonsList = () => {
  const [pokemon, setPokemon] = useState({
    urlsPokemons: [],
  });

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const data = await gerandoPokemons();
      const data2 = await pegarPokemonDetalhes(id)
      console.log(data2);
      // const data = await detalhesPokemons(detalhePokemon);

      console.log("data, ", data);

      setPokemon({
        urlsPokemons: data,
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
