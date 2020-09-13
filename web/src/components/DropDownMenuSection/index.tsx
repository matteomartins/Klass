import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

interface DropDownItemProps {
    id: string;
    text: string;
}

interface DropDownMenuSectionProps {
    title: string;
    items: Array<DropDownItemProps>;
}

const DropDownMenuSection: React.FC<DropDownMenuSectionProps> = ({
    title,
    items,
}) => {
    const [visible, setVisible] = useState(false);
    const [delayedVisible, setDelayedVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setDelayedVisible(visible), 300);
    }, [visible]);

    return (
        <div>
            <h1
                onClick={() => setVisible(!visible)}
                style={{
                    color: visible ? "#39729d" : "var(--color-text-secondary)",
                }}
            >
                {title}
            </h1>
            <CSSTransition
                in={visible}
                timeout={300}
                classNames="slide"
                style={{
                    display: visible
                        ? "block"
                        : delayedVisible
                        ? "block"
                        : "none",
                }}
            >
                <div className="text-container">
                    {items.map(({ id, text }) => (
                        <a href={id}>{text}</a>
                    ))}
                </div>
            </CSSTransition>
        </div>
    );
};

export default DropDownMenuSection;
