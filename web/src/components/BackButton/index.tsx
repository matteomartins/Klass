import React from 'react';

import { KaArrow } from '../../assets/icons';

import './styles.css';

function BackButton() {
    return (
        <a href="/">
            <div className="arrow">
                <KaArrow color="#fff" size={28} />
            </div>            
        </a>
    )
}

export default BackButton
