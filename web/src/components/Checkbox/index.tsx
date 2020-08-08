import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface CheckboxPros extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Checkbox: React.FC<CheckboxPros> = ({label, name, ...rest}) => {
    return (
        <div className="input-checkbox">
            <input type="checkbox" id={name} {...rest} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default Checkbox;