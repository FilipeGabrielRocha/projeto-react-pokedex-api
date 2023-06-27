import styled from "styled-components";

export const BotaoCarregarMais = ({ CarregarMais, limite }) => {
  return (
    <PokemonsPokemon onClick={() => CarregarMais(limite)}>
      <PokemonsNome>Carregar mais</PokemonsNome>
    </PokemonsPokemon>
  );
};

const PokemonsPokemon = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #BE2414;
  box-shadow: #32325d40 0px 30px 60px -12px inset,
    #0000004d 0px 18px 36px -18px inset;
  height: 160px;
  width: 250px;
  padding: 20px;
  border-radius: 25px;
  border: 2px solid #2B3050;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const PokemonsNome = styled.p`
  text-transform: capitalize;
  color: #ffffff;
  margin-bottom: 7px;
  font-size: 2rem;
`;
