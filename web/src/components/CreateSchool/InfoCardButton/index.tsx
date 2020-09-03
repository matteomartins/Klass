import React, { useState } from 'react'

import { KaClose } from '../../../assets/icons';
import './styles.css';

interface InfoCardButtonProps {
    handleDelete: Function;
    name: string;
    text: string;
    group: string;
}

const InfoCardButton:React.FC<InfoCardButtonProps> = ({handleDelete, name, text, group}) => {
    
    return (
        <div key={name} className="creation-card">
            <input id={name} type="radio" name={group} value={name} />
            <label htmlFor={name}>{text}</label>
            <button onClick={() => handleDelete(name)}><KaClose /></button>
        </div>
    )
}

export default InfoCardButton;