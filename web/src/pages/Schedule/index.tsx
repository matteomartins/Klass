import React from "react";

import "./styles.css";
import BackButton from "../../components/BackButton";

import {
    KaPdf,
    KaPrinter,
    KaExcel,
    KaGoogle,
    KaArrow,
} from "../../assets/icons";

function Schedule() {
    function handleBack() {
        if (!document) return;
        const tableElement = document.getElementById("main-schedule");
        if (!tableElement) return;
        const rowQuantity = +getComputedStyle(tableElement).getPropertyValue(
            "--quantity-of-columns"
        );
        if (!rowQuantity) return;
    }

    return (
        <div className="main-schedule">
            <BackButton to="/home" />
            <div className="schedule-container">
                <div className="select-container">
                    <div id="select1">
                        <select>
                            <option value="0">Escola</option>
                            <option value="1">Etec de Taboão da Serra</option>
                            <option value="2">Etec de Embu das Artes</option>
                        </select>
                    </div>
                    <div id="select2">
                        <select>
                            <option value="0">Turma</option>
                            <option value="1">Manhã</option>
                            <option value="2">Tarde</option>
                            <option value="3">Noite</option>
                        </select>
                    </div>
                    <div id="select3">
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
                <div className="schedule-buttons">
                    <button onClick={() => handleBack()}>
                        <KaArrow size={22} />
                    </button>
                    <button>
                        <KaArrow size={22} />
                    </button>
                </div>
                <div className="schedule-content" id="main-schedule">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <span>Segunda</span>
                                </th>
                                <th>
                                    <span>Terça</span>
                                </th>
                                <th>
                                    <span>Quarta</span>
                                </th>
                                <th>
                                    <span>Quinta</span>
                                </th>
                                <th>
                                    <span>Sexta</span>
                                </th>
                                <th>
                                    <span>Sabado</span>
                                </th>
                                <th>
                                    <span>Domingo</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>07:30</td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>08:00</td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>08:30</td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>09:00</td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>09:30</td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>10:00</td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>10:30</td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>11:00</td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td>11:30</td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="export-container">
                    <div className="circle-icon-container">
                        <KaExcel size={22} />
                    </div>
                    <div className="circle-icon-container">
                        <KaPdf size={22} />
                    </div>
                    <div className="circle-icon-container">
                        <KaPrinter size={22} />
                    </div>
                    <div className="circle-icon-container">
                        <KaGoogle size={22} color="var(--color-primary)" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;
