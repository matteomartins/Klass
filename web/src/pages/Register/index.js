import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import { KaUser, KaUserOutline, KaMail, KaPassword } from '../../assets/icons';
import SocialMedias from '../../components/SocialMedias';

import Icon from '../../assets/icon.png';

export default function Register() {
    return (
        <div className="register-container">
            <div className="presentation-container">
                <img src={Icon} alt="" />
                <h1>Olá, Seja Bem Vindo ao Klass</h1>
                <p>Já possui um cadastro? </p>
                <p> Clicle no botão abaixo</p>
                <Link className="button" to="/login">Entrar</Link>
                <a href="#register" id="register-link">Cadastre-se &nbsp; &#9662; </a>
            </div>
            <form className="form-container" id="register">
                <h1>Crie sua conta</h1>
                <div className="user-icon">
                    <KaUser size={70} color="#fff"/>
                </div>
                <SocialMedias color="#1D3543" />
                <div className="input">
                    <input type="text" placeholder="Nome" maxLength="35" />
                    <KaUserOutline size={18} color="#1D3543" className="mr-3" />
                </div>
                <div className="input">
                    <input type="email" placeholder="Email" maxLength="35" />
                    <KaMail size={18} color="#1D3543" className="mr-3" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Senha" />
                    <KaPassword size={18} color="#1D3543" className="mr-3" />
                </div>
                <button className="button bg-dark" type="submit">Cadastre-se</button>
            </form>
        </div>
    );
}