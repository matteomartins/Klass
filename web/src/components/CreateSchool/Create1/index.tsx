import React from "react";
import TruncatedContainer from "../../TruncatedContainer";

import "./styles.css";

function Create1() {
    return (
        <TruncatedContainer title="Criar" className="create-school-container">
            <div className="create-school-content">
                <h1>Insira informações iniciais da escola</h1>
                <div className="input-container">
                    <input type="text" placeholder="Nome da Escola" />
                    <textarea placeholder="Digite seu Feedback" />
                    <select value="">
                        <option value="" unselectable="off" disabled>
                            Tipo de Escola
                        </option>
                        <option value="1">Escola de Ensino Fundamental</option>
                    </select>
                </div>
            </div>
        </TruncatedContainer>
    );
}

export default Create1;
