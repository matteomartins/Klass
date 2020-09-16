import React from 'react';
import { KaClose } from '../../assets/icons';

 import './styles.css';

interface FirstAccessTeacherProps {
    active: boolean;
    setActive: Function;
}

const FirstAccessTeacher: React.FC<FirstAccessTeacherProps> = ({ active, setActive }) => {

    return (
        <div className="global-first-access-teacher">
            <div className="blur"></div>
            <div className="first-access-teacher-content">
                <h1>Você agora é professor da escola Etec de Taboão</h1>
                <p>O administrador te inseriu nessa escola, agora basta você preencher com seus dados para que ele possa concluir o horário escolar.</p>
                <div>
                    <div>
                        <input type="text"/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstAccessTeacher;