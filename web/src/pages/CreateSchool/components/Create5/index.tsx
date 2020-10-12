import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { KaArrow } from "../../../../assets/icons";
import DragDrop from "../../../../utils/dragFunctions";
import {
    SubjectProps,
    CourseProps,
    ModuleProps,
} from "../../../../utils/CommonInterfaces";
import { create5Functions } from "../../../../utils/create5Functions";
import ConnectionSection from "../ConnectionSection";
import CreateDraggableSection from "../CreateDraggableSection";

import "./styles.css";
import CardSection from "../CardSection";
import TruncatedContainer from "../../../../components/TruncatedContainer";

interface Create5Props {
    courses: Array<CourseProps>;
    setCourses: Function;
    subjects: Array<SubjectProps>;
    setSubjects: Function;
}

const Create5: React.FC<Create5Props> = ({
    subjects,
    setSubjects,
    courses,
    setCourses,
}) => {
    const newModules: Array<ModuleProps> = [];


    const [selectedModule, setSelectedModule] = useState(-1);

    useEffect(() => {
        courses.forEach(({ title, content }, ind) => {
            content.forEach((module, contInd) => {
                newModules.push({
                    id: module.id,
                    title: `${module.title} ${title}`,
                    content: courses[ind].content[contInd]?.content || [],
                });
            });
        });
    }, []);
    
    const [modules, setModules] = useState(newModules);


    const onDragEnd = DragDrop([subjects], setSubjects, modules, setModules);
    const { addSubject, removeSubject, removeConnection } = create5Functions(
        subjects,
        setSubjects,
        modules,
        setModules,
        selectedModule,
        setSelectedModule
    );

    return (
        <>
            <TruncatedContainer
                title="Criar"
                className="create-school-container"
            >
                <div className="create-school-content">
                    <h1>Crie Matérias, Conecte com seus Módulos</h1>
                    <div className="creation-group">
                        <div className="creation-container">
                            <div className="creation-header">
                                <h1>Módulos</h1>
                                <KaArrow size={18} />
                            </div>
                            <CardSection
                                cards={modules}
                                selectedCard={selectedModule}
                                setSelectedCard={setSelectedModule}
                            />
                        </div>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <ConnectionSection
                                cards={modules}
                                setCards={setModules}
                                selectedCard={selectedModule}
                                removeConnection={removeConnection}
                                unselectedMessage="Selecione um módulo"
                                noCardMessage="Insira uma matéria"
                                title="Matérias"
                                withNumber
                            />
                            <div className="creation-container">
                                <div className="creation-header">
                                    <h1>Matérias</h1>
                                    <KaArrow size={18} />
                                </div>
                                <CreateDraggableSection
                                    cards={subjects}
                                    addCard={addSubject}
                                    setCards={setSubjects}
                                    removeCard={removeSubject}
                                    placeholder="Nova Matéria"
                                    withNumber
                                />
                            </div>
                        </DragDropContext>
                    </div>
                </div>
            </TruncatedContainer>
        </>
    );
};

export default Create5;
