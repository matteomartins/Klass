import React from 'react';
import { useTheme } from '../../context/Theme';

import './styles.css';

interface ContainerTruncatedProps {
    title: string;
}

const ContainerTruncated:React.FC<ContainerTruncatedProps> = ({children, title}) => {
    const { theme } = useTheme();

    return (
        <div className={`container-truncated container-bg-${theme}`}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default ContainerTruncated;