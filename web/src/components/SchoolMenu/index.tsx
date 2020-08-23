import React, {useState, useEffect} from 'react';

import './styles.css'
import { Link } from 'react-router-dom';
import { KaUser, KaClose } from '../../assets/icons';
import { useTheme } from '../../context/Theme';
import { CSSTransition } from 'react-transition-group';

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
        <CSSTransition
            in={active}
            timeout={300}
            classNames="slide"
            style={{display: active?'block':delayedActive?'block':'none'}}
        >
            <div className="global-school-menu">
                <div className="blur" onClick={()=> setActive(false)}></div>
                <div className="school-menu-container" >
                <div className="close">
                    <KaClose size={16} onClick={()=> setActive(false)}/>
                </div>  
                <ul className="texts">
                    <li>
                        <a className="texts" href="./">Criar uma nova escola</a>
                    </li>
                    <li>
                        <a className="texts" href="./">Entrar em uma nova escola</a>
                    </li>
                </ul>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Menu;