import React, { useState } from 'react'

import './styles.css';

interface InputWithButtonProps {
    handleNew: Function;

}

const InputWithButton:React.FC<InputWithButtonProps> = ({handleNew}) => {
    
    const [name, setName] = useState('');

    function handleKeyDown (e:any){
        if (e.key === 'Enter') {
            handleNew(name);
            setName('');
        }
    }

    return (
        <div className="creation-input-with-button">
            <input 
                type="text" 
                placeholder="Novo Turno" 
                value={name} 
                onChange={e => setName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={()=> {handleNew(name); setName('')}}>+</button>
        </div>
    )
}

export default InputWithButton;