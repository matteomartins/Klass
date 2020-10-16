import React, { useEffect, useState } from "react";

import { KaUser } from "../../assets/icons";

import "./styles.css";
import TruncatedContainer from "../../components/TruncatedContainer";
import BackButton from "../../components/BackButton";
import api from "../../services/api";
import ChangeImage from "../../components/ChangeImage";

function Profile() {
    const [active, setActive] = useState(false);
    const [icon, setIcon] = useState('');
    const [username, setUsername] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('***********');

    useEffect(() => {
        (async()=> {
            const {data}: any = await api.get('/users');
            setUsername(data.user.name);
            setBirthDate(data.user.birth_date);
            setEmail(data.user.email);
            setIcon(data.user.icon);
            localStorage.setItem('icon', data.user.icon);
        })()
    }, [active])
    return (
        <div className="main-profile">
            <BackButton to="/home" />
            <TruncatedContainer title="Info. Pessoais">
                <div className="scroll-view">
                    <div>
                        <div className="profile-container">
                            <div className="info-container">
                                <div className="user-icon">
                                    {(() => {
                                        if(icon !== "") return <img src={icon} alt="Imagem de Perfil" />
                                    })()}
                                    <KaUser
                                        size={70}
                                        color="var(--color-text-primary)"
                                    />
                                </div>
                                <a href="#" onClick={() => setActive(true)}>Mudar Foto</a>
                                <h1>{username}</h1>
                                <div className="input-container">
                                    <div className="input-items">
                                        <p>Data de nasc.</p>
                                        <input value={birthDate} />
                                    </div>
                                    <div className="input-items">
                                        <p>Email</p>
                                        <input value={email} />
                                    </div>
                                    <div className="input-items">
                                        <p>Senha</p>
                                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="data-container">
                                <div className="items">
                                    <p>Escolas</p>
                                    <h1>2</h1>
                                </div>
                                <div className="items">
                                    <p>Salas</p>
                                    <h1>15</h1>
                                </div>
                                <div className="items">
                                    <p>Horas Semanais</p>
                                    <h1>35</h1>
                                </div>
                                <div className="button-container">
                                    <button className="btn-small">
                                        Excluir Conta
                                    </button>
                                    <button className="btn-small">
                                        Salvar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TruncatedContainer>
            <ChangeImage active={active} setActive={setActive} />
        </div>
    );
}
export default Profile;
