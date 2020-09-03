import React from 'react';

import './styles.css';
import BackButton from '../../components/BackButton';


function Schedule() {
    return(

        <div className="main-politics">
            <BackButton to="/home" />

            <div className="select1-container">
                <select>
                    <option value="0">Escola</option>
                    <option value="1">Etec de Taboão da Serra</option>
                    <option value="2">Etec de Embu das Artes</option>
                </select>
            </div>
            <div className="select2-container">
                <select>
                    <option value="0">Turma</option>
                    <option value="1">Manhã</option>
                    <option value="2">Tarde</option>
                    <option value="2">Noite</option>
                </select>
            </div>
            <div className="select3-container">
                <select>
                    <option value="0">Ano</option>
                    <option value="1">1° Ano A</option>
                    <option value="1">1° Ano B</option>
                    <option value="1">2° Ano A</option>
                    <option value="1">2° Ano B</option>
                    <option value="1">3° Ano A</option>
                    <option value="1">3° Ano B</option>
                    <option value="1">4° Ano A</option>
                    <option value="1">4° Ano B</option>
                    
                </select>
            </div>

            <div className="schedule-container">

            </div>
        </div>
    )
}

export default Schedule;