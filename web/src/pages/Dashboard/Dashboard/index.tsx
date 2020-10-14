import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Bar, HorizontalBar, Pie } from 'react-chartjs-2';

import "./styles.css";
import api from "../../../services/api";


function Dashboard(){
    const history = useHistory();
    const dashboardBlank:any = {};
    const [dashboardData, setDashboardData] = useState(dashboardBlank);

    useEffect(() => {
        (async () => {
            const search = window.location.search;
            const params = new URLSearchParams(search);
            const id = params.get('id');
            if(!id) history.push('/home');
            try {
                const dashboard =  await api.get(`/schools/${id}/dashboard`);
                setDashboardData(dashboard.data.dashboard);
            }
            catch {
                history.push('/home');
            }
        })()
    }, []);

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
                                <p className="dados">{dashboardData.semanal_hours}h</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-turns")}>
                                <h1 className="title">Turnos</h1>
                                <p className="dados">{dashboardData.turns_number}</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-courses")}>
                                <h1 className="title">Cursos</h1>
                                <p className="dados">{dashboardData.courses_number}</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-modules")}>
                                <h1 className="title">Módulos</h1>
                                <p className="dados">{dashboardData.modules_number}</p>
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
                                <p className="dados">{dashboardData.classes_number}</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-subjects")}>
                                <h1 className="title">Discplinas</h1>
                                <p className="dados">{dashboardData.subjects_number}</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-teachers")}>
                                <h1 className="title">Docentes</h1>
                                <p className="dados">{dashboardData.professors_number}</p>
                            </div>
                            <div className="section" onClick={() => history.push("/dashboard-reports")}>
                                <h1 className="title">Relatórios</h1>
                                <p className="dados">{dashboardData.reports_number}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Dashboard;