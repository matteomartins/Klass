import React from 'react';
import './styles.css';

import Input from '../../components/Input';

import iconLight from '../../assets/images/icon-light.svg';
import { KaUser, KaUserOutline, KaMail, KaPassword } from '../../assets/icons';
import {KaCircleOutline, KaCircleSelected, KaArrow} from '../../assets/icons';


function Profile(){
    return(
        
        <div className="main-profile">
            <a href="/">
               <div className="arrow">
                <KaArrow color="#fff" size={28} />
                </div>            
             </a>
            <div className="profile-container">
                <div className="folks-container">
                    <div className="user-icon">
                    <KaUser size={70} color="var(--color-text-primary)" />
                    </div>
                    
                    <a> Mudar Foto </a>
                    <h2> Claudio da Silva Peixoto </h2>

                    <p> Data de Nascimento: </p>
                    <p> Email: </p>
                    <p> Senha: </p>

                </div>

                <div className="dice-container">
                
                </div>
            </div>
        </div>
     
    )
}

export default Profile;