
import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, ...rest}) => {
    return (
        <div className="input-checkbox">
            <input type="checkbox" id={name} {...rest} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default Checkbox;