import React from "react";
import { useHistory } from "react-router-dom";
import { Bar, HorizontalBar, Pie } from 'react-chartjs-2';

import "./styles.css";

function Dashboard(){
    const history = useHistory();

    const data = {
        labels: ['jan', 'fev', 'mar',
                 'abr', 'mai'],
        datasets: [
          {
            label: 'Alterações',
            backgroundColor: '#39729D',
            data: [65, 59, 80, 81, 56]
          }
        ]
    }
    
    const data2 = {
        labels: ['jan', 'fev', 'mar',
                 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out'],
        datasets: [
          {

              label: 'Acessos',
              backgroundColor: '#39729D',
              data: [65, 59, 70, 71, 56, 24, 54, 28, 15, 25]
          }
        ]
    }
    const dataPie = {
        labels: ['Manhã(h) ', 'Integral(h) ', 'Noite(h) '],
        datasets: [
          {
            label: 'Turno',
            backgroundColor: [
              '#B7B345',
              '#0792A9',
              '#F68237'
            ],
            data: [65, 59, 80]
          }
        ]
    }

    return(
            <div className="main-dashboard">
                <div className="scroll-view">
                    <div className="dashboard-content">
                        <div className="left">
                            <div className="section" onClick={() => history.push("/dashboard-schedule")}>
                                <h1 className="title">Horas Semanais</h1>
                                <p className="dados">40h</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-turns")}>
                                <h1 className="title">Turnos</h1>
                                <p className="dados">2</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-courses")}>
                                <h1 className="title">Cursos</h1>
                                <p className="dados">2</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-modules")}>
                                <h1 className="title">Módulos</h1>
                                <p className="dados">6</p>
                            </div>    
                        </div>
                        <div className="center">
                            <div className="main">
                                <h1 className="title">Alterações</h1>
                                <HorizontalBar 
                                    data={data}
                                    options={{legend: {
                                        display: false
                                    }}}
                                />
                            </div>
                            <div className="main">
                                <h1 className="title">Acesos</h1>
                                <Bar 
                                    data={data2}
                                    options={{legend: {
                                        display: false
                                    }}}
                                />
                            </div>
                            <div className="main">
                                <h1 className="title">Turnos</h1>
                                <Pie
                                    data={dataPie}
                                    options={{legend: {
                                        display: false
                                    }}}
                                />
                            </div>
                        </div>
                        <div className="right">
                            <div className="section" onClick={() => history.push("/dashboard-classes")}>
                                <h1 className="title">Turmas</h1>
                                <p className="dados">12</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-subjects")}>
                                <h1 className="title">Discplinas</h1>
                                <p className="dados">36</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-teachers")}>
                                <h1 className="title">Docentes</h1>
                                <p className="dados">54</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-reports")}>
                                <h1 className="title">Relatórios</h1>
                                <p className="dados">45</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Dashboard;