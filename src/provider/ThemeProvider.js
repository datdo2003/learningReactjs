import {createContext, useContext, useState} from "react";

const ThemeContext = createContext();

// REMEMBER: DO NOT change the var children to any other values because it WON'T work
function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');
    function toggleTheme() {
        console.log("toggleTheme called")
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);
export default ThemeProvider;