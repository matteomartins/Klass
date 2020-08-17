import React, {useState, useEffect} from 'react';

import './styles.css'
import { Link } from 'react-router-dom';
import { KaUser } from '../../assets/icons';

interface MenuProps {
    active: boolean;
    setActive: Function;
}

const Menu:React.FC<MenuProps> = ({active, setActive}) => {
    const [theme, setTheme] = useState(false)
    useEffect(()=> {
        const theme = localStorage.getItem('theme');
        if(theme==='dark') {
            setTheme(true);
        }
    }, [])
    function changeMode() {
        const oldTheme = localStorage.getItem('theme');
        localStorage.setItem('theme', oldTheme==='light'?'dark':'light');
        window.location.reload();
    }
    return (
        <div className="blur" style={{display: active?'block':'none'}} onClick={()=> setActive(false)}>
            <div className="menu-container">
                <div className="header-menu">
                    <h1>Menu</h1>
                    <span onClick={()=> setActive(false)}>x</span>
                </div>
                <Link to="/user" className="user-content">
                    <div className="user-icon">
                        <KaUser color="#fff" size={20} />
                    </div>
                    <h1>Claudio da Silva Peixoto</h1>
                </Link>
                <ul>
                    <li>
                        <a href="./">Notificações</a>
                    </li>
                    <li>
                        <Link to="feedback">Dar Feedback</Link>
                    </li>
                    <li>
                        <Link to="help">Ajuda e suporte</Link>
                    </li>
                    <li id="btn-dark-mode">
                        <a href="./">
                            Modo Escuro
                        </a>
                        <label className="switch">
                            <input type="checkbox" checked={theme} onClick={changeMode}/>
                            <span className="slider"></span>
                        </label>
                    </li>
                    <li>
                        <Link to="premium">Tornar-se premium</Link>
                    </li>
                    <br/><br/>
                    <li>
                        <Link to="exit"><b>Sair</b></Link>
                    </li>
                </ul>
                <span><a href="./">Privacidade • Termos • FAQ • Direitos Autorais</a></span>
                <p>Klass © 2020</p>
            </div>
        </div>
    )
}

export default Menu;