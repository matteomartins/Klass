import React from 'react';
import YouTube from 'react-youtube';

import './styles.css';
import TruncatedContainer from '../../components/TruncatedContainer';
import BackButton from '../../components/BackButton';

function Help() {
    return(
        <div className="help-container">
            <BackButton to="/home" />
            <TruncatedContainer title="Ajuda e suporte">
                <TruncatedContainer title="" className="presentation-container">
                    <YouTube className="video" videoId="Zc1OOS4aMbU" />
                </TruncatedContainer>
                <div className="infos">
                    <h1>Suporte</h1>
                    <p className="italico">Email: suporte@klass.com</p>
                    <p>Telefone: (11) 3521-8541</p>
                </div>
            </TruncatedContainer>
        </div>
    )
}

export default Help;