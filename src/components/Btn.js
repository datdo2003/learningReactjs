function Btn() {
    const handleClick = () => {
        console.log("Button clicked")
    };

    function handleMouseOver() {
        console.log("Mouse hover over")
    }

    // return (<button onClick={handleClick}>Click me</button>)
    return (<button onMouseOver={handleMouseOver}>
        Hover over me
    </button>)
}

export default Btn;