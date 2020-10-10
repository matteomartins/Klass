import React, { useState } from "react";

import TruncatedContainer from "../../TruncatedContainer";
import { KaArrow } from "../../../assets/icons";
import { ClassProps } from "../../../utils/CommonInterfaces";
import CreateCardSection from "../CreateCardSection";

import "./styles.css";
import ClassInfoContainer from "../ClassInfoContainer";

interface Create6Props {
    classes: Array<ClassProps>;
    setClasses: Function;
}

const Create6: React.FC<Create6Props> = ({ classes, setClasses }) => {
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
                                <KaArrow size={18} />
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
                                <KaArrow size={18} />
                            </div>
                            <ClassInfoContainer selectedClass={selectedClass} />
                        </div>
                    </div>
                </div>
            </TruncatedContainer>
        </>
    );
};

export default Create6;
