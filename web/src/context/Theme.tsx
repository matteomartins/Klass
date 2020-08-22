import React, { createContext, useState, useContext, Dispatch, SetStateAction, useEffect } from 'react';
import { lightTheme, darkTheme } from '../assets/styles/css-vars';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

const setThemeProps:Dispatcher<string> = () => null;

const ThemeContext = createContext({
    theme: '',
    setTheme: setThemeProps
});

const ThemeProvider:React.FC = ({children}) => {
    const [theme, setTheme] = useState('light');

    useEffect(()=> {
        const currentTheme = localStorage.getItem('theme')
        if(currentTheme) setTheme(currentTheme)
    }, [])

    useEffect(()=> {
        const cssVars = theme==='dark'?darkTheme:lightTheme;
        
        cssVars.forEach(color => {
            document.documentElement.style.setProperty(color.name, color.value);
        });

        const elements = document.getElementsByClassName("container-truncated");

        for(let i = 0; i<elements.length; i++) {
            const oldClasses = elements[i].className
                .replace('container-bg-dark', ' ')
                .replace('container-bg-light', ' ')
                .trimEnd();
            elements[i].className = `${oldClasses} container-bg-${theme}`;
        }

        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    const { theme, setTheme } = context;
    return { theme, setTheme };
}

export default ThemeProvider;