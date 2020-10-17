import React, { useEffect, useState } from "react";
import "./styles.css";
import ContentCard from "../../components/ContentCard";
import InputOutline from "../../components/InputOutline";
import BackButton from "../../components/BackButton";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { getColor } from "../../utils/colors";

function School() {
    const history = useHistory();
    const [school, setSchool] = useState({id: '', name: '', description: '', type: '', icon: ''});
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        (async () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const id = params.get('id');
            if(!id) history.push('/home');
            const newSchool = await api.get(`/schools/${id}`);
            setSchool(newSchool.data.school[0]);

            const newGroups = await api.get(`/schools/${id}/groups`);
            setGroups(newGroups.data.groups);
        })()
    }, []);

    return (
        <div className="school-container">
            <BackButton to="/home" />
            <div className="scroll-view">
                <div>
                    <div className="school-header">
                        <div className="card-content">
                            <ContentCard
                                title={school.name.substr(0,1)+school.name.substr(school.name.lastIndexOf(' ')+1,1)}
                                text=""
                                img={school.icon}
                                color="#0792A9"
                            />
                            <h1>{school.name}</h1>
                        </div>
                        <div className="info-container">
                            <InputOutline
                                text="Professores:"
                                name="prof"
                                value="25"
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
                    <div className="description">
                        <h1>Descrição</h1>
                        <p>{school.description}</p>
                        <InputOutline
                            text="Tipo de escola:"
                            name="type"
                            value={school.type}
                            disabled
                        />
                    </div>
                    <div className="school-cards-container">
                        <h1>Classes</h1>
                        <div className="cards">
                            {groups.map(({name = '', module_id}, ind) => (
                                <ContentCard
                                    key={ind}
                                    to={`/class?id=${school.id}&module=${module_id}`}
                                    title={name.substr(0,1)+name.substr(-1,1)}
                                    text={name}
                                    color={getColor(name, ind)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default School;
