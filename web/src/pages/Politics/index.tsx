import React from 'react';

import './styles.css';
import BackButton from '../../components/BackButton';

function Politics(){
    return(
        <div className="main-politics">
            <BackButton to="/home" />
            <div className="politics-container">
                <div className="faq-container">
                    <h1>FAQ</h1>
                        <a href="/" id="text"> Como utilizar tal ferramenta? </a>
                        <a href="/" id="text"> Como utilizar tal ferramenta? </a>
                        <a href="/" id="text"> Como utilizar tal ferramenta? </a>
                        <a href="/" id="text"> Como utilizar tal ferramenta? </a>
                        <a href="/" id="text"> Como utilizar tal ferramenta? </a>
                        <a href="/"> Política de Privacidade </a>
                        <a href="/"> Política de Cookies </a>
                        <a href="/"> Política de Sessão </a>
                        <a href="/"> Política de Direito Autoral </a>
                </div>
                <div className="faq-container">
                    <h1>FAQ</h1>
                    <div className="faq2-scroll">
                        <a href="/"> Como utilizar tal ferramenta? </a>
                        <section className="classes">
                            <article />
                            <article />
                        </section>
                        <a href="/"> Como utilizar tal ferramenta? </a>
                        <section className="classes">
                            <article />
                            <article />
                        </section>
                        <a href="/"> Como utilizar tal ferramenta? </a>
                        <section className="classes">
                            <article />
                            <article />
                        </section>
                        <a href="/"> Como utilizar tal ferramenta? </a>
                        <section className="classes">
                            <article />
                            <article />
                        </section>
                        <a href="/"> Como utilizar tal ferramenta? </a>
                        <section className="classes">
                            <article />
                            <article />
                        </section>
                        <a href="/"> Política de Privacidade </a>
                        <a href="/"> Política de Cookies </a>
                        <a href="/"> Política de Sessão </a>
                        <a href="/"> Política de Direito Autoral </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Politics;