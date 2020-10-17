import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import "./styles.css";

import { KaCircleOutline, KaCircleSelected } from "../../assets/icons";
import BackButton from "../../components/BackButton";

import PresentationScreen from "./components/PresentationScreen";
import ThemeScreen from "./components/ThemeScreen";
import TermsScreen from "./components/TermsScreen";
import { useTheme } from "../../context/Theme";

import "./styles.css";

function FirstAccess() {
    const [step, setStep] = useState(0);
    const [mode, setMode] = useState("foward");
    const history = useHistory();
    const { setTheme } = useTheme();

    function newThemeScreen() {
        return <ThemeScreen setTheme={setTheme} />;
    }

    const screens = [TermsScreen, newThemeScreen, PresentationScreen];

    function handleNext() {
        if (step === 2) history.push("/home");
        setMode("foward");
        setStep(step + 1);
    }
    function handleBack(e: any) {
        e.preventDefault();
        setMode("backward");
        setStep(step - 1);
    }

    return (
        <div className="access-container">
            <BackButton
                to="/"
                onClick={(e) => handleBack(e)}
                style={{ display: step === 0 ? "none" : "block" }}
            />
            <div className={mode}>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        timeout={400}
                        classNames="slide"
                        key={step}
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                    >
                        {screens[step]}
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className="progress-container">
                <button className="btn" onClick={handleNext}>
                    Avançar
                </button>
                <div className="progress-icons">
                    {step === 0 ? (
                        <KaCircleSelected
                            className="circle"
                            color="#fff"
                            size={18}
                        />
                    ) : (
                        <KaCircleOutline
                            className="circle"
                            color="#fff"
                            size={17}
                        />
                    )}
                    {step === 1 ? (
                        <KaCircleSelected
                            className="circle"
                            color="#fff"
                            size={18}
                        />
                    ) : (
                        <KaCircleOutline
                            className="circle"
                            color="#fff"
                            size={17}
                        />
                    )}
                    {step === 2 ? (
                        <KaCircleSelected color="#fff" size={18} />
                    ) : (
                        <KaCircleOutline color="#fff" size={17} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default FirstAccess;
