import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import InfoCard from "../InfoCard";
import InputWithButton from "../InputWithButton";

interface CreateDraggableSectionProps {
    cards: Array<any>;
    addCard: Function;
    removeCard: Function;
    placeholder: string;
    withNumber?: boolean;
    setCards?: Function;
}

const CreateDraggableSection: React.FC<CreateDraggableSectionProps> = ({
    cards,
    addCard,
    removeCard,
    placeholder,
    withNumber,
    setCards
}) => {


    function handleChange(value: number, id: string) {
        if(!setCards) return;
        let newCards = cards;
        const card = newCards.find((element:any) => element.id === id);
        const cardInd = newCards.indexOf(card);
        newCards[cardInd].content = value;
        setCards([...newCards]);
    }

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
                            {cards.map((item:any, index:any) => (
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
                                            {(()=> {
                                                if(withNumber) return (
                                                    <InfoCard
                                                        handleDelete={removeCard}
                                                        id={item.id}
                                                        title={item.title}
                                                        numContent={item?.content || 1}
                                                        setNumContent={handleChange}
                                                        isDragging={snapshot.isDragging}
                                                    />
                                                )
                                                else return (
                                                    <InfoCard
                                                        handleDelete={removeCard}
                                                        id={item.id}
                                                        title={item.title}
                                                        isDragging={snapshot.isDragging}
                                                    /> 
                                                )
                                            })()}
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
