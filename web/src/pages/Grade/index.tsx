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
    const emptyClassData:any = {};
    const [classData, setClassData] = useState(emptyClassData);
    const [subjects, setSubjects] = useState([]);
    const [subjectId, setSubjectId] = useState(0);
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
            const newClass = await api.get(`/schools/${id}/groups/${newModuleId}`);
            setClassData(newClass.data.groupObject[0]);
            setSubjects(newSubjects.data.subjects);
        })()
    }, [])

    function handleClick(id:number) {
        setSubjectId(id);
        setActive(true);
    }

    return (
        <div className="grade-container">
            <BackButton to="/home" />
            <div className="scroll-view">
                <div className="school-cards-container">
                    <h1>{classData.name}</h1>
                    <div className="classes">
                        {subjects.map(({name, id, modules}:any, ind)=> {
                            return !modules.find((moduleData:any) => moduleData.module_id === +classData.module_id)?null:(
                            <ContentCard
                                key={ind}
                                title={name.substr(0,3).toUpperCase()}
                                text={name}
                                color={getColor(name, ind)}
                                onClick={() => handleClick(id)}
                                style={{cursor: 'pointer'}}
                            />)
                        })}
                    </div>
                </div>
            </div>
            <Subject active={active} setActive={setActive} subjectId={subjectId} />
        </div>
    );
}

export default Grade;
