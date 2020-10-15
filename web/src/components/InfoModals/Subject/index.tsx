import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import api from "../../../services/api";
import { colors } from "../../../utils/colors";
import ContentCard from "../../ContentCard";
import InputOutline from "../../InputOutline";
import "./styles.css";

interface MenuProps {
    active: boolean;
    setActive: Function;
    subjectId?: number;
}

const Menu: React.FC<MenuProps> = ({ active, setActive, subjectId }) => {
    const [delayedActive, setDelayedActive] = useState(false);
    const emptySubject:any = {name: ''};
    const [subject, setSubject] = useState(emptySubject);

    useEffect(() => {
        setTimeout(() => setDelayedActive(active), 300);
        if(subjectId===0) return;
        (async () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const id = params.get('id');
            const newSubject = await api.get(`/schools/${id}/subjects/${subjectId}`);
            setSubject(newSubject.data.subject)
        })()
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
            <div className="global-subject-modal">
                <div className="blur" onClick={() => setActive(false)}></div>
                    <div className="subject-modal-content">
                        <div className="subject-header">
                            <div className="card-content">
                                <ContentCard
                                    title={subject.name.substr(0,3).toUpperCase()}
                                    text={subject.name}
                                    color={colors[12]}
                                />
                            </div>
                            <div className="info-container">
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
        </CSSTransition>
    );
};

export default Menu;
