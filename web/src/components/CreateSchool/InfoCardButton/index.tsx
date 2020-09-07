import React from "react";

import { KaClose } from "../../../assets/icons";
import "./styles.css";

interface InfoCardButtonProps {
    handleDelete: Function;
    index: number;
    name: string;
    text: string;
    group: string;
    checked: boolean;
    handleCheck: Function;
}

const InfoCardButton: React.FC<InfoCardButtonProps> = ({
    handleDelete,
    index,
    name,
    text,
    group,
    checked,
    handleCheck,
}) => {
    return (
        <div key={name} className="creation-card">
            <input
                id={name}
                type="radio"
                name={group}
                value={name}
                checked={checked}
                onChange={() => handleCheck(index)}
            />
            <label htmlFor={name}>{text}</label>
            <button onClick={() => handleDelete(name)}>
                <KaClose />
            </button>
        </div>
    );
};

export default InfoCardButton;
