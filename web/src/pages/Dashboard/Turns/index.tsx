import React, { useState } from 'react';

import BackButton from '../../../components/BackButton';
import List from '../../../components/CreateSchool/List';
import TurnInfoContainer from '../../../components/CreateSchool/TurnInfoContainer';
import TruncatedContainer from '../../../components/TruncatedContainer';
import { create3Functions } from '../../../utils/create3Functions';

import './styles.css';


const Turns: React.FC = () => {
    const [turns, setTurns] = useState([
        {
        id: "asd",
        title: "asddsa",
        content: {
            schedule: "8:00 às 15:30",
            classDuration: 50,
            days: [0,1,2,3],
            intervals: [],
        }
        }
    ]);
    const {
        addInterval,
        removeInterval,
    } = create3Functions(turns, setTurns, 0);
    
    return (
        <div className="main-turns">
            <BackButton to="/dashboard" />
            <TruncatedContainer title="Cursos">
                <div className="scroll-bar">
                    <div className="turns-container">
                        <div className="turns-content">
                            <h1>Integral</h1>
                            <div className="creation-group">
                                <div className="creation-container">
                                    <TurnInfoContainer
                                        addInterval={addInterval}
                                        removeInterval={removeInterval}
                                        selectedTurn={0}
                                        turns={turns}
                                    />
                                </div>
                                <div className="creation-container">
                                    <List />
                                </div>
                            </div>
                        </div>
                        <div className="turns-content">
                            <h1>Noite</h1>
                            <div className="creation-group">
                                <div className="creation-container">
                                    <TurnInfoContainer
                                        addInterval={addInterval}
                                        removeInterval={removeInterval}
                                        selectedTurn={0}
                                        turns={turns}
                                    />
                                </div>
                                <div className="creation-container">
                                    <List />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TruncatedContainer>
        </div>
    );
}

export default Turns;