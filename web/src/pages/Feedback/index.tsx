import React from 'react';

import './styles.css';
import TruncatedContainer from '../../components/TruncatedContainer';
import BackButton from '../../components/BackButton';

function Feedback() {
    return(
        <div className="feedback-container">
            <BackButton to="/home" />
            <TruncatedContainer title="Feedback" id="feedback-truncated-container">
                <div className="feedback-content">
                    <div className="message-container">
                        <h1>Envie um Feedback</h1>
                        <div className="input-container">
                            <input type="text" placeholder="Digite o Assunto"/>
                            <textarea placeholder="Digite seu Feedback"/>
                        </div>
                    </div>
                </div>
            </TruncatedContainer>
            <div className="btn-container">
                <button className="btn">Enviar</button>
            </div>
        </div>
    )
}

export default Feedback;