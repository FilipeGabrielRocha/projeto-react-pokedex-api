import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/tema-contexto";

export const BotaoGenerico = (props) => {
  const { tema } = useContext(ThemeContext);

  return <span {...props} />;
};
