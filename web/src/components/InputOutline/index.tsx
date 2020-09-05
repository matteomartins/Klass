import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputOutlineProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string;
    name: string;
}

const InputOutline: React.FC<InputOutlineProps> = ({ text, name, ...rest }) => {
    return (
        <div className="input-outline-container">
            <label htmlFor={name}>{text}</label>
            <input id={name} {...rest} />
        </div>
    );
};

export default InputOutline;
