import React from 'react';

import './styles.css';
import BackButton from '../../components/BackButton';

function Schedule() {
    return(
        <div className="main-politics">
            <BackButton to="/home" />
            <div className="container">
                <div className="select-container">
                    <div className="select1">
                        <select>
                            <option value="0">Escola</option>
                            <option value="1">Etec de Taboão da Serra</option>
                            <option value="2">Etec de Embu das Artes</option>
                        </select>
                    </div>
                    <div className="select2">
                        <select>
                            <option value="0">Turma</option>
                            <option value="1">Manhã</option>
                            <option value="2">Tarde</option>
                            <option value="2">Noite</option>
                        </select>
                    </div>
                    <div className="select3">
                        <select>
                            <option value="0">Ano</option>
                            <option value="1">1° Ano A</option>
                            <option value="1">1° Ano B</option>
                            <option value="1">2° Ano A</option>
                            <option value="1">2° Ano B</option>
                            <option value="1">3° Ano A</option>
                            <option value="1">3° Ano B</option>                            
                        </select>
                    </div>
                </div>
                <div className="schedule-container">
                    <table>
                        <tr>
                            <th id="hora">&nbsp;</th>
                            <th>Segunda</th>
                            <th>Terça</th>
                            <th>Quarta</th>
                            <th>Quinta</th>
                            <th>Sexta</th>
                        </tr>
                        <tr>
                            <td id="hora">07:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td id="hora">07:30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td id="hora">08:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td id="hora">08:30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td id="hora">09:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td id="hora">09:30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td id="hora">10:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td id="hora">10:30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td id="hora">11:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td id="hora">11:30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>


                </div>
            </div>
        </div>
    )
}

export default Schedule;