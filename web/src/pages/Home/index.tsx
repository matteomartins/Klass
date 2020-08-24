import React, { useState } from 'react';
import './styles.css';

import SchoolMenu from '../../components/SchoolMenu';
import {KaAddButton} from '../../assets/icons';


function Home(){
    const [active, setActive] = useState(false)
    return(
        <div className="main-home">
            <div className="home-container">
                <div className="header-home">
                    <div className="add-icon" onClick={()=>setActive(true)}>
                        <KaAddButton size={32} color="#39729D" />  
                    </div>
                </div>
                <div className="scroll-view">
                    <div className="school-container">
                        <h1>Etec de Taboão Da Serra</h1>
                        <section className="classes">
                            <article>
                                <h1>1A</h1>
                                <span>1° ANO A</span>
                            </article>
                            <article>
                                <h1>1B</h1>
                                <span>1° ANO B</span>
                            </article>
                            <article>
                                <h1>2A</h1>
                                <span>2° ANO A</span>
                            </article>
                            <article>
                                <h1>2B</h1>
                                <span>2° ANO B</span>
                            </article>
                            <article>
                                <h1>3A</h1>
                                <span>3° ANO A</span>
                            </article>
                            <article>
                                <h1>3B</h1>
                                <span>3° ANO B</span>
                            </article>
                            <article>
                                <h1>3B</h1>
                                <span>3° ANO B</span>
                            </article>
                        </section>
                    </div>
                    <div className="school-container">
                        <h1>Etec de Taboão Da Serra</h1>
                        <section className="classes">
                            <article>
                                <h1>1A</h1>
                                <span>1° ANO A</span>
                            </article>
                            <article>
                                <h1>1B</h1>
                                <span>1° ANO B</span>
                            </article>
                            <article>
                                <h1>2A</h1>
                                <span>2° ANO A</span>
                            </article>
                            <article>
                                <h1>2B</h1>
                                <span>2° ANO B</span>
                            </article>
                            <article>
                                <h1>3A</h1>
                                <span>3° ANO A</span>
                            </article>
                            <article>
                                <h1>3B</h1>
                                <span>3° ANO B</span>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
            <SchoolMenu active={active} setActive={setActive} />
        </div>
    )
}

export default Home;