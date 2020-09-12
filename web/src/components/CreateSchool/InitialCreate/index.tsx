import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import ModalContainer from '../../ModalContainer';

interface InitialCreateSchoolProps {
    active: boolean;
    setActive: Function;
}

const InitialCreateSchool:React.FC<InitialCreateSchoolProps> = ({active, setActive}) => {
    const history = useHistory();
    return (
        <ModalContainer active={active} setActive={setActive} title="Criar uma Nova Escola">
            <div className="initial-create-school-buttons">
                <button className="btn-small" onClick={()=> {setActive(false); history.push('/create-school')}}>Sim</button>
                <button className="btn-small" onClick={()=> setActive(false)}>Não</button>
            </div>
        </ModalContainer>
    )
}

export default InitialCreateSchool;