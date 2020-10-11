import React, { useState } from "react";

import "./styles.css";
import { KaArrow } from "../../../../assets/icons";
import List from "../List";
import CreateCardSection from "../CreateCardSection";
import { create3Functions } from "../../../../utils/create3Functions";
import { TurnProps } from "../../../../utils/CommonInterfaces";
import TurnInfoContainer from "../TurnInfoContainer";
import TruncatedContainer from "../../../../components/TruncatedContainer";

interface Create3Props {
    turns: Array<TurnProps>;
    setTurns: Function;
}

const Create3: React.FC<Create3Props> = ({ turns, setTurns }) => {
    const [selectedTurn, setSelectedTurn] = useState(-1);
    const {
        addInterval,
        addTurn,
        removeInterval,
        removeTurn,
    } = create3Functions(turns, setTurns, selectedTurn);

    return (
        <TruncatedContainer title="Criar" className="create-school-container">
            <div className="create-school-content">
                <h1>Crie Turnos e Informe seus Horários</h1>
                <div className="creation-group">
                    <div className="creation-container">
                        <div className="creation-header">
                            <h1>Turno</h1>
                            <KaArrow size={18} />
                        </div>
                        <CreateCardSection
                            cards={turns}
                            addCard={addTurn}
                            removeCard={removeTurn}
                            selectedCard={selectedTurn}
                            setSelectedCard={setSelectedTurn}
                            placeholder="Novo Turno"
                        />
                    </div>
                    <div className="creation-container">
                        <div className="creation-header">
                            <h1>Horários</h1>
                            <KaArrow size={18} />
                        </div>
                        <TurnInfoContainer
                            addInterval={addInterval}
                            removeInterval={removeInterval}
                            selectedTurn={selectedTurn}
                            turns={turns}
                            setTurns={setTurns}
                        />
                    </div>
                    <div className="creation-container">
                        <div className="creation-header">
                            <h1>Visualização</h1>
                            <KaArrow size={18} />
                        </div>
                        <div className="creation-content">
                            <List 
                                duration={turns[selectedTurn]?.content?.classDuration || 0} 
                                schedule={turns[selectedTurn]?.content?.schedule || ''} 
                                intervals={turns[selectedTurn]?.content?.intervals || []} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </TruncatedContainer>
    );
};

export default Create3;
