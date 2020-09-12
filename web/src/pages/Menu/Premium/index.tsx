import React from "react";
import "./styles.css";
import BackButton from "../../../components/BackButton";
import { KaCheck } from "../../../assets/icons";

function Premium() {
    return (
        <div className="main-premium">
            <div className="premium-container">
                <BackButton to="/home" />
                <h1>Tornar-se Premium</h1>
            </div>
            <div className="scroll-view">
                <div className="plans-container">
                    <div className="plan">
                        <h1>Alunos</h1>
                        <span>R$ 5,99</span>
                        <p>Aproveite todas as funcionalidades sem anúncio</p>
                        <p>Agenda e anotações</p>
                        <p>Chat com os desenvolvedores</p>
                        <p>Conta vitalícia</p>
                        <button className="btn">Começar</button>
                    </div>
                    <div className="plan">
                        <h1>Professores</h1>
                        <span>R$ 15,99</span>
                        <p>Aproveite todas as funcionalidades sem anúncio</p>
                        <p>Agenda e anotações</p>
                        <p>Criação de até 5 escolas</p>
                        <p>Chat com os desenvolvedores</p>
                        <p>Conta vitalícia</p>
                        <button className="btn">Começar</button>
                    </div>
                    <div className="plan">
                        <h1>Escolas</h1>
                        <span>R$ 50,99</span>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Aproveite todas as funcionalidades sem anúncio
                            </span>
                        </p>
                        <p>Agenda e anotações</p>
                        <p>Criação de até 5 escolas</p>
                        <p>Chat com os desenvolvedores</p>
                        <p>Conta vitalícia</p>
                        <p>Tratamento VIP</p>
                        <button className="btn">Começar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Premium;
