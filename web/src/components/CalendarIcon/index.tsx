import React from 'react';
import { Link } from 'react-router-dom';

import { KaCalendar } from '../../assets/icons';

import './styles.css';

function CalendarIcon() {
    return (
        <Link to="/schedule" className="calendar-content circle-icon-container ">
            <div className="calendar-icon">
                <KaCalendar size={22} color="var(--color-text-primary)" />  
            </div>
        </Link>
    )
}

export default CalendarIcon

