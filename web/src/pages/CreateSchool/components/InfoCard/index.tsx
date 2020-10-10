import React from "react";

import { KaClose } from "../../../assets/icons";
import "./styles.css";

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
    handleDelete?: Function;
    id: string;
    title: string;
    style?: Object;
    isDragging?: any;
}

const InfoCard: React.FC<InfoCardProps> = ({
    handleDelete,
    id,
    title,
    style,
    isDragging,
    ...rest
}) => {
    return (
        <div key={id} className="creation-card" style={style} {...rest}>
            <label
                style={{
                    background: isDragging
                        ? "var(--color-background-selected)"
                        : "var(--color-background)",
                }}
            >
                {title}
            </label>
            {(() => {
                if (handleDelete) {
                    return (
                        <button
                            onClick={() => handleDelete(id)}
                            style={{ display: isDragging ? "none" : "flex" }}
                        >
                            <KaClose />
                        </button>
                    );
                }
            })()}
        </div>
    );
};

export default InfoCard;
