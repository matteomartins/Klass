import React from "react";
import TruncatedContainer from "../../TruncatedContainer";

import "./styles.css";
import IconCard from "../../IconCard";
import ContentCard from "../../ContentCard";
import { KaCalendar } from "../../../assets/icons";

function Create2() {
    const cards = [
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
        KaCalendar,
    ];

    return (
        <TruncatedContainer title="Criar" className="create-school-container">
            <div className="create-school-content">
                <h1>Escolha um icone para a escola</h1>
                <div className="icons-container">
                    <div className="scroll-view">
                        <div>
                            <div className="icons-content">
                                {cards.map((card) => (
                                    <IconCard
                                        color="#F68237"
                                        Icon={card}
                                        onClick={() => {}}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="icon-description">
                        <ContentCard
                            text="Etec de Taboão da Serra"
                            color="#F68237"
                            title=""
                        />
                    </div>
                </div>
            </div>
        </TruncatedContainer>
    );
}

export default Create2;
