import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { KaUser, KaMail, KaPassword, KaArrow } from '../../assets/icons';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import SocialMedias from '../../components/SocialMedias';

function Login() {
    return (
        <div className="login-container">
            <div className="login-content">
                <Link to="/">
                    <KaArrow color="#fff" size={28} />
                </Link>
                <div className="form-login">
                    <h1>Faça o Login</h1>
                    <div className="user-icon">
                        <KaUser size={70} color="var(--color-text-primary)" />
                    </div>
                    <form className="form-container">
                        <Input label="Email" type="email" color="var(--color-text-secondary)" Icon={KaMail} />
                        <Input label="Email" type="email" color="var(--color-text-secondary)" Icon={KaPassword} />
                        <Checkbox label="Lembre de mim" name="rememberme" />
                        <button className="button bg-dark" type="submit">Cadastre-se</button>
                    </form>
                    <SocialMedias color="#CCC" />
                </div>
            </div>
        </div>
    )
}

export default Login;