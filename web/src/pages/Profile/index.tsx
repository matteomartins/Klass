import React from 'react';

import {KaUser} from '../../assets/icons';

import './styles.css';
import TruncatedContainer from '../../components/TruncatedContainer';
import BackButton from '../../components/BackButton';

function Profile(){
    return(
        <div className="main-profile">
            <BackButton to="/home" />
            <TruncatedContainer title="Info. Pessoais">
                <div className="profile-container">
                    <div className="info-container">
                        <div className="user-icon">
                        <KaUser size={70} color="var(--color-text-primary)"/>
                        </div>
                        <a href="/">Mudar Foto</a>
                        <h1>Claudio da Silva Peixoto</h1>
                        <div className="input-container">   
                            <div className="input-items">
                                <p>Data de nasc.</p>
                                <input value="15/05/2002"/>
                            </div>
                            <div className="input-items">
                                <p>Email</p>
                                <input value="claudio@gmail.com"/>
                            </div>
                            <div className="input-items">
                                <p>Senha</p>
                                <input value="*************"/>
                            </div>
                        </div>
                    </div>
                    <div className="data-container">
                        <div className="items-container">
                            <div className="items">
                                <p>Escolas</p>
                                <h1>2</h1>
                            </div>
                            <div className="items">
                                <p>Salas</p>
                                <h1>15</h1>
                            </div>
                            <div className="items">
                                <p>Horas Semanais</p>
                                <h1>35</h1>
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="btn-small">Excluir Conta</button>
                            <button className="btn-small">Salvar</button>
                        </div>
                    </div>
                </div>
            </TruncatedContainer>
        </div>
    )
}

export default Profile;