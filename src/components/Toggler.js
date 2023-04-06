function Toggler() {
    let darkModeOn = true;
    let darkMode = "Dark mode is on";
    const lightMode = "Light mode is on"

    function clickHandler() {
        darkModeOn = !darkModeOn;
        if (darkModeOn) {
            console.log(darkMode);
        } else {
            console.log(lightMode);
        }
    }

    return (
        <div>
            <button onClick={clickHandler}>Click me</button>
            { darkModeOn ? darkMode : lightMode}
        </div>
    )
}

export default Toggler;