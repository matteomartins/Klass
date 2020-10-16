import React, { useEffect, useState } from "react";
import "./styles.css";

import TeacherProfile from "../../../components/InfoModals/TeacherProfile";
import ContentCard from "../../../components/ContentCard";
import BackButton from "../../../components/BackButton";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";
import { colors, getColor } from "../../../utils/colors";

function Teachers() {
    const [active, setActive] = useState(false);
    const [schoolId, setSchoolId] = useState('');
    const [professors, setProfessors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const id = params.get('id');
            if(!id || id === null) return history.push('/home');
            setSchoolId(id);
            const newProfessors = await api.get(`/schools/${id}/professors`);
            setProfessors(newProfessors.data || []);
            console.log(newProfessors.data);
        })()
    }, []);

    return (
        <div className="teachers-container">
            <BackButton to={`/dashboard?id=${schoolId}`} />
            <div className="scroll-view">
                <div className="teachers-cards-container">
                    <h1>Professores</h1>
                    <div className="teachers">
                        {professors.map(({name}:any, ind) => (
                            <ContentCard
                                small
                                rounded
                                title={name.substr(0, 1)}
                                text={name}
                                color={getColor(name, ind)}
                                onClick={() => setActive(true)}
                            />
                        ))}
                            <ContentCard
                                title="+"
                                text="Adicionar"
                                color={colors[18]}
                                onClick={() => {}}
                                style={{cursor: 'pointer'}}
                                small
                                rounded
                            />
                    </div>
                </div>
            </div>
            <TeacherProfile active={active} setActive={setActive} />
        </div>
    );
}

export default Teachers;
