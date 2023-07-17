import { createContext, useState } from "react"

export const temas = {
    light: {
        backgroundColor: "#ffffff",
    },
    dark: {
        backgroundColor: "#2b3050",
    },
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ tema, setTema ] = useState(temas.light)

    return (
        <ThemeContext.Provider value={{tema, setTema}}>
            {props.children}
        </ThemeContext.Provider>
    )
}