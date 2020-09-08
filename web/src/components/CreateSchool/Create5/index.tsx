import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import TruncatedContainer from "../../TruncatedContainer";
import { KaArrow } from "../../../assets/icons";
import DragDrop from "../../../utils/dragFunctions";
import { SubjectProps, ModuleProps } from "../../../utils/commonInterfaces";
import { create5Functions } from "../../../utils/create5Functions";
import ConnectionSection from "../ConnectionSection";
import CreateDraggableSection from "../CreateDraggableSection";
import CreateCardSection from "../CreateCardSection";

import "./styles.css";
import CardSection from "../CardSection";

interface Create4Props {
    modules: Array<ModuleProps>;
    setModules: Function;
    subjects: Array<SubjectProps>;
    setSubjects: Function;
}

const Create5: React.FC<Create4Props> = ({
    subjects,
    setSubjects,
    modules,
    setModules,
}) => {
    const [selectedCourse, setSelectedCourse] = useState(-1);
    const onDragEnd = DragDrop([subjects], setSubjects, modules, setModules);
    const {
        addSubject,
        removeSubject,
        addModule,
        removeModule,
        removeConnection,
    } = create5Functions(
        subjects,
        setSubjects,
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
                    <h1>Crie Matérias, Conecte com seus Módulos</h1>
                    <div className="creation-group">
                        <div className="creation-container">
                            <div className="creation-header">
                                <h1>Módulos</h1>
                                <KaArrow size={18} />
                            </div>
                            <CardSection
                                cards={modules}
                                removeCard={removeModule}
                                selectedCard={selectedCourse}
                                setSelectedCard={setSelectedCourse}
                            />
                        </div>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <ConnectionSection
                                cards={modules}
                                selectedCard={selectedCourse}
                                removeConnection={removeConnection}
                            />
                            <div className="creation-container">
                                <div className="creation-header">
                                    <h1>Módulos</h1>
                                    <KaArrow size={18} />
                                </div>
                                <CreateDraggableSection
                                    cards={modules}
                                    addCard={addModule}
                                    removeCard={removeModule}
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
