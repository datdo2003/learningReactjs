import {useState} from "react";

function InputComponent() {
    let [counter, setCounter] = useState(0);

    function handleIncrease() {
        setCounter(counter + 1)
    }


    function handleDescrease() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDescrease}>Decrease</button>
        </div>
    )
}

export default InputComponent;