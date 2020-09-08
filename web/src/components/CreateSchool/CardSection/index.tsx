import React from "react";
import InfoCardButton from "../InfoCardButton";
import { CardProps } from "../../../utils/commonInterfaces";
import { v4 as uuidv4 } from "uuid";

interface CardSectionProps {
    cards: Array<CardProps>;
    removeCard: Function;
    selectedCard: number;
    setSelectedCard: Function;
}

const CardSection: React.FC<CardSectionProps> = ({
    cards,
    removeCard,
    selectedCard,
    setSelectedCard,
}) => {
    const group = uuidv4();
    return (
        <div className="creation-content">
            <div className="scroll-view">
                <div className="creation-cards">
                    {cards.map(({ id, title }, index) => (
                        <InfoCardButton
                            index={index}
                            handleDelete={removeCard}
                            id={id}
                            title={title}
                            group={group}
                            checked={selectedCard === index ? true : false}
                            handleCheck={(value: number) => {
                                setSelectedCard(value);
                                console.log(value);
                            }}
                            disableDelete
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardSection;
