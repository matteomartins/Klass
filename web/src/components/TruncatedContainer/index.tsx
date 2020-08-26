import React, { HTMLAttributes } from 'react';
import { useTheme } from '../../context/Theme';

import './styles.css';

interface TruncatedContainerProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    className?: string;
}

const TruncatedContainer:React.FC<TruncatedContainerProps> = ({children, title, className = "", ...rest}) => {
    const { theme } = useTheme();

    return (
        <div className={`${className} container-truncated container-bg-${theme}`}  {...rest}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default TruncatedContainer;