import React from 'react';

import './styles.css';
import ModalContainer from '../ModalContainer';

interface EnterSchoolProps {
    active: boolean;
    setActive: Function;
}

const EnterSchool:React.FC<EnterSchoolProps> = ({active, setActive}) => {
    return (
        <ModalContainer active={active} setActive={setActive} title="Participar de uma nova escola">
            <input name="school-id" placeholder="Digite o Código de Escola" className="enter-school-input" />
            <div className="enter-school-buttons">
                <button className="btn-small" onClick={()=> setActive(false)}>Cancelar</button>
                <button className="btn-small" onClick={()=> setActive(false)}>Participar</button>
            </div>
        </ModalContainer>
    )
}

export default EnterSchool;