import React, { useState } from "react";

import { SwitchTransition, CSSTransition } from "react-transition-group";

import "./styles.css";
import Create1 from "../../components/CreateSchool/Create1";
import Create2 from "../../components/CreateSchool/Create2";
import Create3 from "../../components/CreateSchool/Create3";
import Create4 from "../../components/CreateSchool/Create4";
import Create5 from "../../components/CreateSchool/Create5";
import Create6 from "../../components/CreateSchool/Create6";
import Create7 from "../../components/CreateSchool/Create7";
import ExitCreateSchool from "../../components/CreateSchool/Exit";
import SuccessfulCreateSchool from "../../components/CreateSchool/Successful";
import BackButton from "../../components/BackButton";
import api from "../../services/api";
import { useAlert } from "react-alert";
import { TurnProps } from "../../utils/CommonInterfaces";

function CreateSchool() {
    const [activeExit, setActiveExit] = useState(false);
    const [activeSuccessful, setActiveSuccessful] = useState(false);
    const [step, setStep] = useState(0);
    const [mode, setMode] = useState('foward');
    const alert = useAlert();

    const [schoolName, setSchoolName] = useState('');
    const [schoolDescription, setSchoolDescription] = useState('');
    const [schoolType, setSchoolType] = useState('');
    const [selectedImg, setSelectedImg] = useState('');
    const [turns, setTurns] = useState([]);
    const [courses, setCourses] = useState([]);
    const [modules, setModules] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [classes, setClasses] = useState([]);

    async function handleCreate() {
        const createSchoolRes = await api.post('/schools', {
            name: schoolName, 
            description: schoolDescription, 
            type: schoolType, 
            icon: selectedImg
        });

        const school_id = createSchoolRes.data.school_id;
        if(!school_id) alert.error("Impossível criar escola. Tente novamente mais tarde.");
        console.log(school_id);

        turns.forEach(async (turn:any) => {
            console.log(turn);
            const start = turn.content.schedule.split(' às ')[0];
            const end = turn.content.schedule.split(' às ')[1];
            const newIntervals:any = [];
            turn.content.intervals.map(({title}:any)=> {
                const startInterval = title.content.schedule.split(' às ')[0];
                const endInterval = title.content.schedule.split(' às ')[1];
                newIntervals.push({start:startInterval, end: endInterval});
            })
            const createTurnsRes = await api.post(`/schools/${school_id}/turns`, {
                name: turn.title,
                start,
                end, 
                class_duration: turn.content.classDuration,
                week_days: turn.content.days,
                intervals: newIntervals,
            });
            console.log(createTurnsRes.data);
        })

    }

    const newCreate1 = () =>  (
        <Create1 
            name={schoolName} 
            setName={setSchoolName} 
            description={schoolDescription}
            setDescription={setSchoolDescription}
            type={schoolType}
            setType={setSchoolType}
        />
    );

    const newCreate2 = () => <Create2 selectedImg={selectedImg} setSelectedImg={setSelectedImg} />;

    const newCreate3 = () => <Create3 turns={turns} setTurns={setTurns} />;

    const newCreate4 = () => (
        <Create4
            courses={courses}
            setCourses={setCourses}
            modules={modules}
            setModules={setModules}
        />
    );

    const newCreate5 = () => (
        <Create5
            subjects={subjects}
            setSubjects={setSubjects}
            courses={courses}
            setCourses={setCourses}
        />
    );

    const newCreate6 = () => (
        <Create6
            subjects={subjects}
            setSubjects={setSubjects}
            teachers={teachers}
            setTeachers={setTeachers}
        />
    );

    const newCreate7 = () => (
        <Create7 classes={classes} setClasses={setClasses} />
    );

    const screens = [
        newCreate1,
        newCreate2,
        newCreate3,
        newCreate4,
        newCreate5,
        newCreate6,
        newCreate7,
    ];

    function handleNext() {
        if (step === 6) setActiveSuccessful(true);
        else {
            setMode("foward");
            setStep(step + 1);
        }
    }
    function handleBack(e: any) {
        e.preventDefault();
        if (step === 0) setActiveExit(true);
        else {
            setMode("backward");
            setStep(step - 1);
        }
    }

    return (
        <div className="create-school-container">
            <BackButton to="/home" onClick={(e) => handleBack(e)} />
            <div className={mode}>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        timeout={400}
                        classNames="slide"
                        key={step}
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                    >
                        {screens[step]}
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className="progress-container">
                <button className="btn" onClick={handleNext}>
                    Avançar
                </button>
                <span> {step + 1}/7 </span>
            </div>
            <ExitCreateSchool active={activeExit} setActive={setActiveExit} />
            <SuccessfulCreateSchool active={activeSuccessful} setActive={setActiveSuccessful} handleCreate={handleCreate} />
        </div>
    );
}

export default CreateSchool;
