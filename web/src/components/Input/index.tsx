import React, { InputHTMLAttributes } from "react";

import "./styles.css";
import { IconType } from "../../assets/icons/lib/esm";

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    Icon: IconType;
    inputRef?: any;
}

const Input: React.FC<InputPros> = ({ label, Icon, inputRef, ...rest }) => {
    return (
        <div className="input">
            <input placeholder={label} {...rest} ref={inputRef} />
            <Icon size={18} />
        </div>
    );
};

export default Input;
