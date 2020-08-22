import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import {KaUser, KaCalendar} from '../../assets/icons';
import {KaCircleOutline, KaCircleSelected, KaArrow} from '../../assets/icons';

import { useTheme } from '../../context/Theme';
import { IconTree, IconType } from '../../assets/icons/lib/esm';


function Home(){
    return(
        <div className="main-home">
            <div className="background">
                
            </div>
            <Link to="/" className="calendar-content">
                <div className="calendar-icon">
                    <KaCalendar size={22} color="var(--color-text-primary)" />  
                </div>
            </Link>
        </div>
    )
}

export default Home;