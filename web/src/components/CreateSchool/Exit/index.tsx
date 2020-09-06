import React, {useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import './styles.css';

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
                <div className="global-school-menu8">
                <div className="school-menu-container8">
                <div className="blur8" onClick={()=> setActive(false)}></div>
                    <div className="school-menu-content8" >
                        <ul className="texts8">
                            <li>
                                <Link className="texts8" to="/create-school" >Deseja realmente parar de criar uma escola?</Link>
                            </li>
                        </ul>
                    
                        <div className="buttons8">
                            <button className="btn" id="btn">Sim</button>
                            <button className="btn" id="btn">Não</button>
                        </div>   
                    </div>
                    </div>
                </div>
        </CSSTransition>
    )
}

export default Menu;