import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import {KaUser, KaCalendar} from '../../assets/icons';
import {KaCircleOutline, KaCircleSelected, KaArrow} from '../../assets/icons';

import { useTheme } from '../../context/Theme';
import { IconTree, IconType } from '../../assets/icons/lib';


function Profile(){
    const { theme } = useTheme();
    return(
        
        <div className="main-profile">
            <h1>Info. Pessoais</h1>
            <a href="/">
                <div className="arrow">
                    <KaArrow color="#fff" size={28} />
                </div>            
            </a>
            <div className={`profile-container background-${theme}`}>
                <div className="info-container">
                    <div className="user-icon">
                    <KaUser size={70} color="var(--color-text-primary)"/>
                    </div>
                    <a href="/">Mudar Foto</a>
                    <h1>Claudio da Silva Peixoto</h1>
                    <div className="input-container">   
                        <div className="input-items">
                            <p>Data de Nascimento: </p> <input value="15/05/2002"/>
                        </div>
                        <div className="input-items">
                            <p>Email: </p> <input value="claudio@gmail.com"/>
                        </div>
                        <div className="input-items">
                            <p>Senha: </p> <input value="*************"/>
                        </div>
                    </div>
                </div>
                <div className="data-container">
                    <div className="items-container">
                        <div className="items">
                            <p>Escolas </p> <h1>2</h1>
                        </div>
                        <div className="items">
                            <p>Salas </p> <h1>15</h1>
                        </div>
                        <div className="items">
                            <p>Horas Semanais </p> <h1>35</h1>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="button">Excluir Conta</button>
                        <button className="button">Salvar</button>
                    </div>
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

export default Profile;