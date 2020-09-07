import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TruncatedContainer from "../../TruncatedContainer";
import InputWithButton from "../InputWithButton";
import { KaArrow } from "../../../assets/icons";
import InfoCardButton from "../InfoCardButton";
import InfoCard from "../InfoCard";
import DragDrop from "../../../utils/dragFunctions";
import { CourseProps, ModuleProps } from "../../../utils/CommonInterfaces";

import "./styles.css";
import { create4Functions } from "../../../utils/create4Functions";
import ConnectionSection from "../ConnectionSection";

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
                                <KaArrow size={18} />
                            </div>
                            <div className="creation-content">
                                <InputWithButton
                                    handleNew={addCourse}
                                    placeholder="Novo Curso"
                                />
                                <div className="scroll-view">
                                    <div className="creation-cards">
                                        {courses.map(
                                            ({ name, text }, index) => (
                                                <InfoCardButton
                                                    index={index}
                                                    handleDelete={removeCourse}
                                                    name={name}
                                                    text={text}
                                                    group="Courses2"
                                                    checked={
                                                        selectedCourse === index
                                                            ? true
                                                            : false
                                                    }
                                                    handleCheck={(
                                                        value: number
                                                    ) => {
                                                        setSelectedCourse(
                                                            value
                                                        );
                                                        console.log(value);
                                                    }}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <ConnectionSection
                                courses={courses}
                                selectedCourse={selectedCourse}
                                removeConnection={removeConnection}
                            />
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
                                        <Droppable key={1} droppableId="1">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                    className="creation-cards"
                                                >
                                                    {modules.map(
                                                        (item, index) => (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={
                                                                    item.id
                                                                }
                                                                index={index}
                                                            >
                                                                {(
                                                                    provided,
                                                                    snapshot
                                                                ) => (
                                                                    <div
                                                                        ref={
                                                                            provided.innerRef
                                                                        }
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    >
                                                                        <InfoCard
                                                                            handleDelete={
                                                                                removeModule
                                                                            }
                                                                            name={
                                                                                item.id
                                                                            }
                                                                            text={
                                                                                item.content
                                                                            }
                                                                            isDragging={
                                                                                snapshot.isDragging
                                                                            }
                                                                        />
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        )
                                                    )}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>
                            </div>
                        </DragDropContext>
                    </div>
                </div>
            </TruncatedContainer>
        </>
    );
};

export default Create4;
