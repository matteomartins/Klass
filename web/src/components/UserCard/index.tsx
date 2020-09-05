import React from "react";
import { Link } from "react-router-dom";

import { KaUser } from "../../assets/icons";
import "./styles.css";

function UserCard() {
    return (
        <Link to="/profile" className="user-content">
            <div className="circle-icon-container user-icon">
                <KaUser size={20} />
            </div>
            <h1>Claudio da Silva Peixoto</h1>
        </Link>
    );
}

export default UserCard;
