import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import DragDrop from "../../../../utils/dragFunctions";
import { SubjectProps, TeacherProps } from "../../../../utils/CommonInterfaces";
import { create6Functions } from "../../../../utils/create6Functions";
import ConnectionSection from "../ConnectionSection";
import CreateCardSection from "../CreateCardSection";
import DraggableSection from "../DraggableSection";

import "./styles.css";
import TruncatedContainer from "../../../../components/TruncatedContainer";

interface Create6Props {
    teachers: Array<TeacherProps>;
    setTeachers: Function;
    subjects: Array<SubjectProps>;
    setSubjects: Function;
}

const Create6: React.FC<Create6Props> = ({
    subjects,
    setSubjects,
    teachers,
    setTeachers,
}) => {
    const [selectedTeacher, setSelectedTeacher] = useState(-1);
    const onDragEnd = DragDrop([subjects], setSubjects, teachers, setTeachers);
    const { removeTeacher, addTeacher, removeConnection } = create6Functions(
        teachers,
        setTeachers,
        selectedTeacher,
        setSelectedTeacher
    );

    function changeEmail(value: string) {
        let newTeachers = teachers;
        newTeachers[selectedTeacher].email = value;
        setTeachers([...newTeachers]);
    }

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
                                <h1>Professores</h1>
                            </div>
                            <CreateCardSection
                                cards={teachers}
                                removeCard={removeTeacher}
                                addCard={addTeacher}
                                selectedCard={selectedTeacher}
                                setSelectedCard={setSelectedTeacher}
                                placeholder="Novo Professor"
                            />
                        </div>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <ConnectionSection
                                cards={teachers}
                                selectedCard={selectedTeacher}
                                removeConnection={removeConnection}
                                unselectedMessage="Selecione um professor"
                                noCardMessage="Insira uma matéria"
                                title="Matérias"
                                email={selectedTeacher !== -1?teachers[selectedTeacher].email:undefined}
                                setEmail={changeEmail}
                            />
                            <div className="creation-container">
                                <div className="creation-header">
                                    <h1>Matérias</h1>
                                </div>
                                <DraggableSection cards={subjects} />
                            </div>
                        </DragDropContext>
                    </div>
                </div>
            </TruncatedContainer>
        </>
    );
};

export default Create6;
