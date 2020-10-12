import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import { KaUser, KaMail, KaPassword } from "../../assets/icons";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import SocialMedias from "../../components/SocialMedias";
import BackButton from "../../components/BackButton";
import api from "../../services/api";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { Context } from "../../context/AuthContext";

function Login() {
    const { handleLogin } = useContext(Context);
    const { register, handleSubmit, errors } = useForm();
    const alert = useAlert();
    const history = useHistory();
    
    const onSubmit = async (data:any) => {
        api.post('sessions', data).then((response)=>{
            const { data: { token, name } } = response;
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('username', JSON.stringify(name));
            api.defaults.headers.Authorization = `Bearer ${token}`;
            handleLogin()
            history.push('/home');
          }).catch(error => {
            if(!error.response) alert.error("Impossível conectar ao servidor!");
            else if (!error.response.data[0]) alert.error("Preencha os campos!");
            else alert.error(error.response.data[0].message);
          });
    };
    
    useEffect(()=> {
        if(errors.name) alert.error("Insira um nome")
        else if(errors.email) alert.error("Insira um email")
        else if(errors.password) alert.error("Insira uma senha")
    }, [errors, alert])

    return (
        <div className="login-container">
            <div className="login-content">
                <BackButton to="/" />
                <div className="form-login">
                    <h1>Faça o Login</h1>
                    <div className="user-icon">
                        <KaUser size={70} color="var(--color-text-primary)" />
                    </div>
                    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            label="Email"
                            type="email"
                            Icon={KaMail}
                            maxLength={50}
                            name="email"
                            inputRef={register({ required: true })}
                        />
                        <Input
                            label="Senha"
                            type="password"
                            Icon={KaPassword}
                            maxLength={100}
                            name="password"
                            inputRef={register({ required: true })}
                        />
                        <Checkbox label="Lembre de mim" name="rememberme" />
                        <button className="btn btn-bg-dark" type="submit">
                            Login
                        </button>
                    </form>
                    <SocialMedias color="#CCC" />
                </div>
            </div>
        </div>
    );
}

export default Login;
