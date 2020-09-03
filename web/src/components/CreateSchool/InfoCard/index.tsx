import React, { useState } from 'react'

import { KaClose } from '../../../assets/icons';
import './styles.css';

interface InfoCardProps {
    handleDelete: Function;
    name: string;
    text: string;
}

const InfoCardButton:React.FC<InfoCardProps> = ({handleDelete, name, text}) => {
    
    return (
        <div key={name} className="creation-card">
            <label htmlFor={name}>{text}</label>
            <button onClick={() => handleDelete(name)}><KaClose /></button>
        </div>
    )
}

export default InfoCardButton;