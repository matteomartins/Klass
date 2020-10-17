import React, { useEffect, useState } from "react";
import "./styles.css";

import {default as SubjectModal} from "../../../components/InfoModals/Subject";
import ContentCard from "../../../components/ContentCard";
import BackButton from "../../../components/BackButton";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";
import { colors, getColor } from "../../../utils/colors";

function Subjects() {
    const [active, setActive] = useState(false);
    const [subjectId, setSubjectId] = useState(0);
    const [schoolId, setSchoolId] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [groups, setGroups] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const id = params.get('id');
            if(!id || id === null) return history.push('/home');
            setSchoolId(id);
            const newGroups = await api.get(`/schools/${id}/groups`);
            const newSubjects = await api.get(`/schools/${id}/subjects`);
            setGroups(newGroups.data.groups);
            setSubjects(newSubjects.data.subjects);
            
        })()
    }, []);

    
    function handleClick(id:number) {
        setSubjectId(id);
        setActive(true);
    }
    
    return (
        <div className="subjects-container">
            <BackButton to={`/dashboard?id=${schoolId}`} />
            <div className="scroll-view">
                {groups.map(({name, module_id}) => (
                    <div className="school-cards-container">
                        <h1>{name}</h1>
                        <div className="classes">
                            {subjects.map(({name, id, modules}:any, ind)=> {
                                return !modules.find((moduleData:any) => moduleData.module_id === +module_id)?null:(
                                <ContentCard
                                    key={ind}
                                    title={name.substr(0,3).toUpperCase()}
                                    text={name}
                                    color={getColor(name, ind)}
                                    onClick={() => handleClick(id)}
                                    style={{cursor: 'pointer'}}
                                />)
                            })}
                            <ContentCard
                                title="+"
                                text="Adicionar"
                                color={colors[18]}
                                onClick={() => {}}
                                style={{cursor: 'pointer'}}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <SubjectModal active={active} setActive={setActive} subjectId={subjectId} />
        </div>
    );
}

export default Subjects;
