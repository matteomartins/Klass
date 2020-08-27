import React, {useState, useEffect} from 'react';

import './styles.css'
import { CSSTransition } from 'react-transition-group';

interface MenuProps {
    active: boolean;
    setActive: Function;
}

const Menu:React.FC<MenuProps> = ({active, setActive}) => {
    const [ delayedActive, setDelayedActive ] = useState(false);

    useEffect(()=> {
        setTimeout(()=> setDelayedActive(active), 300)
    }, [active]);

    return (
        <CSSTransition
            in={active}
            timeout={300}
            classNames="slide"
            style={{display: active?'flex':delayedActive?'flex':'none'}}
        >
                <div className="global-school-menu">
                <div className="school-menu-container">
                <div className="blur" onClick={()=> setActive(false)}></div>
                    <div className="school-menu-content" >
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
                </div>
        </CSSTransition>
    )
}

export default Menu;