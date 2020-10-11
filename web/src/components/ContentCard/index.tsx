import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    text: string;
    color: string;
    to?: string;
    small?: boolean;
    rounded?: boolean;
    img?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
    title,
    text,
    color,
    small,
    rounded,
    to,
    img,
    ...rest
}) => {
    const ContentOfCard = (element:any) => {
        if(to) {
            return (
                <Link to={to}>
                    {element.children}
                </Link>
            )
        }
        return (
            <>
                {element.children}
            </>
        )
    }

    return (
        <div
            className={`${small ? "small-" : ""}content-card-container ${rounded ? "rounded" : ""}`}
            {...rest}
        >
            <ContentOfCard>
                {(()=>{
                    if(img) return <img src={img} onError={() => <h1 style={{ background: color }}>{title}</h1>} alt="imagem" />
                    else return <h1 style={{ background: color }}>{title}</h1>
                })()}
                <span>{text}</span>
            </ContentOfCard>
        </div>
    );
};

export default ContentCard;
