import React, { useState } from 'react'

import { KaClose } from '../../../assets/icons';
import './styles.css';

interface InfoCardProps {
    handleDelete: Function;
    name: string;
    text: string;
}

const InfoCard:React.FC<InfoCardProps> = ({handleDelete, name, text}) => {
    
    return (
        <div key={name} className="creation-card">
            <input id={name} type="radio" name="turns" />
            <label htmlFor={name}>{text}</label>
            <button onClick={() => handleDelete(name)}><KaClose /></button>
        </div>
    )
}

export default InfoCard;