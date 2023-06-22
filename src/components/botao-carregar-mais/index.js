export const BotaoCarregarMais = ({CarregarMais, limite, detalhesPokemons}) => {
  return (
    <div
      onClick={() => CarregarMais(limite, detalhesPokemons)}
      className="pokemons-pokemon"
    >
      <p className="pokemons-nome">Carregar mais</p>
    </div>
  );
};
