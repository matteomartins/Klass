import React, { useState } from 'react';

import './styles.css';
import ModalContainer from '../ModalContainer';
import api from '../../../services/api';

interface EnterSchoolProps {
    active: boolean;
    setActive: Function;
}

const EnterSchool:React.FC<EnterSchoolProps> = ({active, setActive}) => {
    const [code, setCode] = useState('');


    async function handleEnter() {
        const response = await api.post('/invites/students', {group_id: code});
        console.log(response);


        setActive(false)
    }

    return (
        <ModalContainer active={active} setActive={setActive} title="Participar de uma nova escola">
            <input 
                name="school-id" 
                placeholder="Digite o Código de Escola" 
                className="enter-school-input" 
                value={code}
                onChange={e => setCode(e.target.value)}
            />
            <div className="enter-school-buttons">
                <button className="btn-small" onClick={()=> setActive(false)}>Cancelar</button>
                <button className="btn-small" onClick={()=> handleEnter()}>Participar</button>
            </div>
        </ModalContainer>
    )
}

export default EnterSchool;