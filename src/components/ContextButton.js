import {useThemeContext} from "../provider/ThemeProvider";

function ContextButton() {
    const {theme} = useThemeContext();
    console.log("DAT DAT DAT: " + theme);
    return (
        <div>
            <h1>This is context button</h1>
            {/*<h1>Current theme is {theme}</h1>*/}
            {/*<button onClick={toggleTheme}>Switch theme</button>*/}
        </div>
    )
}

export default ContextButton;