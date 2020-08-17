import React, {useEffect} from 'react';

import './assets/styles/global.css';
import { lightTheme, darkTheme } from './assets/styles/css-vars';
import Routes from './routes';

function App() {
  useEffect(()=> {
    function setTheme() {
      const theme = localStorage.getItem('theme')==='dark'?darkTheme:lightTheme;
      theme.forEach(color => {
        document.documentElement.style.setProperty(color.name, color.value);
      });
    }
    setTheme();
  }, [])
  return (
    <Routes />
  );
}

export default App;
