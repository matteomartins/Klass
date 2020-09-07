import React from "react";

import { KaClose } from "../../../assets/icons";
import "./styles.css";

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
    handleDelete: Function;
    name: string;
    text: string;
    style?: Object;
    isDragging?: any;
}

const InfoCard: React.FC<InfoCardProps> = ({
    handleDelete,
    name,
    text,
    style,
    isDragging,
    ...rest
}) => {
    return (
        <div key={name} className="creation-card" style={style} {...rest}>
            <label
                style={{
                    background: isDragging
                        ? "var(--color-background-selected)"
                        : "var(--color-background)",
                }}
            >
                {text}
            </label>
            <button
                style={{ display: isDragging ? "none" : "flex" }}
                onClick={() => handleDelete(name)}
            >
                <KaClose />
            </button>
        </div>
    );
};

export default InfoCard;
