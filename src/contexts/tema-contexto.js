import { createContext } from "react"

export const temas = {
    light: {
        backgroundImage: "../../public/img/fundo-principal.jpg",
    },
    dark: {

    },
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={{temas}}>
            {props.children}
        </ThemeContext.Provider>
    )
}