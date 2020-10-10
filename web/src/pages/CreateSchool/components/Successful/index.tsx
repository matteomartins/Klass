import React from 'react';
import { useHistory } from 'react-router-dom';
import ModalContainer from '../../../../components/Modals/ModalContainer';

import './styles.css';

interface SuccessfulCreateSchoolProps {
    active: boolean;
    setActive: Function;
    handleCreate: Function;
}

const SuccessfulCreateSchool:React.FC<SuccessfulCreateSchoolProps> = ({active, setActive, handleCreate}) => {
    const history = useHistory();
    return (
        <ModalContainer active={active} setActive={setActive} title="Escola criada com sucesso!">
            <div className="successful-create-school-buttons">
                <button className="btn-small" onClick={()=> setActive(false)}>Alterar alguma informação</button>
                <button className="btn-small" onClick={()=> {setActive(false); handleCreate()}}>Ir para a Dashboard</button>
            </div>
        </ModalContainer>
    )
}

export default SuccessfulCreateSchool;