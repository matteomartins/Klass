import React, { useState } from 'react';
import TruncatedContainer from '../../TruncatedContainer';

import './styles.css';
import { KaArrow, KaClose } from '../../../assets/icons';
import InputWithButton from '../InputWithButton';
import InfoCard from '../InfoCard';
import Input from '../Input';
import InfoCardButton from '../InfoCardButton';

interface Create3Props {
    turns: Array<any>;
    setTurns: Function;
}

interface IntervalProps {
    name: string;
    text: string;
}

const Create3:React.FC<Create3Props> = ({turns, setTurns}) => {
    const intervalsDefault:Array<IntervalProps> = [];
    const [intervals, setIntervals] = useState(intervalsDefault)

    function addTurn(name:string) {
        if(name.trim() !== '' && !turns.find(turn => turn.name.toLowerCase() === name.toLowerCase())) {
            setTurns([...turns, {name: name, text: name}]);
        }
    }
    function removeTurn(name:string) {
        let newTurns = turns;
        const deleted = newTurns.find(deleted_turn => deleted_turn.name === name);
        if(deleted) {
            const index = newTurns.indexOf(deleted);
            newTurns.splice(index, 1);
            setTurns([...newTurns]);
        }
    }
    function addInterval(name:string) {
        if(name.trim() !== '' && !intervals.find(interval => interval.name.toLowerCase() === name.toLowerCase())) {
            setIntervals([...intervals, {name: name, text: name}]);
        }
    }
    function removeInterval(name:string) {
        let newIntervals = intervals;
        const deleted = newIntervals.find(deleted_interval => deleted_interval.name === name);
        if(deleted) {
            const index = newIntervals.indexOf(deleted);
            newIntervals.splice(index, 1);
            setIntervals([...newIntervals]);
        }
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
                        <div className="creation-content">
                            <InputWithButton handleNew={addTurn} />
                            <div className="scroll-view">
                                <div className="creation-cards">
                                    {turns.map(({name, text}) => (
                                        <InfoCardButton handleDelete={removeTurn} name={name} text={text} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="creation-container">
                        <div className="creation-header">
                            <h1>Horários</h1>
                            <KaArrow size={18} />
                        </div>
                        <div className="creation-content">
							<Input name="" placeHolder="Horário" />
							<Input name="" placeHolder="Duração da Aula" />
							<div>
								<input type="checkbox" value="S" />
								<input type="checkbox" value="T" />
								<input type="checkbox" value="Q" />
								<input type="checkbox" value="Q" />
								<input type="checkbox" value="S" />
								<input type="checkbox" value="S" />
								<input type="checkbox" value="D" />
							</div>
                            <InputWithButton handleNew={addInterval} />
							<div className="creation-cards">
                                    {intervals.map(({name, text}) => (
                                        <InfoCard handleDelete={removeInterval} name={name} text={text} />
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="creation-container">
                        <div className="creation-header">
                            <h1>Visualização</h1>
                            <KaArrow size={18} />
                        </div>
                        <div className="creation-content">
                            
                        </div>
                    </div>
                </div>
            </div>
        </TruncatedContainer>
    )
}

export default Create3;