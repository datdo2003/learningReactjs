import {useRef, useState} from "react";

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    console.log("DAT DAT");
    console.log(useRef(null));
    console.log(useState(0));

    function onButtonClick() {
        inputEl.current.focus();
    }

    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}

export default TextInputWithFocusButton;