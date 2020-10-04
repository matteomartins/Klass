import React, { useState } from "react";

import "./styles.css";
import BackButton from "../../components/BackButton";
import {
    KaPdf,
    KaPrinter,
    KaExcel,
    KaGoogle,
    KaArrow,
} from "../../assets/icons";

const tableData = [
    [{id: "000", content: ""}, {id: "0", content: "Segunda"}, {id: "1", content: "Terça"}, {id: "2", content: "Quarta"}, {id: "3", content: "Quinta"}, {id: "4", content: "Sexta"}, {id: "5", content: "Sábado"}, {id: "6", content: "Domingo"}],
    [{id: "100", content: "7:30"}, {id: "10", content: ""}, {id: "11", content: ""}, {id: "12", content: ""}, {id: "13", content: ""}, {id: "14", content: ""}, {id: "15", content: ""}, {id: "16", content: ""} ],
    [{id: "200", content: "8:20"}, {id: "20", content: ""}, {id: "21", content: ""}, {id: "22", content: ""}, {id: "23", content: ""}, {id: "24", content: ""}, {id: "25", content: ""}, {id: "26", content: ""} ],
    [{id: "300", content: "9:10"}, {id: "30", content: ""}, {id: "31", content: ""}, {id: "32", content: ""}, {id: "33", content: ""}, {id: "34", content: ""}, {id: "35", content: ""}, {id: "36", content: ""} ],
    [{id: "400", content: "10:20"}, {id: "40", content: ""}, {id: "41", content: ""}, {id: "42", content: ""}, {id: "43", content: ""}, {id: "44", content: ""}, {id: "45", content: ""}, {id: "46", content: ""} ],
    [{id: "500", content: "11:10"}, {id: "50", content: ""}, {id: "51", content: ""}, {id: "52", content: ""}, {id: "53", content: ""}, {id: "54", content: ""}, {id: "55", content: ""}, {id: "56", content: ""} ],
    [{id: "600", content: "13:00"}, {id: "60", content: ""}, {id: "61", content: ""}, {id: "62", content: ""}, {id: "63", content: ""}, {id: "64", content: ""}, {id: "65", content: ""}, {id: "66", content: ""} ],
    [{id: "700", content: "13:50"}, {id: "70", content: ""}, {id: "71", content: ""}, {id: "72", content: ""}, {id: "73", content: ""}, {id: "74", content: ""}, {id: "75", content: ""}, {id: "76", content: ""} ],
    [{id: "800", content: "14:40"}, {id: "80", content: ""}, {id: "81", content: ""}, {id: "82", content: ""}, {id: "83", content: ""}, {id: "84", content: ""}, {id: "85", content: ""}, {id: "86", content: ""} ],
    [{id: "900", content: "15:30"}, {id: "90", content: ""}, {id: "91", content: ""}, {id: "92", content: ""}, {id: "93", content: ""}, {id: "94", content: ""}, {id: "95", content: ""}, {id: "96", content: ""} ],
]

interface ScheduleProps {
    sideContainerSize ?: number;
    to?: string;
}

const Schedule:React.FC<ScheduleProps> = ({sideContainerSize = 0, to = "/home"}) => {
    const [fitRows, setFitRows] = useState(7);
    const [maxRowQuantity, setMaxRowQuatity] = useState(7);
    const [minRowQuantity, setMinRowQuatity] = useState(0);

    React.useEffect(() => {
        function handleResize() {
            let maxQuantity;
            if (window.innerWidth > (1205+sideContainerSize)) maxQuantity = 7;
            else if(window.innerWidth > (1045+sideContainerSize)) maxQuantity = 6;
            else if(window.innerWidth > (885+sideContainerSize)) maxQuantity = 5;
            else if(window.innerWidth > (725+sideContainerSize)) maxQuantity = 4;
            else if(window.innerWidth > (560+sideContainerSize)) maxQuantity = 3;
            else if(window.innerWidth > (405+sideContainerSize)) maxQuantity = 2;
            else maxQuantity = 1;
            if(maxQuantity < (maxRowQuantity - minRowQuantity)) setMaxRowQuatity(maxQuantity - minRowQuantity);
            setFitRows(maxQuantity);
        }
        handleResize();
        window.addEventListener('resize', handleResize)
    })

    function handleBack() {
        if(minRowQuantity < fitRows) {
            setMaxRowQuatity(fitRows)
            setMinRowQuatity(0)
        }
        else {
            setMaxRowQuatity(prevState => prevState - fitRows);
            setMinRowQuatity(prevState => prevState - fitRows);
        }
    }

    function handleNext() {
        if(minRowQuantity + fitRows === 7) {
            return;
        }
        else if((maxRowQuantity + fitRows) > 7) {
            setMaxRowQuatity(7);
            setMinRowQuatity(7 - fitRows);
        }
        else {
            setMaxRowQuatity(prevState => prevState + fitRows);
            setMinRowQuatity(prevState => prevState + fitRows);
        }
    }

    return (
        <div className="main-schedule">
            <BackButton to={to} />
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
                    <button onClick={() => handleNext()}>
                        <KaArrow size={22} />
                    </button>
                </div>
                <div className="schedule-content" id="main-schedule">
                    <table>
                        {tableData.map((row, ind) => {
                            if(ind === 0) {
                                return (
                                    <thead key={ind}>
                                        <tr>
                                            {row.map(({id, content}, index) => {
                                                if((index <= maxRowQuantity && index > minRowQuantity) || index === 0) {
                                                    return <th key={id}><span>{content}</span></th>
                                                }
                                                return null;
                                            })}
                                        </tr>
                                    </thead>
                                )
                            }
                            else {
                                return (
                                    <tr key={ind}>
                                        {row.map(({id, content}, index) => {
                                            if((index <= maxRowQuantity && index > minRowQuantity) || index === 0) {
                                                return <td key={id}><span>{content}</span></td>
                                            }
                                            return null;
                                        })}
                                    </tr>
                                )
                            }
                        })}
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
