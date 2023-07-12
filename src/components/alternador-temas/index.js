import React, { useContext } from "react"

import { ThemeContext } from "../../contexts/tema-contexto"
import { BotaoGenerico } from "../botao-generico";

export const AlternadorTemas = () => {

    const { temas } = useContext(ThemeContext)
    console.log('AlternadorTemas', temas);

    return (
        <div>
            <BotaoGenerico>Clique Aqui</BotaoGenerico>
        </div>
    )
}
