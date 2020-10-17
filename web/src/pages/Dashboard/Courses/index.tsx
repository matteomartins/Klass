import React, { useEffect, useState } from "react";

import "./styles.css";
import BackButton from "../../../components/BackButton";
import TruncatedContainer from "../../../components/TruncatedContainer";

import {KaUser, KaBook} from "../../../assets/icons"
import { useHistory } from "react-router-dom";
import api from "../../../services/api";

function Courses() {
    const [schoolId, setSchoolId] = useState('');
    const emptyTurn:any = [];
    const [courses, setCourses] = useState(emptyTurn);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const id = params.get('id');
            if(!id || id === null) return history.push('/home');
            setSchoolId(id);
            let newCourses:any = await api.get(`/schools/${id}/turns`);
            
            newCourses = newCourses.data.ModuleCourse.map(({name, course_id, modules}:any) => {
                return {
                    id: course_id,
                    title: name,
                    content:  modules.map(({level, id}:any)=> {
                        return {
                            id: id,
                            title: level,
                        }
                    })
                }
            })

            setCourses(newCourses);
        })()
    }, []);

    return (
        <div className="main-courses">
            <BackButton to={`/dashboard?id=${schoolId}`} />
            <TruncatedContainer title="Cursos">
                <div className="scroll-bar">
                    <div className="courses-container">
                        {courses.map(({name}:any) => (
                            <div className="courses-content">
                                <h1>{name}</h1>
                                <div className="select-container">
                                    <select>
                                        <option value="0">Integral</option>
                                        <option value="1">Manhã</option>
                                        <option value="2">Tarde</option>
                                        <option value="3">Noite</option>
                                    </select>
                                </div>
                                <div className="teacher-container"> 
                                    <h1>Professores</h1>
                                    <h1>10</h1>
                                </div>
                                <div className="icon-container">
                                    <div className="circle-icon-container">
                                        <KaUser size={15} color="var(--color-border-primary)"/>
                                    </div>                    
                                </div>
                                <div className="matter-container"> 
                                    <h1>Matérias</h1>
                                    <h1>11</h1>
                                </div>
                                <div className="icon-container">
                                    <div className="circle-icon-container">
                                        <KaBook size={18} color="var(--color-border-primary)"/>
                                    </div>                    
                                </div>
                                <h1>7:30 - 15:30</h1>
                            </div>
                        ))}

                    </div>
                </div>
            </TruncatedContainer>
        </div>
    )
}

export default Courses;