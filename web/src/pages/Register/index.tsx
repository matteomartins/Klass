import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import { KaUser, KaUserOutline, KaMail, KaPassword } from '../../assets/icons';
import SocialMedias from '../../components/SocialMedias';

import Icon from '../../assets/images/icon-light.svg';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

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
                    <KaUser size={70} color="var(--color-text-primary)"/>
                </div>
                <SocialMedias color="var(--color-border-primary)" />
                <Input color="var(--color-border-primary)" label="Nome" type="text" maxLength={45} Icon={KaUserOutline} />
                <Input color="var(--color-border-primary)" label="Email" type="email" maxLength={45} Icon={KaMail} />
                <Input color="var(--color-border-primary)" label="Senha" type="password" maxLength={50} Icon={KaPassword} />
                <Checkbox name="remember" label="Lembre de mim" />
                <button className="button bg-dark" type="submit">Cadastre-se</button>
            </form>
        </div>
    );
}