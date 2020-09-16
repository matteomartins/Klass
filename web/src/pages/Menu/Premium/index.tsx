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
                        <h1>Básico</h1>
                        <span>R$ 5,99</span>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Aproveite todas as funcionalidades sem anúncio
                            </span>
                        </p>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Criação de até três escolas
                            </span>
                        </p>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Chat com os desenvolvedores
                            </span>
                        </p>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Conta vitalícia
                            </span>
                        </p>
                        <button className="btn">Começar</button>
                    </div>
                    <div className="plan">
                        <h1>Padrão</h1>
                        <span>R$ 10,99</span>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Aproveite todas as funcionalidades sem anúncio
                            </span>
                        </p>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Criação de até cinco escolas
                            </span>
                        </p>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Chat com os desenvolvedores
                            </span>
                        </p>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Conta vitalícia
                            </span>
                        </p>
                        <button className="btn">Começar</button>
                    </div>
                    <div className="plan">
                        <h1>Profissional</h1>
                        <span>R$ 50,99</span>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Aproveite todas as funcionalidades sem anúncio
                            </span>
                        </p>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Criação de escolas ilimitadas
                            </span>
                        </p>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Chat com os desenvolvedores
                            </span>
                        </p>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Conta vitalícia
                            </span>
                        </p>
                        <p>
                            <KaCheck size={20} />
                            <span>
                                Tratamento VIP
                            </span>
                        </p>
                        <button className="btn">Começar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Premium;
