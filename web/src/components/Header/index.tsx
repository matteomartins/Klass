import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
import { KaUser, KaMenu } from '../../assets/icons';
import Icon from '../../assets/images/icon-light.svg';

import './styles.css';

function Header() {
    const [active, setActive] = useState(false)
    return (
        <header>
            <Link to="/user" className="user-content">
                <div className="user-icon">
                    <KaUser size={20} />
                </div>
                <h1>Claudio da Silva Peixoto</h1>
            </Link>
            <img src={Icon} alt="Klass" />
            <div>
                <div className="menu-icon">
                    <KaMenu size={20} onClick={()=>setActive(true)} />
                </div>
                <Menu active={active} setActive={setActive} />
            </div>
        </header>
    )
}

export default Header;