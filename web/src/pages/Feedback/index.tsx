import React from 'react';


import './styles.css';
import TruncatedContainer from '../../components/TruncatedContainer';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';

function Feedback() {
    return(
        <div className="feedback-container">
            <BackButton to="/home" />
            <TruncatedContainer title="Feedback">
                <div className="message-container">
                    <h1>Envie um Feedback</h1>
                    <div className="input-container">
                        <input id="input1" placeholder="  Digite o Assunto"/>
                        <input id="input2" placeholder="  Digite seu Feedback"/>
                    </div>
                </div>
            </TruncatedContainer>
            <button className="btn">Enviar</button>
        </div>
    )
}

export default Feedback;