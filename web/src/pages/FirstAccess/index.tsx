import React, {useState} from 'react';
import YouTube from 'react-youtube';

import './styles.css';

import Checkbox from '../../components/Checkbox';
import {KaCircleOutline, KaCircleSelected, KaArrow} from '../../assets/icons';
import themeLight from '../../assets/images/print-light.jpg';
import themeDark from '../../assets/images/print-dark.jpg';
import themeLightMobile from '../../assets/images/print-mobile-light.jpg';
import themeDarkMobile from '../../assets/images/print-mobile-dark.jpg';
import Terms from '../../utils/Terms';
import { useTheme } from '../../context/Theme';
import {CSSTransition} from 'react-transition-group';


function FirstAccess(){
    const [step, setStep] = useState(0);
    const { theme, setTheme } = useTheme();

    function handleNext() {
        if(step===2) return
        setStep(step+1);
    }
    function handleBack(e:any) {
        e.preventDefault();
        setStep(step-1);
    }
    function handleLight(e:any) {
        e.preventDefault();
        setTheme('light');
    }
    function handleDark(e:any) {
        e.preventDefault();
        setTheme('dark');
    }
    return(
        <>
            <a href="/" onClick={e  => handleBack(e)} style={{display: step===0?"none":"block"}}>
                <div className="arrow">
                    <KaArrow color="#fff" size={28} />
                </div>            
            </a>
            <div className="access-container">
                <CSSTransition
                    timeout={2500}
                    classNames="fade"
                    in={(step===0?true:false)}
                    style={{display: step===0?"flex":"none"}}
                >
                    <div className={`terms-container container-bg-${theme}`}>
                        <h1> Termos de Uso </h1>
                        <div className="terms-text" >
                            <Terms />
                        </div>
                        <Checkbox label="Li e concordo com os Termos de Uso" name="according"/>
                    </div>
                </CSSTransition>

                <CSSTransition
                    timeout={3000}
                    classNames="fade"
                    in={(step===1?true:false)}
                    style={{display: step===1?"flex":"none"}}
                >
                <div className={`theme-container container-bg-${theme}`}>
                    <h1> Tema </h1>
                    <h1 className="title"> Escolha um tema </h1>
                    <div className="themes">
                        <a href="/" onClick={e => handleLight(e)}>
                            <div className="light">
                                <img src={themeLight} alt="Klass"/>
                                <img src={themeLightMobile} alt="Klass"/>
                                <h2 id="text-light">Claro</h2>
                            </div>
                        </a>
                        <a href="/" onClick={e => handleDark(e)}>
                            <div className="dark">
                                <img src={themeDark} alt="Klass"/>
                                <img src={themeDarkMobile} alt="Klass"/>
                                <h2 id="text-dark">Escuro</h2>
                            </div>
                        </a>
                    </div>
                </div>
                </CSSTransition>
                <CSSTransition
                    timeout={3000}
                    classNames="fade"
                    in={(step===2?true:false)}
                    style={{display: step===2?"flex":"none"}}
                >
                    <div className={`presentation-container container-bg-${theme}`}>
                        <h1> Apresentação </h1>
                        <YouTube className="video" videoId="Zc1OOS4aMbU" />
                    </div>
                </CSSTransition>
                <div className="progress-container">
                    <button className="btn" onClick={handleNext}>Avançar</button>
                    <div className="progress-icons"> 
                        {step===0
                            ?<KaCircleSelected className="mr-3" color="#fff" size={18}/>
                            :<KaCircleOutline className="mr-3" color="#fff" size={17} /> }
                        {step===1
                            ?<KaCircleSelected className="mr-3" color="#fff" size={18}/>
                            :<KaCircleOutline className="mr-3" color="#fff" size={17} /> }
                        {step===2
                            ?<KaCircleSelected color="#fff" size={18}/>
                            :<KaCircleOutline color="#fff" size={17} /> }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstAccess;