import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import "./styles.css";

interface MenuProps {
    active: boolean;
    setActive: Function;
    enterSchool: Function;
    createSchool: Function;
}

const Menu: React.FC<MenuProps> = ({ active, setActive, enterSchool, createSchool }) => {
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
                        <ul>
                            <li>
                                <a href="#create-school" onClick={()=> createSchool()} className="texts">
                                    Criar uma nova escola
                                </a>
                            </li>
                            <li>
                                <a href="#enter-school" onClick={()=> enterSchool()} className="texts">
                                    Entrar em uma nova escola
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Menu;
