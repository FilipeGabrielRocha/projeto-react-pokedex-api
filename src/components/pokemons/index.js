import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

async function gerandoPokemons() {
  const limite = 10;
  const api = "https://pokeapi.co/api/v2/";
  const response = await fetch(`${api}pokemon?limit=${limite}`);
  const pokemons = await response.json();
  const nomesPokemons = pokemons.results.map((pokemon) => {
    return {
      nomePokemons: pokemon.name,
    };
  });
  return nomesPokemons;
}

async function detalhesPokemons(context) {
  const nomePokemon = context;
  const api = "https://pokeapi.co/api/v2/";
  const response = await fetch(`${api}pokemon/${nomePokemon}/`);
  console.log(nomePokemon);
  // return await response.json()
}

export const PokemonsList = () => {
  const [pokemon, setPokemon] = useState({
    testes: [],
    teste2: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await gerandoPokemons();
      const pokemons = await detalhesPokemons(data);

      // data.map(nomePokemon => {
      //   console.log(nomePokemon.name);
      // })

      // console.log('data, ', data);
      // console.log('pokemon, ', pokemons);

      setPokemon({
        testes: data,
        teste2: pokemons,
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
