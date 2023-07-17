import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BotaoCarregarMais } from "../botao-carregar-mais";
import { BarraDeNavegacao } from "../barra-de-navegacao";
import { ThemeContext } from "../../contexts/tema-contexto";

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
  const { tema } = useContext(ThemeContext);
  // console.log("pokemonslist", tema);

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
    }

    fetchData();
  };

  return (
    <Section style={{ backgroundColor: tema.backgroundColor }}>
      <BarraDeNavegacao />
      <PokemonsLista>
        {pokemon.pokemonsList.map((pokemon, index) => {
          return (
            <Link key={index} to={"/pokemon-detalhe"}>
              <PokemonsPokemon>
                <PokemonsDetalhes>
                  <PokemonsNomesTipos>
                    <PokemonsNome>{pokemon.name}</PokemonsNome>
                    {pokemon.types.map((tipos, index) => {
                      return (
                        <PokemonsTipos key={index}>
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
  flex-wrap: wrap;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  background-image: url(${require("../../assets/img/fundo-principal.png")});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  *::-webkit-scrollbar {
    width: 14px;
  }

  *::-webkit-scrollbar-track {
    background: #b21613;
    border-radius: 20px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 20px;
    border: 3px solid #b21613;
  }
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
  margin-top: 80px;
`;

const PokemonsPokemon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #32325d40 0px 30px 60px -12px inset,
    #0000004d 0px 18px 36px -18px inset;
  height: 160px;
  width: 250px;
  padding: 20px;
  background: rgb(34, 255, 0);
  background: linear-gradient(
    135deg,
    rgba(35, 210, 8, 1) 0%,
    rgba(10, 230, 209, 1) 35%,
    rgba(203, 9, 231, 1) 100%
  );
  border: 5px solid #bab8b5;
  border-radius: 25px;
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
  left: 20px;
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
`;

const PokemonsImagem = styled.img`
  display: flex;
  position: absolute;
  top: 13px;
  right: -8px;
  width: 150px;
`;
