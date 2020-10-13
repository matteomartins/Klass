import React, { useState } from "react";

import { SwitchTransition, CSSTransition } from "react-transition-group";

import "./styles.css";
import Create1 from "./components/Create1";
import Create2 from "./components/Create2";
import Create3 from "./components/Create3";
import Create4 from "./components/Create4";
import Create5 from "./components/Create5";
import Create6 from "./components/Create6";
import Create7 from "./components/Create7";
import ExitCreateSchool from "./components/Exit";
import SuccessfulCreateSchool from "./components/Successful";
import BackButton from "../../components/BackButton";
import api from "../../services/api";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

function CreateSchool() {
    const [activeExit, setActiveExit] = useState(false);
    const [activeSuccessful, setActiveSuccessful] = useState(false);
    const [step, setStep] = useState(0);
    const [mode, setMode] = useState('foward');
    const alert = useAlert();
    const history = useHistory();

    const [schoolName, setSchoolName] = useState('');
    const [schoolDescription, setSchoolDescription] = useState('');
    const [schoolType, setSchoolType] = useState('');
    const [selectedImg, setSelectedImg] = useState('');
    const arrtype:Array<any> = [];
    const [turns, setTurns] = useState(arrtype);
    const [courses, setCourses] = useState(arrtype);
    const [modules, setModules] = useState(arrtype);
    const [subjects, setSubjects] = useState(arrtype);
    const [teachers, setTeachers] = useState(arrtype);
    const [classes, setClasses] = useState(arrtype);

    async function createTurns(school_id: string) {
        await Promise.all(turns.map(async (turn:any, ind) => {
            const start = turn.content.schedule.split(' às ')[0];
            const end = turn.content.schedule.split(' às ')[1];
            const newIntervals:any = [];
            turn.content.intervals.map(({title}:any)=> {
                const startInterval = title.split(' às ')[0];
                const endInterval = title.split(' às ')[1];
                newIntervals.push({start:startInterval, end: endInterval});
            })
            const turnRes = await api.post(`/schools/${school_id}/turns`, {
                name: turn.title,
                start,
                end, 
                class_duration: turn.content.classDuration,
                week_days: turn.content.days,
                intervals: newIntervals,
            });

            let newTurns:any = turns;
            const newTurn = turn;
            newTurn.id = turnRes.data.id;
            newTurns[ind] = newTurn;
            setTurns([...newTurns]);
        }));
    }

    async function createCourses(school_id: string) {
        await Promise.all(courses.map(async (course:any, ind) => {
            const name = course.title;
            const modules:any = [];

            course.content.forEach((module: any) => {
                modules.push(module.title);
            });

            const courseRes = await api.post(`/schools/${school_id}/courses`, {
                name,
                modules
            });

            let newCourses:any = courses;
            const newCourse = course;
            newCourse.id = courseRes.data.course_id;
            courseRes.data.modules.forEach(({id}:any, ind:any) => {
                newCourse.content[ind].id = id;
            })
            newCourse[ind] = course;
            setCourses([...newCourses]);
            console.log(courses);
        }));
    }

    async function createSubjects(school_id: string) {
        await Promise.all(subjects.map(async (subject:any, ind) => {
            const name = subject.title;
            const modulesData = modules.map((moduleData:any) => { 
                const filtro = moduleData.content.filter((subjectIn:any) => subjectIn.title === subject.title);
                if(filtro.length > 0) return moduleData.id;
                else return false;
            });
            const modulesIds:any = [];
            modulesData.forEach((id) => {
                if(id) modulesIds.push({module_id: id, total_classes: subject.content})
            })
            
            const subjectRes = await api.post(`/schools/${school_id}/subjects`, {
                name,
                modules: modulesIds
            });
            
            let newSubjects:any = subjects;
            newSubjects[ind].id = subjectRes.data.id;
            setSubjects([...newSubjects]);
            console.log(subjects);
        }));
    }

    async function createTeachers(school_id: string) {
        await Promise.all(teachers.map(async (teacher:any, ind) => {
            const name = teacher.title;
            const email = teacher.email;
            const priority = ind;
            const subjects = teacher.content.map((subject:any) => subject.id);

            await api.post(`/schools/${school_id}/professors`, {
                name,
                email,
                priority,
                subjects
            });
        }));
    }

    async function createClass(school_id: string) {
        await Promise.all(classes.map(async (classData:any) => {
            const name = classData.title;
            const filteredModules:any = modules.find((moduleData:any) => moduleData.title === classData.content.module);
            const classModuleId = filteredModules.id;
            const filteredTurns:any = turns.find((turnData:any) => turnData.title === classData.content.turn);
            const classTurnId = filteredTurns.id;

            console.log(classModuleId);
            console.log(classTurnId);

            await api.post(`/schools/${school_id}/groups`, {
                name,
                module_id: classModuleId,
                turn_id: classTurnId
            });
        }));
    }

    async function handleCreate() {

        const createSchoolRes = await api.post('/schools', {
            name: schoolName, 
            description: schoolDescription, 
            type: schoolType, 
            icon: selectedImg
        });

        const school_id = createSchoolRes.data.school_id;
        if(!school_id) alert.error("Impossível criar escola. Tente novamente mais tarde.");

        createTurns(school_id).then(() => {
            createCourses(school_id).then(() => {
                createSubjects(school_id).then(() => {
                    createTeachers(school_id).then(() => {
                        createClass(school_id);
                    });
                });
            });
        });

        history.push(`/dashboard?id=${school_id}`);

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

    const newCreate2 = () => <Create2 selectedImg={selectedImg} setSelectedImg={setSelectedImg} schoolName={schoolName} />;

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
        <Create7 
            classes={classes} 
            setClasses={setClasses} 
            turns={turns}
            modules={modules}
        />
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
