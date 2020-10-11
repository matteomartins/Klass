import React, { useState } from 'react'
import InputMask from "react-input-mask";

import './styles.css';

interface InputWithButtonProps {
    handleNew: Function;
    placeholder: string;
    mask?: string;
}

const InputWithButton:React.FC<InputWithButtonProps> = ({handleNew, placeholder, mask=""}) => {
    
    const [name, setName] = useState('');

    function handleKeyDown (e:any){
        if (e.key === 'Enter') {
            handleNew(name);
            setName('');
        }
    }

    return (
        <div className="creation-input-with-button">
            <InputMask
                mask={mask} 
                type="text" 
                placeholder={placeholder}
                value={name} 
                onChange={e => setName(e.target.value)}
                onKeyDown={handleKeyDown}
                maxLength={14}
            />
            <button onClick={()=> {handleNew(name); setName('')}}>+</button>
        </div>
    )
}

export default InputWithButton;