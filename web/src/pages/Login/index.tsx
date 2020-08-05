import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import { KaArrow, KaUser, KaMail, KaPassword } from '../../assets/icons';
import SocialMedias from '../../components/SocialMedias';

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
                            <KaUser size={70} color="#fff"/>
                    </div>
                    <form className="form-container">
                        <div className="input">
                            <input type="email" placeholder="Email" maxLength={35} />
                            <KaMail size={18} color="#1D3543" className="mr-3" />
                        </div>
                        <div className="input">
                            <input type="password" placeholder="Senha" />
                            <KaPassword size={18} color="#1D3543" className="mr-3" />
                        </div>
                        <button className="button bg-dark" type="submit">Cadastre-se</button>
                    </form>
                    <SocialMedias color="#AAAAAA" />
                </div>
            </div>
        </div>
    );

}