import React from 'react';
import { KaGoogle } from '../../assets/icons';

import './styles.css';

interface SocialMediasProps {
    color: string;
}

const SocialMedias: React.FC<SocialMediasProps> = ({color}) => {
    return (
        <div className="social-media">
            <div className="circle" style={{borderColor: color}} >
                <h1 className="icon" style={{'color': color}}>f</h1>
            </div>
            <div className="circle" style={{borderColor: color}}>
                <KaGoogle size={22} color={color} />
            </div>
            <div className="circle" style={{borderColor: color}}>
                <h1 className="icon" style={{'color': color}}>in</h1>
            </div>
        </div>
    )
}

export default SocialMedias;