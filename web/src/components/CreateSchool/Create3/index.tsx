import React, { useState } from 'react';
import TruncatedContainer from '../../TruncatedContainer';

import './styles.css';
import { KaArrow, KaClose } from '../../../assets/icons';

interface Create3Props {
    turns: Array<any>;
    setTurns: Function;
}

const Create3:React.FC<Create3Props> = ({turns, setTurns}) => {
    const [name, setName] = useState('');

    function addTurn() {
        if(name.trim() !== '' && !turns.find(turn => turn.name.toLowerCase() === name.toLowerCase())) {
            setTurns([...turns, {name: name, text: name}]);
            setName('');
        }
    }
    function removeTurn(name:string) {
        let newTurns = turns;
        const deleted = newTurns.find(deleted_turn => deleted_turn.name === name);
        const index = newTurns.indexOf(deleted);
        newTurns.splice(index, 1);
        setTurns([...newTurns]);
    }
    function handleKeyDown (e:any){
        if (e.key === 'Enter') {
            addTurn()
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
                            <div className="creation-input">
                                <input 
                                    type="text" 
                                    placeholder="Novo Turno" 
                                    value={name} 
                                    onChange={e => setName(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <button onClick={()=> addTurn()}>+</button>
                            </div>
                            <div className="scroll-view">
                                <div className="creation-cards">
                                    {turns.map(({name, text}) => (
                                        <div key={name} className="creation-card">
                                            <input id={name} type="radio" name="turns" />
                                            <label htmlFor={name}>{text}</label>
                                            <button onClick={() => removeTurn(name)}><KaClose /></button>
                                        </div>
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