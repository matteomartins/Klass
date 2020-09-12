import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import ModalContainer from '../../ModalContainer';

interface ExitCreateSchoolProps {
    active: boolean;
    setActive: Function;
}

const ExitCreateSchool:React.FC<ExitCreateSchoolProps> = ({active, setActive}) => {
    const history = useHistory();
    return (
        <ModalContainer active={active} setActive={setActive} title="Deseja realmente parar de criar uma escola?">
            <div className="exit-create-school-buttons">
                <button className="btn-small" onClick={()=> {setActive(false); history.push('/home')}}>Sim</button>
                <button className="btn-small" onClick={()=> setActive(false)}>Não</button>
            </div>
        </ModalContainer>
    )
}

export default ExitCreateSchool;