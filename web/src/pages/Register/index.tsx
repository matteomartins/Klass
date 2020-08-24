import React from 'react';
import { Link } from 'react-router-dom';

import iconLight from '../../assets/images/icon-light.svg';
import { KaUser, KaUserOutline, KaMail, KaPassword } from '../../assets/icons';

import './styles.css';
import SocialMedias from '../../components/SocialMedias';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

function Register() {
    return (
        <div className="register-container">
            <div className="start-container">
                <img src={iconLight} alt="Klass"/>
                <h1>Olá, Seja Bem Vindo ao Klass</h1>
                <p>
                    Já possui um cadastro? <br />
                    Clique no botão abaixo
                </p>
                <Link to="/login" className="btn">Entrar</Link>
                <a href="#register" id="register-link">Cadastre-se &nbsp; &#9662; </a>
            </div>
            <form className="form-container" id="register">
                <h1>Crie sua Conta</h1>
                <div className="user-icon">
                    <KaUser size={70} color="var(--color-text-primary)" />
                </div>
                <SocialMedias color="var(--color-border-primary)" />
                <Input label="Nome" Icon={KaUserOutline} maxLength={35} />
                <Input label="Email" type="email" Icon={KaMail} maxLength={40} />
                <Input label="Senha" type="password" Icon={KaPassword} maxLength={100} />
                <Checkbox label="Lembre de mim" name="rememberme"/>
                <Link to="/access" className="btn btn-bg-dark">Cadastre-se</Link>
            </form>
        </div>
    )
}

export default Register;