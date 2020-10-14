import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    placeholder: string;
    options: Array<string>;

}

const Select: React.FC<SelectProps> = ({ name, placeholder, options, ...rest }) => {
    return (
        <div className="creation-input">
            <select placeholder={placeholder} name={name} {...rest} >
                <option style={{display: 'none'}} value="">Selecione uma opção</option>
                {options.map((name) => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
