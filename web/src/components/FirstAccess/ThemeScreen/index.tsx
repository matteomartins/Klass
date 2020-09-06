import React, { Dispatch, SetStateAction } from "react";

import TruncatedContainer from "../../TruncatedContainer";
import themeLight from "../../../assets/images/print-light.jpg";
import themeDark from "../../../assets/images/print-dark.jpg";
import themeLightMobile from "../../../assets/images/print-mobile-light.jpg";
import themeDarkMobile from "../../../assets/images/print-mobile-dark.jpg";

import "./styles.css";

interface ThemeScreenProps {
    setTheme: Dispatch<SetStateAction<string>>;
}

const ThemeScreen: React.FC<ThemeScreenProps> = ({ setTheme }) => {
    return (
        <TruncatedContainer title="Tema" className="theme-container">
            <h1 className="title"> Escolha um tema </h1>
            <div className="themes">
                <div onClick={() => setTheme("light")}>
                    <div className="light">
                        <img src={themeLight} alt="Klass" />
                        <img src={themeLightMobile} alt="Klass" />
                        <h2 id="text-light">Claro</h2>
                    </div>
                </div>
                <div onClick={() => setTheme("dark")}>
                    <div className="dark">
                        <img src={themeDark} alt="Klass" />
                        <img src={themeDarkMobile} alt="Klass" />
                        <h2 id="text-dark">Escuro</h2>
                    </div>
                </div>
            </div>
        </TruncatedContainer>
    );
};

export default ThemeScreen;
