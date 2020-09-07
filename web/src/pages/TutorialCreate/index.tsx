import React from 'react';
import YouTube from 'react-youtube';

import './styles.css';
import TruncatedContainer from '../../components/TruncatedContainer';
import BackButton from '../../components/BackButton';

function Help() {
    return(
        <div className="help-container7">
            <BackButton to="/home" />
            <TruncatedContainer title="Tutorial Criar">
                    <YouTube className="video7" videoId="Zc1OOS4aMbU"  />
            </TruncatedContainer>
        </div>
    )
}

export default Help;