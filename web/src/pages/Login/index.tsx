import React, { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import { KaUser, KaMail, KaPassword, KaArrow } from '../../assets/icons';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import SocialMedias from '../../components/SocialMedias';

function Login() {

    const history = useHistory();

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        history.push('/home')
    }

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
                    <form className="form-container" onSubmit={handleSubmit}>
                        <Input label="Email" type="email" color="var(--color-text-secondary)" Icon={KaMail} />
                        <Input label="Senha" type="password" color="var(--color-text-secondary)" Icon={KaPassword} />
                        <Checkbox label="Lembre de mim" name="rememberme" />
                        <button className="btn btn-bg-dark" type="submit">Login</button>
                    </form>
                    <SocialMedias color="#CCC" />
                </div>
            </div>
        </div>
    )
}

export default Login;