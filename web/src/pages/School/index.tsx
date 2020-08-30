import React from 'react';
import './styles.css';
import ContentCard from '../../components/ContentCard';

function School(){
    return(
        <div className="school-container">
            <div className="scroll-view">
                <div className="school-photo">
                    <div className="contentCard">
                        <ContentCard title="TS" text="" color="#0792A9" />
                    </div>
                    <div className="school-name">
                        <h1>Etec de Taboão Da Serra</h1>
                    </div>
                    <div className="input-container2">   
                        <div className="input-items2">
                            <p>Professores:</p>
                            <input value="Wallace C. Andrade"/>
                        </div>
                        <div className="input-items2">
                            <p>Alunos:</p>
                            <input value="160"/>
                        </div>
                        <div className="input-items2">
                            <p>Matérias:</p>
                            <input value="18"/>
                        </div>
                        <div className="input-items2">
                            <p>Turnos:</p>
                            <input value="3"/>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="description-text">
                        <h1>Descrição</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="input-items3">
                            <h1>Tipo de escola: </h1>
                            <input value="Ensino Médio e Técnico"/>
                        </div>
                    </div>
                </div>
                <div className="school2-container">
                    <h1>Turno: Manhã </h1>
                    <div className="classes">
                        <ContentCard title="1A" text="1 ANO A" color="#0792A9" />
                        <ContentCard title="1B" text="1 ANO B" color="#0792A9" />
                        <ContentCard title="2A" text="2 ANO A" color="#F68237" />
                        <ContentCard title="2B" text="2 ANO B" color="#F68237" />
                        <ContentCard title="3A" text="3 ANO A" color="#B7B345" />
                        <ContentCard title="3B" text="3 ANO B" color="#B7B345" />
                        <ContentCard title="4A" text="4 ANO A" color="#DE6E4B" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default School;