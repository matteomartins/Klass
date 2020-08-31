import React, { useState } from 'react';
import Create1 from '../../components/CreateSchool/Create1';
import BackButton from '../../components/BackButton';
import { useHistory } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import './styles.css';

function CreateSchool() {
    const [step, setStep] = useState(0);
    const [ mode, setMode ] = useState('foward');
    const history = useHistory();

    const screens = [Create1, Create1, Create1, Create1, Create1, Create1, Create1, Create1];

    function handleNext() {
        if(step===6) history.push('/home');
        setMode('foward')
        setStep(step+1);
    }
    function handleBack(e:any) {
        e.preventDefault();
        setMode('backward');
        setStep(step-1);
    }

    return (
        <div className="access-container">
            <BackButton to="/" onClick={e  => handleBack(e)} style={{display: step===0?"none":"block"}} />
            <div className={mode}>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                    timeout={400}
                    classNames="fade"
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
                <button className="btn" onClick={handleNext}>Avançar</button>
                <div className="progress-icons"> 
                    {step+1}/7
                </div>
            </div>
        </div>
    )
}

export default CreateSchool;
