import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import {KaUser, KaCalendar, KaAddButton} from '../../assets/icons';
import {KaCircleOutline, KaCircleSelected, KaArrow} from '../../assets/icons';

import { useTheme } from '../../context/Theme';
import { IconTree, IconType } from '../../assets/icons/lib/esm';


function Home(){
    return(
        <div className="main-home">
            <div className="display-flex">
                <div className="background">
                    <div className="name">
                        <h1>Etec de Taboão Da Serra</h1>
                    </div>
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
            </div>  
            <Link to="/" className="calendar-content">
                <div className="calendar-icon">
                    <KaCalendar size={22} color="var(--color-text-primary)" />  
                </div>
            </Link>
        </div>
    )
}

export default Home;