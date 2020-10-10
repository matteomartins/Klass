import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { KaUser } from "../../assets/icons";
import "./styles.css";

function UserCard() {
    const [ username, setUsername ] = useState('');
    
    useEffect(() => {
        const newUsername = localStorage.getItem('username');
        if(!newUsername) return;
        setUsername(JSON.parse(newUsername));
    }, [])
    return (
        <Link to="/profile" className="user-content">
            <div className="circle-icon-container user-icon">
                <KaUser size={20} />
            </div>
            <h1>{username}</h1>
        </Link>
    );
}

export default UserCard;
