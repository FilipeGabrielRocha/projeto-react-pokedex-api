import styled from "styled-components";

export const BotaoCarregarMais = ({ CarregarMais, limite }) => {
  return (
    <PokemonsPokemon onClick={() => CarregarMais(limite)}>
      <PokemonsNome>+</PokemonsNome>
    </PokemonsPokemon>
  );
};

const PokemonsPokemon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c0c0c09f;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const PokemonsNome = styled.p`
  color: #ffffff;
  font-size: 10rem;
`;
