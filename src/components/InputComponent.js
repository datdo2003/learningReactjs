import {useState} from "react";

function InputComponent() {
    const [inputText, setText] = useState('Hello');

    function handleChange(e) {
        setText(e.target.value)
    }

    return (
      <div>
          <p>You typed: {inputText}</p>
          <label>Input:</label>
          <input value={inputText} onChange={handleChange}/>
          <button onClick={() => setText('Hello')}>Reset</button>
      </div>
    );
}

export default InputComponent;