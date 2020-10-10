import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import InfoCard from "../InfoCard";
import InputWithButton from "../InputWithButton";
import { ModuleProps } from "../../../../utils/CommonInterfaces";

interface CreateDraggableSectionProps {
    cards: Array<ModuleProps>;
    addCard: Function;
    removeCard: Function;
    placeholder: string;
}

const CreateDraggableSection: React.FC<CreateDraggableSectionProps> = ({
    cards,
    addCard,
    removeCard,
    placeholder,
}) => {
    return (
        <div className="creation-content">
            <InputWithButton handleNew={addCard} placeholder={placeholder} />
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
                                                handleDelete={removeCard}
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

export default CreateDraggableSection;
