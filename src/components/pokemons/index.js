import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./index.css";

import { BotaoCarregarMais } from "../botao-carregar-mais";

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

const setLimite = () => {
  const limite = 10;
  return limite;
};

export const PokemonsList = () => {
  const [pokemon, setPokemon] = useState({
    limite: 0,
    pokemonsList: [],
  });

  useEffect(() => {
    async function fetchData() {
      const limitePokemons = setLimite();
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

  const CarregarMaisPokemons = (limite) => {
    async function fetchData() {
      const limitePokemons = limite + 10;
      const data = await limitPokemons(limitePokemons);
      const nomesPokemons = data.map((pokemon) => {
        return pokemon.name;
      });

      const detalhesPokemons = [];

      for (const pokemon of nomesPokemons) {
        const detalhes = await pokemonsDetalhes(pokemon);
        detalhesPokemons.push(detalhes);
      }

      setPokemon({
        limite: limitePokemons,
        pokemonsList: detalhesPokemons,
      });

      console.log(detalhesPokemons);
    }

    fetchData();
  };

  return (
    <Section>
      <PokemonsLista>
        {pokemon.pokemonsList.map((pokemon, index) => {
          return (
            <Link key={index}>
              <PokemonsPokemon className={["type_" + pokemon.types[0].type.name]} key={index}>
                <PokemonsDetalhes>
                  <PokemonsNomesTipos>
                    <PokemonsNome>{pokemon.name}</PokemonsNome>
                    {pokemon.types.map((tipos, index) => {
                      return (
                        <PokemonsTipos className={["type_" + tipos.type.name]} key={index}>
                          {tipos.type.name}
                        </PokemonsTipos>
                      );
                    })}
                  </PokemonsNomesTipos>
                </PokemonsDetalhes>
                <PokemonsImagem
                  src={pokemon.sprites.front_default}
                  alt={`imagem ${pokemon.name}`}
                />
              </PokemonsPokemon>
            </Link>
          );
        })}
        <BotaoCarregarMais
          limite={pokemon.limite}
          CarregarMais={CarregarMaisPokemons}
        />
      </PokemonsLista>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  background-image: url("../img/fundo-principal.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const PokemonsLista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  width: 1400px;
  height: 545px;
  gap: 20px;
  overflow-y: auto;
`;

const PokemonsPokemon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: rgb(199, 0, 0);
  box-shadow: #32325d40 0px 30px 60px -12px inset,
    #0000004d 0px 18px 36px -18px inset;
  height: 160px;
  width: 250px;
  padding: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const PokemonsDetalhes = styled.div`
  display: flex;
  position: absolute;
  left: 30px;
  top: 35px;
`;

const PokemonsNomesTipos = styled.div`
  display: flex;
  flex-direction: column;
`;

const PokemonsNome = styled.p`
  text-transform: capitalize;
  color: #ffffff;
  margin-bottom: 7px;
  font-size: 2rem;
`;

const PokemonsTipos = styled.p`
  display: flex;
  align-self: flex-start;
  padding: 3px 10px;
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 5px;
  text-transform: capitalize;
  border-radius: 9px;
  color: #ffffff;
  background-color: #c4c4c471;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const PokemonsImagem = styled.img`
  position: absolute;
  top: 13px;
  right: -3px;
  width: 150px;
`;