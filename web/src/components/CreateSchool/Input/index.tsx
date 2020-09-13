import React from "react";

import "./styles.css";

interface InputProps {
    name: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder }) => {
    return (
        <div className="creation-input">
            <input type="text" placeholder={placeholder} name={name} />
        </div>
    );
};

export default Input;
