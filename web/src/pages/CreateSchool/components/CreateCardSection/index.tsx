import React from "react";
import InputWithButton from "../InputWithButton";
import InfoCardButton from "../InfoCardButton";
import { CardProps } from "../../../../utils/CommonInterfaces";
import { v4 as uuidv4 } from "uuid";

interface CreateCardSectionProps {
    cards: Array<CardProps>;
    addCard: Function;
    removeCard: Function;
    selectedCard: number;
    setSelectedCard: Function;
    placeholder: string;
}

const CreateCardSection: React.FC<CreateCardSectionProps> = ({
    cards,
    addCard,
    removeCard,
    selectedCard,
    setSelectedCard,
    placeholder,
}) => {
    const group = uuidv4();
    return (
        <div className="creation-content">
            <InputWithButton handleNew={addCard} placeholder={placeholder} />
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
                            handleCheck={(value: number) =>
                                setSelectedCard(value)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreateCardSection;
