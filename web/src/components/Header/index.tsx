import React, { useState } from 'react';

import Menu from '../Menu';
import { KaMenu } from '../../assets/icons';
import Icon from '../../assets/images/icon-light.svg';

import './styles.css';
import UserCard from '../UserCard';

function Header() {
    const [active, setActive] = useState(false)
    return (
        <header>
            <UserCard/>
            <img src={Icon} alt="Klass" />
            <div>
                <div className="circle-icon-container" onClick={()=>setActive(true)} >
                    <KaMenu size={20} />
                </div>
                <Menu active={active} setActive={setActive} />
            </div>
        </header>
    )
}

export default Header;