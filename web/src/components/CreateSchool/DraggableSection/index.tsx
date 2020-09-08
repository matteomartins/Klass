import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import InfoCard from "../InfoCard";
import { ModuleProps } from "../../../utils/CommonInterfaces";

interface DraggableSectionProps {
    cards: Array<ModuleProps>;
}

const DraggableSection: React.FC<DraggableSectionProps> = ({ cards }) => {
    return (
        <div className="creation-content">
            <div className="scroll-view">
                <Droppable key={1} droppableId="1">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="creation-cards"
                        >
                            {cards.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <InfoCard
                                                id={item.id}
                                                title={item.title}
                                                isDragging={snapshot.isDragging}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
};

export default DraggableSection;
