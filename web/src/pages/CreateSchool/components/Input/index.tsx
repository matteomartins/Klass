import React, { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder: string;
    mask?: any;
}

const Input: React.FC<InputProps> = ({ name, placeholder, mask="", ...rest }) => {
    return (
        <div className="creation-input">
            <InputMask mask={mask} type="text" placeholder={placeholder} name={name} {...rest} />
        </div>
    );
};

export default Input;
