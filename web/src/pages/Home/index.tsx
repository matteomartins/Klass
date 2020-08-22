import React from 'react';
import './styles.css';

import {KaAddButton} from '../../assets/icons';


function Home(){
    return(
        <div className="main-home">
                <div className="home-container">
                    <div>
                        <h1>Etec de Taboão Da Serra</h1>
                    <div className="add-icon">
                        <KaAddButton size={32} />  
                    </div>
                    <section id="classes">
                        <article className="text">
                            <h1 className="item">1A</h1>
                            <span className="span">1° ANO A</span>
                        </article>
                        <article className="text">
                            <h1 className="item">1B</h1>
                            <span className="span">1° ANO B</span>
                        </article>
                        <article className="text">
                            <h1 className="item">2A</h1>
                            <span className="span">2° ANO A</span>
                        </article>
                        <article className="text">
                            <h1 className="item">2B</h1>
                            <span className="span">2° ANO B</span>
                        </article>
                        <article className="text">
                            <h1 className="item">3A</h1>
                            <span className="span">3° ANO A</span>
                        </article>
                        <article className="text">
                            <h1 className="item">3B</h1>
                            <span className="span">3° ANO B</span>
                        </article>
                    </section>
                    </div>
                    <div>
                        <h1>Etec de Taboão Da Serra</h1>
                        <section id="classes">
                            <article className="text">
                                <h1 className="item">1A</h1>
                                <span className="span">1° ANO A</span>
                            </article>
                            <article className="text">
                                <h1 className="item">1B</h1>
                                <span className="span">1° ANO B</span>
                            </article>
                            <article className="text">
                                <h1 className="item">2A</h1>
                                <span className="span">2° ANO A</span>
                            </article>
                            <article className="text">
                                <h1 className="item">2B</h1>
                                <span className="span">2° ANO B</span>
                            </article>
                            <article className="text">
                                <h1 className="item">3A</h1>
                                <span className="span">3° ANO A</span>
                            </article>
                            <article className="text">
                                <h1 className="item">3B</h1>
                                <span className="span">3° ANO B</span>
                            </article>
                        </section>
                    </div>
                </div>
        </div>
    )
}

export default Home;