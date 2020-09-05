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
            <div className="global-school-menu2">
                <div className="school-menu-container2">
                    <div
                        className="blur2"
                        onClick={() => setActive(false)}
                    ></div>
                    <div className="school-menu-content2">
                        <div className="school-header2">
                            <div className="card-content2">
                                <ContentCard
                                    title="P"
                                    text="PORTUGUÊS"
                                    color="#0792A9"
                                />
                            </div>
                            <div className="info-container2">
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
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Menu;
