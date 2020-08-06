import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import { KaArrow, KaUser, KaMail, KaPassword } from '../../assets/icons';
import SocialMedias from '../../components/SocialMedias';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

export default function Login() {

    return (
        <div className="login-container">
            <div className="login-content">
                <Link to="/">
                    <KaArrow color="#fff" size={28} />
                </Link>
                <div className="form-login">
                    <h1>Faça o Login</h1>
                    <div className="user-icon">
                        <KaUser size={70} color="var(--color-text-primary)"/>
                    </div>
                    <form className="form-container">
                        <Input label="Email" type="email" color="var(--color-border-primary)" maxLength={45} Icon={KaMail} />
                        <Input label="Senha" type="password" color="var(--color-border-primary)" maxLength={50} Icon={KaPassword} />
                        <Checkbox name="remember" label="Lembre de mim" />
                        <button className="button bg-dark" type="submit">Cadastre-se</button>
                    </form>
                    <SocialMedias color="#AAAAAA" />
                </div>
            </div>
        </div>
    );

}