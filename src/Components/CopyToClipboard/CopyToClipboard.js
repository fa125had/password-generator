import "./CopyToClipboard.css";
import React from "react";

export const CopyToClipboard = (props) => {
    const handleCopyToClipboard = () => {
        try {
            const input = props.inputRef.current;
            input.select();
            document.execCommand("copy");
            input.blur();
            props.copiedText("Copied!");
        } catch (error) {
            console.error(error.stack);
        }
    };

    return (
        <div id="copyToClipboard">
            {props.userInput && (
                <button id="copyBtn" onClick={handleCopyToClipboard}>
                    Copy
                </button>
            )}
        </div>
    );
};
