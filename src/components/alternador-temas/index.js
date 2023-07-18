import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext, temas } from "../../contexts/tema-contexto";
import { BotaoGenerico } from "../botao-generico";

export const AlternadorTemas = () => {
  const { tema, setTema } = useContext(ThemeContext);

  return (
    <div>
      <BotaoGenerico>
        <Checkbox onClick={() => setTema(tema === temas.light ? temas.dark : temas.light)} type="checkbox" id="chk" />

        <Label htmlFor="chk">
          <TamEmoticon>☀️</TamEmoticon>
          <TamEmoticon>🌙</TamEmoticon>
          <Bola></Bola>
        </Label>
      </BotaoGenerico>
    </div>
  );
};

const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
`;

const Label = styled.label`
  background-color: #111;
  border-radius: 50px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px;
  position: relative;
  height: 26px;
  width: 50px;
  transform: scale(1.3);
`;

const Bola = styled.div`
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transform: translateX(0px);
  transition: transform 0.2s linear;

  ${Checkbox}:checked + ${Label} & {
    transform: translateX(24px);
  }
`;

const TamEmoticon = styled.span`
  transform: scale(1.5);
`;
