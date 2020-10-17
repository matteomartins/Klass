import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import api from "../../../services/api";
import { colors } from "../../../utils/colors";
import ContentCard from "../../ContentCard";
import InputOutline from "../../InputOutline";
import "./styles.css";

interface GradeModalProps {
    active: boolean;
    setActive: Function;
    id?: number;
}

const GradeModal: React.FC<GradeModalProps> = ({ active, setActive, id }) => {
    const [delayedActive, setDelayedActive] = useState(false);
    const emptySubject:any = {name: ''};
    const [subject, setSubject] = useState(emptySubject);

    useEffect(() => {
        setTimeout(() => setDelayedActive(active), 300);
        if(id===0) return;
        (async () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const idSchool = params.get('id');
            const newSubject = await api.get(`/schools/${idSchool}/groups/${id}`);
            if(!newSubject.data.groupObject[0]) {
                setActive(false);
                return;
            }
            setSubject(newSubject.data.groupObject[0]);
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
                                    title={subject.name.substr(0,1)+subject.name.substr(-1,1)}
                                    text={subject.name}
                                    color={colors[12]}
                                />
                            </div>
                            <div className="info-container">
                                <InputOutline
                                    text="Nome:"
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

export default GradeModal;
