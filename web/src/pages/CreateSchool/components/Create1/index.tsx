import React from "react";
import TruncatedContainer from "../../TruncatedContainer";

import "./styles.css";

interface Create1Props {
    name: string;
    setName: (value:string) => void;
    description: string;
    setDescription: (value:string) => void;
    type: string;
    setType: (value:string) => void;
}

const Create1:React.FC<Create1Props> = ({name, setName, description, setDescription, type, setType}) => {
    return (
        <TruncatedContainer title="Criar" className="create-school-container">
            <div className="create-school-content">
                <h1>Insira informações iniciais da escola</h1>
                <div className="input-container">
                    <input type="text" placeholder="Nome da escola" value={name} onChange={e => setName(e.target.value)} />
                    <textarea placeholder="Descrição da escola" value={description} onChange={e => setDescription(e.target.value)}  />
                    <select value={type} onChange={e => setType(e.target.value)}>
                        <option value="" disabled>
                            Tipo de escola
                        </option>
                        <option value="1">Faculdade</option>
                    </select>
                </div>
            </div>
        </TruncatedContainer>
    );
}

export default Create1;
