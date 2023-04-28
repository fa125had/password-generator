import "./Input.css";
import React, { useState, useRef } from "react";
import { InputChecker } from "../InputChecker/InputChecker";
import { PasswordGenerator } from "../PasswordGenerator/PasswordGenerator";

export const Input = () => {
    const [input, setInput] = useState("");
    const [clipboard, setClipboard] = useState("");
    const inputRef = useRef(null);

    const handleInputChange = (newInput) => {
        setInput(() => newInput);
        setClipboard("");
    };

    const handleClipboardChange = (copiedText) => {
        setClipboard(() => copiedText);
    };

    const deleteUserInput = () => {
        setInput("");
        setClipboard("");
    };

    return (
        <div id="inputBox">
            <h2>{clipboard || "Your Password"}</h2>
            <span>
                <input
                    type="text"
                    id="userInput"
                    name="userInput"
                    maxLength="20"
                    placeholder="Here..."
                    value={input}
                    onChange={(e) => handleInputChange(e.target.value)}
                    ref={inputRef}
                />
                {input && (
                    <i className="fa-regular fa-trash-can" onClick={deleteUserInput}></i>
                )}
            </span>
            <InputChecker userInput={input} />
            <PasswordGenerator
                userInput={input}
                setUserInput={handleInputChange}
                inputRef={inputRef}
                clipboard={clipboard}
                copiedText={handleClipboardChange}
            />
        </div>
    );
};
