import React from "react";

import "./styles.css";
import { KaNotification } from "../../assets/icons";

const Notification = () => {
    return (
        <div className="notification-container">
            <KaNotification size={24} color="#39729D" />
            <div className="notification-content">
                <h1>Sua aula de biologia inicia daqui 10 minutos.</h1>
                <span>14/07/2020 &nbsp; 15:50</span>
            </div>
        </div>
    );
};

export default Notification;
