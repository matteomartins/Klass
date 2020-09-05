import React from "react";
import TruncatedContainer from "../../TruncatedContainer";

import "./styles.css";
import InputWithButton from "../InputWithButton";
import { KaArrow } from "../../../assets/icons";
import InfoCardButton from "../InfoCardButton";
import InfoCard from "../InfoCard";

interface Create4Props {
    courses: Array<any>;
    setCourses: Function;
    modules: Array<any>;
    setModules: Function;
}

const Create4: React.FC<Create4Props> = ({
    courses,
    setCourses,
    modules,
    setModules,
}) => {
    function addCourse(name: string) {
        if (
            name.trim() !== "" &&
            !courses.find(
                (course) => course.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            setCourses([...courses, { name: name, text: name }]);
        }
    }
    function removeCourse(name: string) {
        let newCourses = courses;
        const deleted = newCourses.find(
            (deleted_course) => deleted_course.name === name
        );
        if (deleted) {
            const index = newCourses.indexOf(deleted);
            newCourses.splice(index, 1);
            setCourses([...newCourses]);
        }
    }
    function addModule(name: string) {
        if (
            name.trim() !== "" &&
            !modules.find(
                (module) => module.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            setModules([...modules, { name: name, text: name }]);
        }
    }
    function removeModule(name: string) {
        let newModules = modules;
        const deleted = newModules.find(
            (deleted_module) => deleted_module.name === name
        );
        if (deleted) {
            const index = newModules.indexOf(deleted);
            newModules.splice(index, 1);
            setModules([...newModules]);
        }
    }

    return (
        <TruncatedContainer title="Criar" className="create-school-container">
            <div className="create-school-content">
                <h1>Crie Cursos, Módulos, Conecte-os</h1>
                <div className="creation-group">
                    <div className="creation-container">
                        <div className="creation-header">
                            <h1>Cursos</h1>
                            <KaArrow size={18} />
                        </div>
                        <div className="creation-content">
                            <InputWithButton
                                handleNew={addCourse}
                                placeholder="Novo Curso"
                            />
                            <div className="scroll-view">
                                <div className="creation-cards">
                                    {courses.map(({ name, text }) => (
                                        <InfoCardButton
                                            handleDelete={removeCourse}
                                            name={name}
                                            text={text}
                                            group="Courses2"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="creation-container">
                        <div className="creation-header">
                            <h1>Conecte</h1>
                            <KaArrow size={18} />
                        </div>
                        <div className="creation-content">
                            <h2>Ensino médio</h2>
                            <div className="scroll-view">
                                <div className="creation-cards">
                                    <h3>Módulos</h3>
                                    {modules.map(({ name, text }) => (
                                        <InfoCard
                                            handleDelete={removeModule}
                                            name={name}
                                            text={text}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="creation-container">
                        <div className="creation-header">
                            <h1>Módulos</h1>
                            <KaArrow size={18} />
                        </div>
                        <div className="creation-content">
                            <InputWithButton
                                handleNew={addModule}
                                placeholder="Novo Módulo"
                            />
                            <div className="scroll-view">
                                <div className="creation-cards">
                                    {modules.map(({ name, text }) => (
                                        <InfoCard
                                            handleDelete={removeModule}
                                            name={name}
                                            text={text}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TruncatedContainer>
    );
};

export default Create4;
