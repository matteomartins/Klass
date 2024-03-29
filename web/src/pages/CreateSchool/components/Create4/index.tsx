import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import DragDrop from "../../../../utils/dragFunctions";
import { CourseProps, ModuleProps } from "../../../../utils/CommonInterfaces";
import { create4Functions } from "../../../../utils/create4Functions";
import ConnectionSection from "../ConnectionSection";
import CreateDraggableSection from "../CreateDraggableSection";
import CreateCardSection from "../CreateCardSection";

import "./styles.css";
import TruncatedContainer from "../../../../components/TruncatedContainer";

interface Create4Props {
    courses: Array<CourseProps>;
    setCourses: Function;
    modules: Array<ModuleProps>;
    setModules: Function;
}

const Create4: React.FC<Create4Props> = ({
    courses,
    setCourses,
    modules,
    setModules,
}) => {
    const [selectedCourse, setSelectedCourse] = useState(-1);
    const onDragEnd = DragDrop([modules], setModules, courses, setCourses);
    const {
        addCourse,
        removeCourse,
        addModule,
        removeModule,
        removeConnection,
    } = create4Functions(
        courses,
        setCourses,
        modules,
        setModules,
        selectedCourse,
        setSelectedCourse
    );

    return (
        <>
            <TruncatedContainer
                title="Criar"
                className="create-school-container"
            >
                <div className="create-school-content">
                    <h1>Crie Cursos, Módulos, Conecte-os</h1>
                    <div className="creation-group">
                        <div className="creation-container">
                            <div className="creation-header">
                                <h1>Cursos</h1>
                            </div>
                            <CreateCardSection
                                cards={courses}
                                addCard={addCourse}
                                removeCard={removeCourse}
                                selectedCard={selectedCourse}
                                setSelectedCard={setSelectedCourse}
                                placeholder="Novo Curso"
                            />
                        </div>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <ConnectionSection
                                cards={courses}
                                selectedCard={selectedCourse}
                                removeConnection={removeConnection}
                                unselectedMessage="Selecione um curso"
                                noCardMessage="Insira um módulo"
                                title="Módulos"
                            />
                            <div className="creation-container">
                                <div className="creation-header">
                                    <h1>Módulos</h1>
                                </div>
                                <CreateDraggableSection
                                    cards={modules}
                                    addCard={addModule}
                                    removeCard={removeModule}
                                    placeholder="Novo Módulo"
                                />
                            </div>
                        </DragDropContext>
                    </div>
                </div>
            </TruncatedContainer>
        </>
    );
};

export default Create4;
