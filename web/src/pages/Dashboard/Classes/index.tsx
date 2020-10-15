import React, { useEffect, useState } from "react";
import "./styles.css";

import Subject from "../../../components/InfoModals/Subject";
import ContentCard from "../../../components/ContentCard";
import { useHistory } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import api from "../../../services/api";
import { colors, getColor } from "../../../utils/colors";

function Classes() {
    const [active, setActive] = useState(false);
    const [subjectId, setSubjectId] = useState(0);
    const [schoolId, setSchoolId] = useState('');
    const [turns, setTurns] = useState([]);
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
            const newTurns = await api.get(`/schools/${id}/turns`);
            setGroups(newGroups.data.groups);
            setTurns(newTurns.data.turns);
            
        })()
    }, []);

    
    function handleClick(id:number) {
        setSubjectId(id);
        setActive(true);
    }
    
    return (
        <div className="classes-container">
            <BackButton to={`/dashboard?id=${schoolId}`} />
            <div className="scroll-view">
                {turns.map(({name}) => (
                    <div className="classes-cards-container">
                        <h1>{name}</h1>
                        <div className="classes">
                            {groups.map(({name, module_id}:any, ind)=> (
                                <ContentCard
                                    key={ind}
                                    title={name.substr(0,1)+name.substr(-1,1)}
                                    text={name}
                                    color={getColor(name, ind)}
                                    onClick={() => handleClick(module_id)}
                                    style={{cursor: 'pointer'}}
                                    small
                                />
                            ))}
                            <ContentCard
                                title="+"
                                text="Adicionar"
                                color={colors[18]}
                                onClick={() => {}}
                                style={{cursor: 'pointer'}}
                                small
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Subject active={active} setActive={setActive} subjectId={subjectId} />
        </div>
    );
}

export default Classes;
