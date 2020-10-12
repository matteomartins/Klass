import React, { useEffect, useState } from "react";
import { ModuleProps, TurnProps } from "../../../../utils/CommonInterfaces";
import Select from "../Select";

interface ClassInfoContainerProps {
    selectedClass: number;
    turns: Array<TurnProps>;
    modules: Array<ModuleProps>;
    classes: Array<any>;
    setClasses: Function;
}

const ClassInfoContainer: React.FC<ClassInfoContainerProps> = ({
    selectedClass,
    turns,
    modules,
    classes,
    setClasses
}) => {
    const [turnOptions, setTurnOptions] = useState([]);
    const [modulesOptions, setModulesOptions] = useState([]);

    useEffect((() => {
        const newTurnOptions:any = [];
        const newModulesOptions:any = [];

        turns.forEach(({title}) => {
            newTurnOptions.push(title);
        })

        modules.forEach(({title}) => {
            newModulesOptions.push(title);
        })

        setTurnOptions(newTurnOptions);
        setModulesOptions(newModulesOptions);
    }), []);

    function changeTurn(value: string) {
        if(!classes) return;
        if(!classes[selectedClass]) return;
        const newClasses = classes;
        if(!newClasses[selectedClass].content) newClasses[selectedClass].content = {turn: '', module: ''}
        newClasses[selectedClass].content.turn = value;
        setClasses([...newClasses]);
    }

    function changeModule(value: string) {
        if(!classes) return;
        if(!classes[selectedClass]) return;
        const newClasses = classes;
        if(!newClasses[selectedClass].content) newClasses[selectedClass].content = {turn: '', module: ''}
        newClasses[selectedClass].content.module = value;
        setClasses([...newClasses]);
    }

    if (selectedClass === -1) {
        return (
            <div className="creation-content">
                <p>Selecione uma turma</p>
            </div>
        );
    }

    return (
        <div className="creation-content">
            <Select 
                name="turn"
                options={turnOptions} 
                placeholder="Turno" 
                value={classes[selectedClass]?.content?.turn || ''} 
                onChange={e => changeTurn(e.target.value)}
            />
            <Select 
                name="module" 
                options={modulesOptions} 
                placeholder="Módulo" 
                value={classes[selectedClass]?.content?.module || ''}  
                onChange={e => changeModule(e.target.value)}
            />
        </div>
    );
};

export default ClassInfoContainer;
