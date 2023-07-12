import { createContext } from "react"

export const temas = {
    light: {
        
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