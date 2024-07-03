import { createContext, useState } from "react";

export const themeContext = createContext("light");

export const ThemeProvider = ({children}) => {

    //Estado que guarda o valor do tema.
    const [theme, setTheme] = useState("light");

    //função que altera o valor do tema.
    const togleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <themeContext.Provider value={{theme, togleTheme }}>
            {children}
        </themeContext.Provider>
    )
}