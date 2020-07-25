import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Logon() {
    return (
        <div className="logon-container">
            <div className="content-login">
                <div></div>
                <form >
                    <h1>Faça Seu Login</h1>
                    <input type="text" placeholder="Nome de Usuário" />
                    <input type="password" placeholder="Senha" />
                    <button className="button" type="submit">Login</button>
                    <Link to="/forgotpassword" className="back-link"> Esqueceu a senha?</Link>
                </form>
            </div>
        </div>
    );
}