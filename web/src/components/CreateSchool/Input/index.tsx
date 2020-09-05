import React from 'react'

import './styles.css';

interface InputProps {
    name: string;
    placeHolder: string;

}

const Input:React.FC<InputProps> = ({name, placeHolder}) => {

    return (
        <div className="creation-input">
            <input 
                type="text" 
                placeholder={placeHolder} 
                name={name} 
            />
        </div>
    )
}

export default Input;