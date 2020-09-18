import React from "react";
import Input from "../Input";
import InputCheckboxGroup from "../InputCheckboxGroup";
import InputWithButton from "../InputWithButton";
import { TurnProps } from "../../../utils/CommonInterfaces";
import InfoCard from "../InfoCard";

interface TurnInfoContainerProps {
    selectedTurn: number;
    addInterval: Function;
    turns: Array<TurnProps>;
    removeInterval: Function;
}

const TurnInfoContainer: React.FC<TurnInfoContainerProps> = ({
    selectedTurn,
    addInterval,
    turns,
    removeInterval,
}) => {

    if (selectedTurn === -1) {
        return (
            <div className="creation-content">
                <p>Selecione um turno</p>
            </div>
        );
    }

    return (
        <div className="creation-content">
            <Input name="hour" mask="99:99 às 99:99" placeholder="Horário" />
            <Input name="" placeholder="Duração da Aula" />
            <InputCheckboxGroup />
            <InputWithButton
                handleNew={addInterval}
                placeholder="Novo Intervalo"
            />
            <div className="scroll-view">
                <div className="creation-cards">
                    {(() => {
                        if (
                            turns[selectedTurn].content.intervals.length === 0
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
};

export default TurnInfoContainer;
