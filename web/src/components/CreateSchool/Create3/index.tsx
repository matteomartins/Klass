import React from 'react';
import TruncatedContainer from '../../TruncatedContainer';

import './styles.css';
import { KaArrow, KaClose } from '../../../assets/icons';

interface Create3Props {
    turns: Array<any>;
    setTurns: Function;
}

const Create3:React.FC<Create3Props> = ({turns, setTurns}) => {

    function addTurn() {
        setTurns([...turns, {name: "", text: ""}])
    }

    function removeTurn(name:string) {
        const newTurns = turns;
        const deleted = newTurns.find((turn) => turn.name === name);
        const index = newTurns.indexOf(deleted);
        newTurns.splice(index,1);
        console.log(newTurns);
        setTurns(newTurns);
        console.log(turns);
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
                            <div className="creation-input">
                                <input type="text" placeholder="Novo Turno" />
                                <button onClick={()=> addTurn()}>+</button>
                            </div>
                            <div className="creation-cards">
                                {turns.map(({name, text}) => (
                                    <div key={name} className="creation-card">
                                        <input id={name} type="radio" name="turns" />
                                        <label htmlFor="turn">{text}</label>
                                        <button onClick={() => removeTurn(name)}><KaClose /></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="creation-container">
                        <div className="creation-header">
                            <h1>Horários</h1>
                            <KaArrow size={18} />
                        </div>
                        <div className="creation-content">
                            
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