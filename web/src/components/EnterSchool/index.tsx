import React from 'react';

import './styles.css';
import ModalContainer from '../ModalContainer';
import Input from '../Input';

interface EnterSchoolProps {
    active: boolean;
    setActive: Function;
}

const EnterSchool:React.FC<EnterSchoolProps> = ({active, setActive}) => {
    return (
        <ModalContainer active={active} setActive={setActive} title="Deseja realmente parar de criar uma escola?">
            <input name="school-id" placeholder="Digite o Código de Escola" />
            <div className="enter-school-buttons">
                <button className="btn-small" onClick={()=> setActive(false)}>Cancelar</button>
                <button className="btn-small" onClick={()=> setActive(false)}>Participar</button>
            </div>
        </ModalContainer>
    )
}

export default EnterSchool;