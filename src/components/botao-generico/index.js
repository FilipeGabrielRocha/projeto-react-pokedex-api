import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/tema-contexto";

export const BotaoGenerico = (props) => {
  const { temas } = useContext(ThemeContext);
  console.log("BotaoGenerico - temas", temas);

  return <span {...props} />;
};
