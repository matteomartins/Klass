import React from "react";
import Input from "../Input";

interface ClassInfoContainerProps {
    selectedClass: number;
}

const ClassInfoContainer: React.FC<ClassInfoContainerProps> = ({
    selectedClass,
}) => {
    if (selectedClass === -1) {
        return (
            <div className="creation-content">
                <p>Selecione uma turma</p>
            </div>
        );
    }
    return (
        <div className="creation-content">
            <Input name="" placeholder="Turno" />
            <Input name="" placeholder="Módulo" />
        </div>
    );
};

export default ClassInfoContainer;
