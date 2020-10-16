import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { KaUser } from "../../assets/icons";
import "./styles.css";

function UserCard() {
    const [ username, setUsername ] = useState('');
    const [ icon, setIcon ] = useState('');
    
    useEffect(() => {
        const newUsername = localStorage.getItem('username');
        const newIcon = localStorage.getItem('icon');
        if(!newUsername) return;
        if(newIcon) setIcon(newIcon);
        setUsername(JSON.parse(newUsername));
    }, [])
    return (
        <Link to="/profile" className="user-content">
            <div className="circle-icon-container user-icon">
                {(() => {
                    if(icon !== "") return <img src={icon} alt="Imagem de Perfil" />
                    else return <KaUser size={20} />
                })()}
            </div>
            <h1>{username}</h1>
        </Link>
    );
}

export default UserCard;
