import React from "react";
import "./styles.css";
import ContentCard from "../../components/ContentCard";
import InputOutline from "../../components/InputOutline";
import BackButton from "../../components/BackButton";

function School() {
    return (
        <div className="school-container">
            <BackButton to="/home" />
            <div className="scroll-view">
                <div>
                    <div className="school-header">
                        <div className="card-content">
                            <ContentCard
                                title="TS"
                                text=""
                                color="#0792A9"
                            />
                            <h1>Etec de Taboão Da Serra</h1>
                        </div>
                        <div className="info-container">
                            <InputOutline
                                text="Professores:"
                                name="prof"
                                value="25"
                                disabled
                            />
                            <InputOutline
                                text="Alunos:"
                                name="student"
                                value="160"
                                disabled
                            />
                            <InputOutline
                                text="Matérias:"
                                name="subject"
                                value="18"
                                disabled
                            />
                            <InputOutline
                                text="Turnos:"
                                name="turn"
                                value="3"
                                disabled
                            />
                        </div>
                    </div>
                    <div className="description">
                        <h1>Descrição</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book.
                        </p>
                        <InputOutline
                            text="Tipo de escola:"
                            name="students"
                            value="Ensino Médio e Técnico"
                            disabled
                        />
                    </div>
                    <div className="school-cards-container">
                        <h1>Turno: Manhã </h1>
                        <div className="cards">
                            <ContentCard
                                title="1A"
                                text="1 ANO A"
                                color="#0792A9"
                            />
                            <ContentCard
                                title="1B"
                                text="1 ANO B"
                                color="#0792A9"
                            />
                            <ContentCard
                                title="2A"
                                text="2 ANO A"
                                color="#F68237"
                            />
                            <ContentCard
                                title="2B"
                                text="2 ANO B"
                                color="#F68237"
                            />
                            <ContentCard
                                title="3A"
                                text="3 ANO A"
                                color="#B7B345"
                            />
                            <ContentCard
                                title="3B"
                                text="3 ANO B"
                                color="#B7B345"
                            />
                            <ContentCard
                                title="4A"
                                text="4 ANO A"
                                color="#DE6E4B"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default School;
