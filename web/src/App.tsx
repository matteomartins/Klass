import React, {useEffect} from 'react';

import './assets/styles/global.css';
import { lightTheme } from './assets/styles/colors';
import Routes from './routes';

function App() {
  useEffect(()=> {
    function setTheme() {
      const theme = lightTheme;
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
