import React, {useState} from 'react';
import YouTube from 'react-youtube';
import { useHistory } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import './styles.css';

import Checkbox from '../../components/Checkbox';
import {KaCircleOutline, KaCircleSelected } from '../../assets/icons';
import themeLight from '../../assets/images/print-light.jpg';
import themeDark from '../../assets/images/print-dark.jpg';
import themeLightMobile from '../../assets/images/print-mobile-light.jpg';
import themeDarkMobile from '../../assets/images/print-mobile-dark.jpg';
import Terms from '../../utils/Terms';
import { useTheme } from '../../context/Theme';
import BackButton from '../../components/BackButton';
import TruncatedContainer from '../../components/TruncatedContainer';

function FirstAccess(){
    const [step, setStep] = useState(0);
    const { setTheme } = useTheme();
    const [ mode, setMode ] = useState('foward');
    const history = useHistory();

    function handleNext() {
        if(step===2) history.push('/home');
        setMode('foward')
        setStep(step+1);
    }
    function handleBack(e:any) {
        e.preventDefault();
        setMode('backward');
        setStep(step-1);
    }
    
    function termsScreen() {
        return (
            <TruncatedContainer title="Termos de Uso" className="terms-container">
                <Terms  className="terms-text" />
                <Checkbox label="Li e concordo com os Termos de Uso" name="according"/>
            </TruncatedContainer>
        )
    }
    function themeScreen() {
        return (
            <TruncatedContainer title="Tema" className="theme-container">
                <h1 className="title"> Escolha um tema </h1>
                <div className="themes">
                    <div onClick={() => setTheme('light')}>
                        <div className="light">
                            <img src={themeLight} alt="Klass"/>
                            <img src={themeLightMobile} alt="Klass"/>
                            <h2 id="text-light">Claro</h2>
                        </div>
                    </div>
                    <div onClick={() => setTheme('dark')}>
                        <div className="dark">
                            <img src={themeDark} alt="Klass"/>
                            <img src={themeDarkMobile} alt="Klass"/>
                            <h2 id="text-dark">Escuro</h2>
                        </div>
                    </div>
                </div>
            </TruncatedContainer>
        )
    }
    function presentationScreen(){
        return (
            <TruncatedContainer title="Apresentação" className="presentation-container">
                <YouTube className="video" videoId="Zc1OOS4aMbU" />
            </TruncatedContainer>
        )
    }

    const screens = [termsScreen, themeScreen, presentationScreen];

    return(
        <div className="access-container">
            <BackButton to="/" onClick={e  => handleBack(e)} style={{display: step===0?"none":"block"}} />
            <div className={mode}>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                    timeout={400}
                    classNames="fade"
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
    )
}

export default FirstAccess;