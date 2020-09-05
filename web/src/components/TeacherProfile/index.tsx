import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ContentCard from "../../components/ContentCard";
import InputOutline from "../../components/InputOutline";
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
            <div className="global-school-menu3">
                <div className="school-menu-container3">
                    <div
                        className="blur3"
                        onClick={() => setActive(false)}
                    ></div>
                    <div className="school-menu-content3">
                        <div className="school-header3">
                            <div className="card-content3">
                                <ContentCard
                                    rounded
                                    title="P"
                                    text="Pedro F."
                                    color="#0792A9"
                                />
                            </div>
                            <div className="info-container3">
                                <InputOutline
                                    text="Professores:"
                                    name="prof"
                                    value="Wallace C. Andrade"
                                    disabled
                                />
                                <InputOutline
                                    text="Alunos:"
                                    name="student"
                                    value="160"
                                    disabled
                                />
                                <InputOutline
                                    text="Matérias:"
                                    name="subject"
                                    value="18"
                                    disabled
                                />
                                <InputOutline
                                    text="Turnos:"
                                    name="turn"
                                    value="3"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="main-text3">
                            <div className="school-text3">
                                <h2>Turmas</h2>
                            </div>
                            <div className="class3">
                                <p>1 ANO A</p>
                                <p></p>
                                <p>2 ANO A</p>
                                <p></p>
                                <p>3 ANO A</p>
                                <p></p>
                            </div>
                        </div>
                        <div className="buttons2">
                            <button className="btn">Começar</button>
                            <button className="btn">Começar</button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Menu;
