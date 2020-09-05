import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import ExitCreateSchool from '../../components/ExitCreateSchool';

import './styles.css';
import Create1 from '../../components/CreateSchool/Create1';
import Create2 from '../../components/CreateSchool/Create2';
import Create3 from '../../components/CreateSchool/Create3';
import Create4 from '../../components/CreateSchool/Create4';
import Create5 from '../../components/CreateSchool/Create5';
import Create6 from '../../components/CreateSchool/Create6';
import Create7 from '../../components/CreateSchool/Create7';
import BackButton from '../../components/BackButton';

function CreateSchool() {
    const [active, setActive] = useState(false)
    const [ step, setStep ] = useState(2);
    const [ mode, setMode ] = useState('foward');
    const [ turns, setTurns ] = useState([{name: "integral", text:"Integral"}, {name: 'noturno', text: 'Noturno'}]);

    const history = useHistory();

    function NewCreate3() {
        return (
            <Create3 turns={turns} setTurns={setTurns} />
        )
    }

    const screens = [Create1, Create2, NewCreate3, Create4, Create5, Create6, Create7];

    function handleNext() {
        if(step===6) history.push('/dashboard');
        setMode('foward')
        setStep(step+1);
    }
    function handleBack(e:any) {
        if(step!==0){
            e.preventDefault();
            setMode('backward');
            setStep(step-1);
        }
    }

    return (
        
        <div className="create-school-container">
            <BackButton to="/home" onClick={e  => handleBack(e)} />
            <div className={mode}>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                    timeout={400}
                    classNames="slide"
                    key={step}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                >
                    {screens[step]}
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className="progress-container">
                <button className="btn" onClick={()=>setActive(true)}>Avançar</button>
                <span> {step+1}/7 </span>
            </div>
            <ExitCreateSchool active={active} setActive={setActive} />
        </div>
        
    )
}

export default CreateSchool;