import React from 'react';

import { KaClose } from '../../assets/icons';
import Notification from '../Notification';

import './styles.css';

interface NotificationsProps {
    active: boolean;
    setActive: Function;
}

const Notifications:React.FC<NotificationsProps> = ({active, setActive}) => {
    return (
        <div 
            style={{display: active?'flex':'none'}}
            className="global-notifications-container blur"
        >
            <div className="notifications-container">
                <div>
                    <div className="notifications-header">
                        <h1>Notificações</h1>
                        <KaClose size={16} onClick={()=> setActive(false)} />
                    </div>
                    <div className="notifications">
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications;
