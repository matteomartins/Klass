import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Input from "../Input";

import { CardProps } from "../../../../utils/CommonInterfaces";
import InfoCard from "../InfoCard";

interface ConnectionSectionProps {
    cards: Array<CardProps>;
    setCards?: Function;
    selectedCard: number;
    removeConnection: Function;
    unselectedMessage: string;
    noCardMessage: string;
    title: string;
    withNumber?: boolean;
    email?: string;
    setEmail?: Function;
}

const ConnectionSection: React.FC<ConnectionSectionProps> = ({
    cards,
    setCards,
    selectedCard,
    removeConnection,
    unselectedMessage,
    noCardMessage,
    title,
    withNumber,
    email,
    setEmail
}) => {
    if (selectedCard === -1) {
        return (
            <div className="creation-container">
                <div className="creation-header">
                    <h1>Conecte</h1>
                </div>
                <div className="creation-content">
                    <p>{unselectedMessage}</p>
                </div>
            </div>
        );
    }

    function handleChange(value: number, id: string) {
        if(!setCards) return;
        let newCards = cards;
        const card = newCards[selectedCard].content.find((element:any) => element.id === id);
        const cardInd = newCards[selectedCard].content.indexOf(card);
        newCards[selectedCard].content[cardInd].content = value;
        setCards([...newCards]);
    }

    return (
        <div className="creation-container">
            <div className="creation-header">
                <h1>Conecte</h1>
            </div>
            <div className="creation-content">
                {(() => {
                    if(email !== undefined && setEmail !== undefined) return (
                        <Input
                            name="teacherEmail"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    )
                })()}

                <h2>{cards[selectedCard].title}</h2>
                <div className="scroll-view">
                    <Droppable
                        key={selectedCard + 2}
                        droppableId={`${selectedCard + 2}`}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="creation-cards"
                            >
                                <h3>{title}</h3>
                                {(() => {
                                    if (
                                        cards[selectedCard].content.length === 0
                                    ) {
                                        return <p>{noCardMessage}</p>;
                                    } else {
                                        return cards[
                                            selectedCard
                                        ].content.map(({ id, title, content }: any) => {
                                            if(withNumber) return (
                                                <InfoCard
                                                    key={id}
                                                    handleDelete={removeConnection}
                                                    id={id}
                                                    title={title}
                                                    numContent={content || 1}
                                                    setNumContent={handleChange}
                                                />
                                            )
                                            else return (
                                                <InfoCard
                                                    key={id}
                                                    handleDelete={removeConnection}
                                                    id={id}
                                                    title={title}
                                                />
                                            )
                                        });
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
