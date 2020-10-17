import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import iconLight from "../../assets/images/icon-light.svg";
import { KaUser, KaUserOutline, KaMail, KaPassword } from "../../assets/icons";

import "./styles.css";
import SocialMedias from "../../components/SocialMedias";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import { useAlert } from "react-alert";
import { Context } from "../../context/AuthContext";
import api from "../../services/api";

function Register() {
    const { handleLogin } = useContext(Context);
    const { register, handleSubmit, errors } = useForm();
    const alert = useAlert();
    const history = useHistory();
    
    const onSubmit = async (data:any) => {
        api.post('users', data).then((response)=>{
            const { data: { token, name } } = response;
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('username', JSON.stringify(name));
            api.defaults.headers.Authorization = `Bearer ${token}`;
            handleLogin()
            history.push('/access');
          }).catch(error => {
            if(!error.response) alert.error("Impossível conectar ao servidor!");
            else alert.error(error.response.data[0].message);
          });
    };
    
    useEffect(()=> {
        if(errors.name) alert.error("Insira um nome")
        else if(errors.email) alert.error("Insira um email")
        else if(errors.password) alert.error("Insira uma senha")
    }, [errors, alert])

    return (
        <div className="scroll-view">
            <div>
                <div className="register-container">
                    <div className="start-container">
                        <img src={iconLight} alt="Klass" />
                        <h1>Olá, Seja Bem Vindo ao Klass</h1>
                        <p>
                            Já possui um cadastro? <br />
                            Clique no botão abaixo
                        </p>
                        <Link to="/login" className="btn">
                            Entrar
                        </Link>
                        <a href="#register" id="register-link">
                            Cadastre-se &nbsp; &#9662;
                        </a>
                    </div>
                    <form className="form-container" id="register" onSubmit={handleSubmit(onSubmit)}>
                        <h1>Crie sua Conta</h1>
                        <div className="user-icon">
                            <KaUser
                                size={70}
                                color="var(--color-text-primary)"
                            />
                        </div>
                        <SocialMedias color="var(--color-border-primary)" />
                        <Input
                            name="name"
                            label="Nome"
                            type="text"
                            Icon={KaUserOutline}
                            maxLength={35}
                            inputRef={register({ required: true })}
                        />
                        <Input
                            name="email"
                            label="Email"
                            type="email"
                            Icon={KaMail}
                            maxLength={50}
                            inputRef={register({ required: true })}
                        />
                        <Input
                            name="password"
                            label="Senha"
                            type="password"
                            Icon={KaPassword}
                            maxLength={100}
                            inputRef={register({ required: true })}
                        />
                        <Checkbox label="Lembre de mim" name="rememberme" />
                        <input type="submit" value="Cadastre-se" className="btn btn-bg-dark" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
