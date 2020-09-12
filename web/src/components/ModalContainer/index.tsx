import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './styles.css';
import { KaClose } from '../../assets/icons';

interface ModalContainerProps {
    active: boolean;
    setActive: Function;
    title: string;
}

const ModalContainer: React.FC<ModalContainerProps> = ({active, setActive, title, children}) => {
    const [ delayedActive, setDelayedActive ] = useState(false);

    useEffect(()=> {
        setTimeout(()=> setDelayedActive(active), 300)
    }, [active]);

    return (
        <CSSTransition
            in={active}
            timeout={300}
            classNames="slide"
            style={{display: active?'flex':delayedActive?'flex':'none'}}
        >
            <div className="main-modal-container">
                <div className="blur" onClick={()=> setActive(false)}></div>
                <div className="modal-container">
                    <div className="modal-container-header">
                        <button onClick={()=> setActive(false)}>
                            <KaClose size={16} color="var(--color-text-secondary)" />
                        </button>
                    </div>
                    <div className="modal-container-content">
                        <h1>{title}</h1>

                        {children}
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default ModalContainer;