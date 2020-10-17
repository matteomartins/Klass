import React, { InputHTMLAttributes } from 'react'
import { InputType } from 'zlib';

import './styles.css';

interface InputCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string;
    name: string;
}

const InputCheckbox:React.FC<InputCheckboxProps> = ({text, name, ...rest}) => {

    return (
        <div className="creation-input-checkbox">
            <input
                type="checkbox"
                value={name}
                id={name}
                {...rest}
            />
            <label htmlFor={name}>{text}</label>
        </div>
    )
}

export default InputCheckbox;