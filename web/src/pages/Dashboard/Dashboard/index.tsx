import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

function Dashboard(){
    const history = useHistory();
    return(
            <div className="main-dashboard">
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
                    </div>
                    <div className="main">
                        <h1 className="title">Acesos</h1>
                    </div>
                    <div className="main">
                        <h1 className="title">Turnos</h1>
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
    );
}

export default Dashboard;