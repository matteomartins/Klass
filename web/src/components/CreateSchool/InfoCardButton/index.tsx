import React from "react";

import { KaClose } from "../../../assets/icons";
import "./styles.css";

interface InfoCardButtonProps {
    handleDelete: Function;
    index: number;
    id: string;
    title: string;
    group: string;
    checked: boolean;
    handleCheck: Function;
    disableDelete?: boolean;
}

const InfoCardButton: React.FC<InfoCardButtonProps> = ({
    handleDelete,
    index,
    id,
    title,
    group,
    checked,
    handleCheck,
    disableDelete,
}) => {
    return (
        <div key={id} className="creation-card">
            <input
                id={id}
                type="radio"
                name={group}
                value={id}
                checked={checked}
                onChange={() => handleCheck(index)}
            />
            <label htmlFor={id}>{title}</label>
            <button
                style={{ display: disableDelete ? "none" : "flex" }}
                onClick={() => handleDelete(id)}
            >
                <KaClose />
            </button>
        </div>
    );
};

export default InfoCardButton;
