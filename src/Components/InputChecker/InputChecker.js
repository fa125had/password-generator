import React from "react";

export const InputChecker = ({ userInput }) => {
    const hasTwentyCharacters = (input) => {
        return /^.{20,}$/.test(input);
    };

    const hasTwoCapLetters = (input) => {
        return /^(.*[A-Z]){2}/.test(input);
    };

    const hasTwoNumbers = (input) => {
        return /\d.*\d/.test(input);
    };

    const hasTwoSymbols = (input) => {
        let countSymbols = 0;
        for (let i = 0; i < userInput.length; i++) {
            if (/[^a-zA-Z0-9]/g.test(userInput[i])) {
                countSymbols++;
            }
            if (countSymbols >= 2) {
                return true;
            }
        }
    };

    return (
        <div id="inputChecker">
            <span className="minCharacter flex">
                <p>20 characters</p>
                {hasTwentyCharacters(userInput) && (
                    <i className="fa-solid fa-check"></i>
                )}
            </span>

            <span className="capCharacter flex">
                <p>2 capital letter</p>
                {hasTwoCapLetters(userInput) && <i className="fa-solid fa-check"></i>}
            </span>

            <span className="numberCharacter flex">
                <p>2 digits</p>
                {hasTwoNumbers(userInput) && <i className="fa-solid fa-check"></i>}
            </span>

            <span className="symbolCharacter flex">
                <p>2 symbols</p>
                {hasTwoSymbols(userInput) && <i className="fa-solid fa-check"></i>}
            </span>
        </div>
    );
};
