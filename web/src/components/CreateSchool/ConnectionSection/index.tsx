import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { KaArrow } from "../../../assets/icons";
import { CardProps } from "../../../utils/commonInterfaces";
import InfoCard from "../InfoCard";

interface ConnectionSectionProps {
    cards: Array<CardProps>;
    selectedCard: number;
    removeConnection: Function;
}

const ConnectionSection: React.FC<ConnectionSectionProps> = ({
    cards,
    selectedCard,
    removeConnection,
}) => {
    if (selectedCard === -1) {
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
                                <h3>Módulos</h3>
                                {(() => {
                                    if (
                                        cards[selectedCard].content.length === 0
                                    ) {
                                        return <p>Insira os Módulos</p>;
                                    } else {
                                        return cards[
                                            selectedCard
                                        ].content.map(({ id, title }: any) => (
                                            <InfoCard
                                                key={id}
                                                handleDelete={removeConnection}
                                                id={id}
                                                title={title}
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
