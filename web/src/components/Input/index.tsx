import React, { InputHTMLAttributes } from 'react';

import { IconType } from '../../assets/icons/lib/esm';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    color: string;
    Icon: IconType;
}

const Input: React.FC<InputProps> = ({name, label, color, Icon, ...rest}) => {
    return (
        <div className="input">
            <input placeholder={label} {...rest} />
            <Icon size={18} color={color} className="mr-3" />
        </div>
    )
}

export default Input;
