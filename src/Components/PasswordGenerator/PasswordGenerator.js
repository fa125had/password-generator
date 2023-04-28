import "./PasswordGenerator.css";
import React from "react";
import { CopyToClipboard } from "../CopyToClipboard/CopyToClipboard";

export const PasswordGenerator = (props) => {
    const generateRandomPassword = () => {
        props.setUserInput("");

        const digits = "0123456789";
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const symbols = "!@#$%^&*()_+-=[]{};:,.<>/?";
        let randomString = "";

        // Add 2 random digits
        randomString += digits[Math.floor(Math.random() * digits.length)];
        randomString += digits[Math.floor(Math.random() * digits.length)];

        // Add 2 random capital letters
        randomString += letters[
            Math.floor(Math.random() * letters.length)
        ].toUpperCase();
        randomString += letters[
            Math.floor(Math.random() * letters.length)
        ].toUpperCase();

        // Add 2 random symbols
        randomString += symbols[Math.floor(Math.random() * symbols.length)];
        randomString += symbols[Math.floor(Math.random() * symbols.length)];

        // Add random characters until the string reaches length 20
        while (randomString.length < 20) {
            const randomChar = digits.concat(letters).concat(symbols)[
                Math.floor(
                    Math.random() * (digits.length + letters.length + symbols.length)
                )
            ];
            randomString += randomChar;
        }
        props.setUserInput(randomString);
    };

    return (
        <div id="passwordGenerator">
            <button id="generatePassBtn" onClick={generateRandomPassword}>
                Generate a new Password
            </button>
            <CopyToClipboard
                userInput={props.userInput}
                inputRef={props.inputRef}
                copiedText={props.copiedText}
            />
        </div>
    );
};
