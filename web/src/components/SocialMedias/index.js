import React from 'react';
import { KaGoogle } from '../../assets/icons';

import './styles.css';

export default function SocialMedias({color}) {
    return (
        <div className="social-media">
            <div className="circle" style={{'border-color': color}} >
                <h1 className="icon" style={{'color': color}}>f</h1>
            </div>
            <div className="circle" style={{'border-color': color}}>
                <KaGoogle size={22} color={color} />
            </div>
            <div className="circle" style={{'border-color': color}}>
                <h1 className="icon" style={{'color': color}}>in</h1>
            </div>
        </div>
    )
}