import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isGetAccessor } from 'typescript';

import BackButton from '../../../components/BackButton';
import TruncatedContainer from '../../../components/TruncatedContainer';
import api from '../../../services/api';
import { create3Functions } from '../../../utils/create3Functions';
import List from '../../CreateSchool/components/List';
import TurnInfoContainer from '../../CreateSchool/components/TurnInfoContainer';

import './styles.css';


const Turns: React.FC = () => {
    const [schoolId, setSchoolId] = useState('');
    const emptyTurn:any = [];
    const [turns, setTurns] = useState(emptyTurn);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const id = params.get('id');
            if(!id || id === null) return history.push('/home');
            setSchoolId(id);
            let newTurns:any = await api.get(`/schools/${id}/turns`);
            
            newTurns = newTurns.data.turns.map(({name, start, end, class_duration, week_days, intervals}:any) => {
                if(start.length === 4) start = '0'+start;
                if(end.length === 4) end = '0'+end;
                return {
                    id: name,
                    title: name,
                    content: {
                        schedule: `${start} às ${end}`,
                        classDuration: class_duration,
                        days: week_days,
                        intervals: intervals.map(({start, end}:any)=> {
                            if(start.length === 4) start = '0'+start;
                            if(end.length === 4) end = '0'+end;
                            return {
                                id: `${start} às ${end}`,
                                title: `${start} às ${end}`,
                            }
                        })
                    }
                }
            })

            setTurns(newTurns);
        })()
    }, []);

    const {
        addInterval,
        removeInterval,
    } = create3Functions(turns, setTurns, 0);
    
    return (
        <div className="main-turns">
            <BackButton to={`/dashboard?id=${schoolId}`} />
            <TruncatedContainer title="Cursos">
                <div className="scroll-bar">
                    <div className="turns-container">
                        {turns.map((turn:any, ind:number)=> (
                            <div className="turns-content">
                                <h1>Integral</h1>
                                <div className="creation-group">
                                    <div className="creation-container">
                                        <TurnInfoContainer
                                            addInterval={addInterval}
                                            removeInterval={removeInterval}
                                            selectedTurn={ind}
                                            turns={turns}
                                            setTurns={setTurns}
                                        />
                                    </div>
                                    <div className="creation-container">
                                    <List 
                                        duration={turns[ind]?.content?.classDuration || 0} 
                                        schedule={turns[ind]?.content?.schedule || ''} 
                                        intervals={turns[ind]?.content?.intervals || []} 
                                    />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </TruncatedContainer>
        </div>
    );
}

export default Turns;