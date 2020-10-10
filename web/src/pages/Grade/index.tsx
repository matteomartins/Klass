import React, { useEffect, useState } from "react";
import "./styles.css";

import Subject from "../../components/InfoModals/Subject";
import ContentCard from "../../components/ContentCard";
import BackButton from "../../components/BackButton";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { getColor } from "../../utils/colors";

function Grade() {
    const [active, setActive] = useState(false);
    const [moduleId, setModuleId] = useState('');
    const [subjects, setSubjects] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const id = params.get('id');
            const newModuleId = params.get('module');
            if(!id || id === null) return history.push('/home');
            if(!newModuleId || newModuleId === null) return history.push('/home');
            const newSubjects = await api.get(`/schools/${id}/subjects`);
            setModuleId(newModuleId);
            console.log(newSubjects.data);
            setSubjects(newSubjects.data.subjects);
        })()
    }, [])

    function handleClick() {
        
    }

    return (
        <div className="grade-container">
            <BackButton to="/home" />
            <div className="scroll-view">
                <div className="school-cards-container">
                    <h1>1° ANO A</h1>
                    <div className="classes">
                        {subjects.map(({name, abbreviation}, ind)=> (
                            <ContentCard
                                key={ind}
                                title={abbreviation}
                                text={name}
                                color={getColor(name, ind)}
                                onClick={() => setActive(true)}
                                style={{cursor: 'pointer'}}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Subject active={active} setActive={setActive} />
        </div>
    );
}

export default Grade;
