import React from "react";

import { KaClose } from "../../assets/icons";
import Notification from "../Notification";

import "./styles.css";
import { Link } from "react-router-dom";

const Notifications = () => {
    return (
        <div className="notifications-container">
            <div>
                <div className="notifications-header">
                    <h1>Notificações</h1>
                    <Link to="/home">
                        <KaClose size={16} />
                    </Link>
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
    );
};

export default Notifications;
