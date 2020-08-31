import React from 'react';
import TruncatedContainer from '../../TruncatedContainer';

import './styles.css';
import ContentCard from '../../ContentCard';

function Create2() {
    return (
        <TruncatedContainer title="Criar" className="create-school-container">
            <div className="create-school-content">
                <h1>Escolha um icone para a escola</h1>
                <div className="icons-container">
                    <div className="scroll-view">
                        <div className="icons-content">
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                            <ContentCard text="" color="#F68237" title="" />
                        </div>
                    </div>
                    <div className="icon-description">
                        <ContentCard text="Etec de Taboão da Serra" color="#F68237" title="" />
                    </div>
                </div>
            </div>
        </TruncatedContainer>
    )
}

export default Create2;
