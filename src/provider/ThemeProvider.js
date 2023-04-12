import {createContext, useContext, useState} from "react";

const ThemeContext = createContext(undefined);

function ThemeProvider({child}) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(prevState => prevState === 'light' ? 'dark' : 'light');
    }

    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
          {child}
      </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext);
export default ThemeProvider;