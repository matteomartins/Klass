import React, { useState } from 'react'

import './styles.css';

interface InputCheckboxProps {
    text: string;
    name: string;
}

const InputCheckbox:React.FC<InputCheckboxProps> = ({text, name}) => {

    return (
        <div className="creation-input-checkbox">
            <input
                type="checkbox"
                value={name}
                id={name}
            />
            <label htmlFor={name}>{text}</label>
        </div>
    )
}

export default InputCheckbox;