import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import ModalContainer from '../../ModalContainer';

interface SuccessfulCreateSchoolProps {
    active: boolean;
    setActive: Function;
}

const SuccessfulCreateSchool:React.FC<SuccessfulCreateSchoolProps> = ({active, setActive}) => {
    const history = useHistory();
    return (
        <ModalContainer active={active} setActive={setActive} title="Escola criada com sucesso!">
            <div className="successful-create-school-buttons">
                <button className="btn-small" onClick={()=> setActive(false)}>Alterar alguma informação</button>
                <button className="btn-small" onClick={()=> {setActive(false); history.push('/dashboard')}}>Ir para a Dashboard</button>
            </div>
        </ModalContainer>
    )
}

export default SuccessfulCreateSchool;