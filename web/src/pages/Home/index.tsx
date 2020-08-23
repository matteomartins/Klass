import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import SchoolMenu from '../../components/SchoolMenu';
import {KaAddButton} from '../../assets/icons';


function Home(){
    const [active, setActive] = useState(false)
    return(
        <div className="main-home">

                <div className="home-container">
                    <div>
                        <h1>Etec de Taboão Da Serra</h1>
                    </div>
                    <div className="add-icon" onClick={()=>setActive(true)}>
                        <KaAddButton size={32} />  
                    </div>
                    <SchoolMenu active={active} setActive={setActive} />
                    <div>
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
            </ div>      
        
    )
}

export default Home;