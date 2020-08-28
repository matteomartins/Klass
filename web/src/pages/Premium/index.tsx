import React from 'react';
import './styles.css';
import BackButton from '../../components/BackButton';

function Premium(){
    
    return(
        <div className="main-premium">
            <div className="premium-container">
                <BackButton to="/home" />
                <h1>Tornar-se Premium</h1>  
            </div>
            <div className="plans-container">
                    <div className="plans">
                        <h1>Alunos</h1>
                        <span>R$ 5,99</span>
                        <p className="text-one">Aproveite todas as funcionalidades sem anúncio</p>
                        <p className="text-one">Agenda e anotações</p>
                        <p className="text-one">Chat com os desenvolvedores</p>
                        <p className="text-one">Conta vitalícia</p>
                        <button className="btn">Começar</button>
                    </div>
                    <div className="plans">
                        <h1>Professores</h1>
                        <span>R$ 15,99</span>
                        <p className="text-two">Aproveite todas as funcionalidades sem anúncio</p>
                        <p className="text-two">Agenda e anotações</p>
                        <p className="text-two">Criação de até 5 escolas</p>
                        <p className="text-two">Chat com os desenvolvedores</p>
                        <p className="text-two">Conta vitalícia</p>
                        <button className="btn" id="btn1">Começar</button>
                    </div>
                    <div className="plans">
                        <h1>Escolas</h1>
                        <span>R$ 50,99</span>
                        <p className="text-three">Aproveite todas as funcionalidades sem anúncio</p>
                        <p className="text-three">Agenda e anotações</p>
                        <p className="text-three">Criação de até 5 escolas</p>
                        <p className="text-three">Chat com os desenvolvedores</p>
                        <p className="text-three">Conta vitalícia</p>
                        <p className="text-three">Tratamento VIP</p>
                        <button className="btn" id="btn2">Começar</button>
                        
                    </div>
            </div>
    
        </div>
    )
}

export default Premium;