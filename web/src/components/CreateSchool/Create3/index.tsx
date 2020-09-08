import React, { useState } from "react";
import TruncatedContainer from "../../TruncatedContainer";

import "./styles.css";
import { KaArrow } from "../../../assets/icons";
import InputWithButton from "../InputWithButton";
import InfoCard from "../InfoCard";
import Input from "../Input";
import InputCheckboxGroup from "../InputCheckboxGroup";
import List from "../List";
import CreateCardSection from "../CreateCardSection";
import { create3Functions } from "../../../utils/create3Functions";
import { TurnProps } from "../../../utils/commonInterfaces";

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

    function TurnInfoContainer() {
        if (selectedTurn === -1) {
            return (
                <div className="creation-content">
                    <p>Selecione um turno</p>
                </div>
            );
        }

        return (
            <div className="creation-content">
                <Input name="" placeHolder="Horário" />
                <Input name="" placeHolder="Duração da Aula" />
                <InputCheckboxGroup />
                <InputWithButton
                    handleNew={addInterval}
                    placeholder="Novo Intervalo"
                />
                <div className="scroll-view">
                    <div className="creation-cards">
                        {(() => {
                            if (
                                turns[selectedTurn].content.intervals.length ===
                                0
                            ) {
                                return <p>Adicione intervalos</p>;
                            } else {
                                return turns[
                                    selectedTurn
                                ].content.intervals.map(({ id, title }) => (
                                    <InfoCard
                                        handleDelete={removeInterval}
                                        id={id}
                                        title={title}
                                    />
                                ));
                            }
                        })()}
                    </div>
                </div>
            </div>
        );
    }

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
                        <TurnInfoContainer />
                    </div>
                    <div className="creation-container">
                        <div className="creation-header">
                            <h1>Visualização</h1>
                            <KaArrow size={18} />
                        </div>
                        <div className="creation-content">
                            <List />
                        </div>
                    </div>
                </div>
            </div>
        </TruncatedContainer>
    );
};

export default Create3;
