import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import iconLight from "../../assets/images/icon-light.svg";
import { KaUser, KaUserOutline, KaMail, KaPassword } from "../../assets/icons";

import "./styles.css";
import SocialMedias from "../../components/SocialMedias";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";

function Register() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data:any) => {
        console.log(data);
        console.log(errors);
        console.log(watch);
    };

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
                            Cadastre-se &nbsp; &#9662;{" "}
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
                            ref={register({ required: true })}
                        />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <Input
                            name="email"
                            label="Email"
                            type="email"
                            Icon={KaMail}
                            maxLength={50}
                            ref={register}
                        />
                        <Input
                            name="password"
                            label="Senha"
                            type="password"
                            Icon={KaPassword}
                            maxLength={100}
                            ref={register}
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
