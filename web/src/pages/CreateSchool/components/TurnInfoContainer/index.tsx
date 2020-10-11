import React from "react";
import Input from "../Input";
import InputWithButton from "../InputWithButton";
import { TurnProps } from "../../../../utils/CommonInterfaces";
import InfoCard from "../InfoCard";
import InputCheckboxGroup from "../../../../components/InputCheckboxGroup";

interface TurnInfoContainerProps {
    selectedTurn: number;
    addInterval: Function;
    turns: Array<TurnProps>;
    setTurns: Function;
    removeInterval: Function;
}

const TurnInfoContainer: React.FC<TurnInfoContainerProps> = ({
    selectedTurn,
    addInterval,
    turns,
    setTurns,
    removeInterval,
}) => {

    if (selectedTurn === -1) {
        return (
            <div className="creation-content">
                <p>Selecione um turno</p>
            </div>
        );
    }

    function handleChangeSchedule(value: string) {
        let newTurns = turns;
        newTurns[selectedTurn].content.schedule = value;
        setTurns([...newTurns]);
    }

    function handleChangeClassDuration(value: string) {
        let newTurns = turns;
        newTurns[selectedTurn].content.classDuration = +value;
        setTurns([...newTurns]);
    }

    return (
        <div className="creation-content">
            <Input 
                name="hour" 
                mask="99:99 às 99:99" 
                placeholder="Horário" 
                value={turns[selectedTurn].content.schedule || ''} 
                onChange={e => handleChangeSchedule(e.target.value)} 
            />
            <Input 
                name="duration"
                type="number"
                placeholder="Duração da Aula" 
                value={turns[selectedTurn].content.classDuration || ''} 
                onChange={e => handleChangeClassDuration(e.target.value)}  
            />
            <InputCheckboxGroup turns={turns} setTurns={setTurns} selectedTurn={selectedTurn} />
            <InputWithButton
                handleNew={addInterval}
                placeholder="Novo Intervalo"
                mask="99:99 às 99:99"
            />
            <div className="scroll-view">
                <div className="creation-cards">
                    {(() => {
                        if (
                            turns[selectedTurn].content.intervals.length === 0
                        ) {
                            return <p>Adicione intervalos</p>;
                        } else {
                            return turns[selectedTurn].content.intervals.map(({ id, title }, ind) => (
                                <InfoCard
                                    key={ind}
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
