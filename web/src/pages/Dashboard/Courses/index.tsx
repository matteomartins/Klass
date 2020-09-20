import React from "react";

import "./styles.css";
import BackButton from "../../../components/BackButton";
import TruncatedContainer from "../../../components/TruncatedContainer";

import {KaUser, KaBook} from "../../../assets/icons"

function Courses() {
    return (
        <div className="main-courses">
            <BackButton to="/dashboard" />
            <TruncatedContainer title="Cursos">
                <div className="scroll-bar">
                    <div className="courses-container">
                        <div className="courses-content">
                            <h1>Ensino Médio</h1>
                            <div className="select-container">
                                <select>
                                    <option value="0">Integral</option>
                                    <option value="1">Manhã</option>
                                    <option value="2">Tarde</option>
                                    <option value="3">Noite</option>
                                </select>
                            </div>
                            <div className="teacher-container"> 
                                <h1>Professores</h1>
                                <h1>10</h1>
                            </div>
                            <div className="icon-container">
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>                       
                            </div>
                            <div className="matter-container"> 
                                <h1>Matérias</h1>
                                <h1>11</h1>
                            </div>
                            <div className="icon-container">
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>  
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>                      
                            </div>
                            <h1>7:30 - 15:30</h1>
                        </div>
                        <div className="courses-content">
                            <h1>Ensino Técnio</h1>
                            <div className="select-container">
                                <select>
                                    <option value="0">Integral</option>
                                    <option value="1">Manhã</option>
                                    <option value="2">Tarde</option>
                                    <option value="3">Noite</option>
                                </select>
                            </div>
                            <div className="teacher-container"> 
                                <h1>Professores</h1>
                                <h1>9</h1>
                            </div>
                            <div className="icon-container">
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaUser size={15} color="var(--color-border-primary)"/>
                                </div>                       
                            </div>
                            <div className="matter-container"> 
                                <h1>Matérias</h1>
                                <h1>10</h1>
                            </div>
                            <div className="icon-container">
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>  
                                <div className="circle-icon-container">
                                    <KaBook size={18} color="var(--color-border-primary)"/>
                                </div>                      
                            </div>
                            <h1>16:30 - 20:30</h1>
                        </div>
                    </div>
                </div>
            </TruncatedContainer>
        </div>
    )
}

export default Courses;