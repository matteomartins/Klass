import React from "react";

import "./styles.css";

interface ContentCardProps {
    title: string;
    text: string;
    color: string;
    small?: boolean;
    rounded?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({
    title,
    text,
    color,
    small,
    rounded,
}) => {
    return (
        <div
            className={`${small ? "small-" : ""}content-card-container ${
                rounded ? "rounded" : ""
            }`}
        >
            <h1 style={{ background: color }}>{title}</h1>
            <span>{text}</span>
        </div>
    );
};

export default ContentCard;
