import React, {useState, useEffect} from 'react';

import './styles.css'
import { Link } from 'react-router-dom';
import { KaClose } from '../../assets/icons';
import { useTheme } from '../../context/Theme';
import { CSSTransition } from 'react-transition-group';
import UserCard from '../UserCard';

interface MenuProps {
    active: boolean;
    setActive: Function;
}

const Menu:React.FC<MenuProps> = ({active, setActive}) => {
    const { theme, setTheme } = useTheme();
    const [ delayedActive, setDelayedActive ] = useState(false);

    useEffect(()=> {
        setTimeout(()=> setDelayedActive(active), 300)
    }, [active]);

    function changeMode() {
        const oldTheme = theme;
        setTheme(oldTheme==='light'?'dark':'light');
    }
    return (
        <>
        <CSSTransition
            in={active}
            timeout={300}
            classNames="slide"
            style={{display: active?'block':delayedActive?'block':'none'}}
        >
            <div className="global-menu">
                <div className="blur" onClick={()=> setActive(false)}></div>
                <div className="menu-container" >
                <div className="header-menu">
                    <h1>Menu</h1>
                    <KaClose color='var(--color-border-primary)' size={12} onClick={()=> setActive(false)} />
                </div>
                <UserCard />
                <ul>
                    <li>
                        <Link to="/notifications">Notificações</Link>
                    </li>
                    <li>
                        <Link to="/feedback">Dar Feedback</Link>
                    </li>
                    <li>
                        <Link to="/help">Ajuda e suporte</Link>
                    </li>
                    <li id="btn-dark-mode">
                        <a href="/" onClick={(e)=> {e.preventDefault();}} >Modo Escuro</a>
                        <label className="switch">
                            <input type="checkbox" checked={theme==='light'?false:true} onChange={changeMode} />
                            <span className="slider"></span>
                        </label>
                    </li>
                    <li>
                        <Link to="/premium">Tornar-se premium</Link>
                    </li>
                    <br/><br/>
                    <li>
                        <Link to="/"><b>Sair</b></Link>
                    </li>
                </ul>
                <span><Link to="/politics">Privacidade • Termos • FAQ • Direitos Autorais</Link></span>
                <p>Klass © 2020</p>
                </div>
            </div>
        </CSSTransition>
        </>
    )
}

export default Menu;