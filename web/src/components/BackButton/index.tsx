import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { KaArrow } from '../../assets/icons';

import './styles.css';

interface BackButtonProps extends LinkProps {
    to: string;
}

const BackButton:React.FC<BackButtonProps> = ({to, ...rest}) => {
    return (
        <Link to={to} {...rest} className="arrow">
            <div>
                <KaArrow color="#fff" size={28} />
            </div>            
        </Link>
    )
}

export default BackButton
