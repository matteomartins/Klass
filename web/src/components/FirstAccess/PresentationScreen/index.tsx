import React from 'react';

import TruncatedContainer from '../../TruncatedContainer';
import YouTube from 'react-youtube';

import './styles.css';

function PresentationScreen(){
    return (
        <TruncatedContainer title="Apresentação" className="presentation-container">
            <YouTube className="video" videoId="Zc1OOS4aMbU" />
        </TruncatedContainer>
    )
}

export default PresentationScreen;