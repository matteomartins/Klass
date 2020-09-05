import React from "react";
import { Link, LinkProps } from "react-router-dom";

import { KaArrow } from "../../assets/icons";

import "./styles.css";

interface BackButtonProps extends LinkProps {
    to: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to, ...rest }) => {
    return (
        <Link to={to} {...rest} className="arrow">
            <KaArrow color="#fff" size={28} />
        </Link>
    );
};

export default BackButton;
