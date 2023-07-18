import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

// async function limitPokemons(limite) {
//   const api = "https://pokeapi.co/api/v2/";
//   const response = await fetch(`${api}pokemon?limit=${limite}`);
//   const data = await response.json();
//   return data.results;
// }

const pokemonsDetalhes = async (pokemonNome) => {
  const api = "https://pokeapi.co/api/v2/";
  const response = await fetch(`${api}pokemon/${pokemonNome}`);
  return await response.json();
};

export const PokemonDetalhe = () => {
  const [pokemonDetalhe, setPokemonDetalhe] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const pokemonDetalhe = await pokemonsDetalhes(id);
      const pokemonImagem = pokemonDetalhe.sprites.front_default;
      console.log(pokemonDetalhe.sprites.front_default);
      setPokemonDetalhe(pokemonDetalhe);
    }

    fetchData();
  }, [id]);

  return (
    <section>
      <h1>Pokemons Detalhes</h1>
      {pokemonDetalhe.name}
      <img
        src={pokemonDetalhe.sprites.front_default}
        alt={`imagem ${pokemonDetalhe.name}`}
      />
    </section>
  );
};
