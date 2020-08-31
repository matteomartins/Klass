import React from 'react';
import TruncatedContainer from '../../TruncatedContainer';

import './styles.css';

function Create2() {
    return (
        <TruncatedContainer title="Criar" className="create-school-container">
            <div className="feedback-content">
                <div className="message-container">
                    <h1>Insira informações iniciais da escola</h1>
                    <div className="input-container">
                        <input type="text" placeholder="Digite o Assunto"/>
                        <textarea placeholder="Digite seu Feedback"/>
                        <select>
                            <option value="Escola de Ensino Fundamental"></option>
                        </select>
                    </div>
                </div>
            </div>
        </TruncatedContainer>
    )
}

export default Create2;
