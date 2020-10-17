import React from 'react';
import { KaClose } from '../../assets/icons';

import './styles.css';
import { AlertComponentPropsWithStyle } from 'react-alert';

const Alert: React.FC<AlertComponentPropsWithStyle> = ({ message, options, style, close }) => {
    return (
        <div className="alerts-container" style={{ ...style }}>
            <div className={`alert ${options.type}`}>
                <div className="alert-header">
                    <h1>Alerta</h1>
                    <button onClick={close}>
                        <KaClose size={12} />
                    </button>
                </div>
                <div className="alert-content">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
}

export default Alert;