import React, { InputHTMLAttributes } from 'react';

import './styles.css';
import { IconType } from '../../assets/icons/lib/esm';

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    Icon: IconType;
}

const Input: React.FC<InputPros> = ({label, Icon, ...rest}) => {
    return (
        <div className="input">
            <input type="text" placeholder={label} {...rest} />
            <Icon size={18} />
        </div>
    )
}

export default Input;