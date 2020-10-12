import React, { useState } from "react";

import { ClassProps, ModuleProps, TurnProps } from "../../../../utils/CommonInterfaces";
import CreateCardSection from "../CreateCardSection";

import "./styles.css";
import ClassInfoContainer from "../ClassInfoContainer";
import TruncatedContainer from "../../../../components/TruncatedContainer";

interface Create6Props {
    classes: Array<ClassProps>;
    setClasses: Function;
    turns: Array<TurnProps>;
    modules: Array<ModuleProps>;
}

const Create6: React.FC<Create6Props> = ({ classes, setClasses, turns, modules }) => {
    const [selectedClass, setSelectedClass] = useState(-1);

    function removeClass(name: string) {
        let newClasses = classes;
        const deleted = newClasses.find(
            (deletedContent) => deletedContent.id === name
        );
        if (deleted) {
            const index = newClasses.indexOf(deleted);
            newClasses.splice(index, 1);
            setClasses([...newClasses]);
        }
    }

    function addClass(name: string) {
        const newClasses = classes;
        newClasses.push({ id: name, title: name });
        setClasses([...newClasses]);
    }

    return (
        <>
            <TruncatedContainer
                title="Criar"
                className="create-school-container"
            >
                <div className="create-school-content">
                    <h1>Crie Turmas</h1>
                    <div className="creation-group">
                        <div className="creation-container">
                            <div className="creation-header">
                                <h1>Turmas</h1>
                            </div>
                            <CreateCardSection
                                cards={classes}
                                removeCard={removeClass}
                                addCard={addClass}
                                selectedCard={selectedClass}
                                setSelectedCard={setSelectedClass}
                                placeholder="Nova Turma"
                            />
                        </div>
                        <div className="creation-container">
                            <div className="creation-header">
                                <h1>Informações</h1>
                            </div>
                            <ClassInfoContainer 
                                turns={turns} 
                                modules={modules} 
                                classes={classes}
                                setClasses={setClasses}
                                selectedClass={selectedClass} 
                            />
                        </div>
                    </div>
                </div>
            </TruncatedContainer>
        </>
    );
};

export default Create6;
