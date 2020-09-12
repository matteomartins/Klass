import React, { InputHTMLAttributes } from "react";

import "./styles.css";
import { IconType } from "../../assets/icons/lib/esm";

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    Icon: IconType;
    ref?: any;
}

const Input: React.FC<InputPros> = ({ label, Icon, ref, ...rest }) => {
    return (
        <div className="input">
            <input placeholder={label} ref={ref} {...rest} />
            <Icon size={18} />
        </div>
    );
};

export default Input;
