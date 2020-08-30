import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function InfoIcon() {
    return (
        <Link to="/" className="info-content circle-icon-container ">
            <div className="info-icon">
                <h1>i</h1>  
            </div>
        </Link>
    )
}

export default InfoIcon

