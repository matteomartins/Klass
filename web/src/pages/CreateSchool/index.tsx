import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import ExitCreateSchool from "../../components/CreateSchool/Exit";

import "./styles.css";
import Create1 from "../../components/CreateSchool/Create1";
import Create2 from "../../components/CreateSchool/Create2";
import Create3 from "../../components/CreateSchool/Create3";
import Create4 from "../../components/CreateSchool/Create4";
import Create5 from "../../components/CreateSchool/Create5";
import Create6 from "../../components/CreateSchool/Create6";
import Create7 from "../../components/CreateSchool/Create7";
import BackButton from "../../components/BackButton";

function CreateSchool() {
    const [active, setActive] = useState(false);
    const [step, setStep] = useState(4);
    const [mode, setMode] = useState("foward");

    const [turns, setTurns] = useState([]);

    const newCreate3 = () => <Create3 turns={turns} setTurns={setTurns} />;

    const [courses, setCourses] = useState([]);
    const [modules, setModules] = useState([]);

    const newCreate4 = () => (
        <Create4
            courses={courses}
            setCourses={setCourses}
            modules={modules}
            setModules={setModules}
        />
    );

    const [subjects, setSubjects] = useState([]);

    const newCreate5 = () => (
        <Create5
            subjects={subjects}
            setSubjects={setSubjects}
            courses={courses}
            setCourses={setCourses}
        />
    );

    const [teachers, setTeachers] = useState([]);

    const newCreate6 = () => (
        <Create6
            subjects={subjects}
            setSubjects={setSubjects}
            teachers={teachers}
            setTeachers={setTeachers}
        />
    );

    const [classes, setClasses] = useState([]);

    const newCreate7 = () => (
        <Create7 classes={classes} setClasses={setClasses} />
    );

    const history = useHistory();
    const screens = [
        Create1,
        Create2,
        newCreate3,
        newCreate4,
        newCreate5,
        newCreate6,
        newCreate7,
    ];

    function handleNext() {
        if (step === 6) history.push("/dashboard");
        setMode("foward");
        setStep(step + 1);
    }
    function handleBack(e: any) {
        e.preventDefault();
        if (step === 0) setActive(true);
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
            <ExitCreateSchool active={active} setActive={setActive} />
        </div>
    );
}

export default CreateSchool;
