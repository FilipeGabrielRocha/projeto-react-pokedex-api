import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PokemonsContext } from "../../contexts/pokemons-urls-context";

// async function pegarPokemonDetalhes(id) {
//   const api = "https://pokeapi.co/api/v2/";
//   const response = await fetch(`${api}pokemon/${id}/`)
//   return await response.json()
// }

async function detalhesPokemons(context) {
  // const pokemon = [];
  const teste = context.urlsPokemons.map(async (cont) => {
    const response = await fetch(cont.url.toString());
    return [
      await response.json()
    ];
    // console.log(await response.json());
  });
  return await teste
}

export const PokemonsList = () => {
  const { pokemons, setPokemons } = useContext(PokemonsContext);

  console.log("pokemons component", pokemons);

  useEffect(() => {
    const fetchData = async () => {
      // const deckId = await createDeck();
      const data = await detalhesPokemons(pokemons);
      console.log("data", data);

      // setDeck({
      //   cards: data.cards,
      // });
    };

    fetchData();
  }, [pokemons]);

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
