import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import "./styles.css";

interface MenuProps {
    active: boolean;
    setActive: Function;
}

const Menu: React.FC<MenuProps> = ({ active, setActive }) => {
    const [delayedActive, setDelayedActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setDelayedActive(active), 300);
    }, [active]);

    return (
        <CSSTransition
            in={active}
            timeout={300}
            classNames="slide"
            style={{
                display: active ? "flex" : delayedActive ? "flex" : "none",
            }}
        >
            <div className="global-school-menu">
                <div className="school-menu-container">
                    <div
                        className="blur"
                        onClick={() => setActive(false)}
                    ></div>
                    <div className="school-menu-content">
                        <ul className="texts">
                            <li>
                                <Link className="texts" to="/create-school" >Criar uma nova escola</Link>
                            </li>
                            <li>
                                <Link className="texts" to="/enter-school">
                                    Entrar em uma nova escola
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Menu;
