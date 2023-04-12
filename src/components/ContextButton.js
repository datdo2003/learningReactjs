import {useThemeContext} from "../provider/ThemeProvider";

function ContextButton() {
    const [theme, toggleTheme] = useThemeContext();
    return (
        <div>
            <h1>Current theme is {theme}</h1>
            <button onClick={toggleTheme}>Switch theme</button>
        </div>
    )
}

export default ContextButton;