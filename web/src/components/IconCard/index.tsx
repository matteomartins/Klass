import React from 'react';

import './styles.css';
import { IconType } from '../../assets/icons/lib/esm';

interface IconCardProps {
    title?: string;
    Icon: IconType;
    color: string;
    small?: boolean;
    rounded?: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const IconCard:React.FC<IconCardProps> = ({title, Icon, color, small, rounded, onClick}) => {
    return (
        <div onClick={onClick} className={`${small?'small-': ''}icon-card-container ${rounded?'rounded':''}`}>
            <h1 style={{background: color}}>{title} <Icon size={58} /> </h1>
        </div>
    )
}

export default IconCard;