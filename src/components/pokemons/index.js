import { useEffect, useState } from "react";

async function gerandoPokemons(limite) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limite}`
  );
  return await response.json();
}

export const PokemonsList = () => {
  const [pokemon, setPokemon] = useState({
    testes: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const limite = 10;
      const data = await gerandoPokemons(limite);

      console.log(data.results);

      setPokemon({
        testes: data.results,
      });
    };

    fetchData();
  }, []);

  const somar = () => {
    const limite += 10
    return limite
  };

  const maisPokemons = async () => {
    const limite = 0
    const data = await gerandoPokemons(limite)

    setPokemon({
        testes: data.results
    })
  };

  return (
    <section>
      <h1>Lista de pokemons</h1>
      <ul>
        {pokemon.testes.map((teste, index) => {
          return (
            <li key={index}>
              <p>{teste.name}</p>
              <p>{teste.url}</p>
            </li>
          );
        })}
      </ul>
      <button onClick={() => maisPokemons()}>Ver mais pokemons</button>
    </section>
  );
};
