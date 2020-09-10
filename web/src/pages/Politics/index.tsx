import React from "react";

import "./styles.css";
import BackButton from "../../components/BackButton";
import Terms from "../../utils/Terms";
import DropDownMenuSection from "../../components/DropDownMenuSection";

function Politics() {
    return (
        <div className="main-politics">
            <BackButton to="/home" />
            <div className="politics-container">
                <div className="scroll-container" id="scroll-container1">
                    <DropDownMenuSection
                        title="FAQ"
                        items={[
                            { id: "#faq", text: "Claudinho" },
                            { id: "#faq", text: "Claudinho" },
                        ]}
                    />

                    <DropDownMenuSection
                        title="Políticas de Privacidade"
                        items={[
                            {
                                id: "#faq",
                                text: "Quais as Politicas de Privacidade?",
                            },
                            {
                                id: "#faq",
                                text: "Quais as Politicas de Privacidade?",
                            },
                        ]}
                    />
                    <DropDownMenuSection
                        title="Política de Cookies"
                        items={[
                            {
                                id: "#faq",
                                text: "Quais as Politicas de Privacidade?",
                            },
                            {
                                id: "#faq",
                                text: "Quais as Politicas de Privacidade?",
                            },
                        ]}
                    />
                    <DropDownMenuSection
                        title="Política de Sessão"
                        items={[
                            {
                                id: "#faq",
                                text: "Quais as Politicas de Privacidade?",
                            },
                            {
                                id: "#faq",
                                text: "Quais as Politicas de Privacidade?",
                            },
                        ]}
                    />
                    <DropDownMenuSection
                        title="Política de Direitos Autorais"
                        items={[
                            {
                                id: "#faq",
                                text: "Quais as Politicas de Privacidade?",
                            },
                            {
                                id: "#faq",
                                text: "Quais as Politicas de Privacidade?",
                            },
                        ]}
                    />
                </div>

                <div className="scroll-container" id="scroll-container2">
                    <h1>FAQ</h1>
                    <br />
                    <b id="faq1"> Como utilizar tal ferramenta? </b>
                    <b id="faq2"> Como utilizar tal ferramenta? </b>
                    <b id="faq3"> Como utilizar tal ferramenta? </b>
                    <b id="faq4"> Como utilizar tal ferramenta? </b>
                    <b id="faq5"> Como utilizar tal ferramenta? </b>
                    <br />
                    <h1>Termos de Uso</h1>
                    <Terms />
                </div>
            </div>
        </div>
    );
}

export default Politics;
