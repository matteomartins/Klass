import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { KaArrow } from "../../../assets/icons";
import { CourseProps } from "../../../utils/CommonInterfaces";
import InfoCard from "../InfoCard";

interface ConnectionSectionProps {
    selectedCourse: number;
    courses: Array<CourseProps>;
    removeConnection: Function;
}

const ConnectionSection: React.FC<ConnectionSectionProps> = ({
    selectedCourse,
    courses,
    removeConnection,
}) => {
    if (selectedCourse === -1) {
        return (
            <div className="creation-container">
                <div className="creation-header">
                    <h1>Conecte</h1>
                    <KaArrow size={18} />
                </div>
                <div className="creation-content">
                    <p>Selecione um curso</p>
                </div>
            </div>
        );
    }
    return (
        <div className="creation-container">
            <div className="creation-header">
                <h1>Conecte</h1>
                <KaArrow size={18} />
            </div>
            <div className="creation-content">
                <h2>{courses[selectedCourse].text}</h2>
                <div className="scroll-view">
                    <Droppable
                        key={selectedCourse + 2}
                        droppableId={`${selectedCourse + 2}`}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="creation-cards"
                            >
                                <h3>Módulos</h3>
                                {(() => {
                                    if (
                                        courses[selectedCourse].content
                                            .length === 0
                                    ) {
                                        return <p>Insira os Módulos</p>;
                                    } else {
                                        return courses[
                                            selectedCourse
                                        ].content.map(({ id, content }) => (
                                            <InfoCard
                                                key={id}
                                                handleDelete={removeConnection}
                                                name={id}
                                                text={content}
                                            />
                                        ));
                                    }
                                })()}
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        </div>
    );
};

export default ConnectionSection;
