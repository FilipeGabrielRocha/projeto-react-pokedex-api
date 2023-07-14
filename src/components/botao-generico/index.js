import React, { useContext } from "react";

import { ThemeContext, temas } from "../../contexts/tema-contexto";

export const BotaoGenerico = (props) => {
  const { tema, setTema } = useContext(ThemeContext);
  console.log("BotaoGenerico - tema", tema);

  return <span onClick={() => setTema(tema === temas.light ? temas.dark : temas.light)} {...props} />;
};
