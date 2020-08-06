import React, {useEffect} from 'react';

import Routes from './routes';
import './assets/styles/global.css';
import { lightTheme } from './assets/styles/colors';
// import { darkTheme } from './assets/styles/colors';

function App() {

  useEffect(() => {
    async function setTheme() {
      //const selectedTheme = await localStorage.getItem('theme');
      //const theme = selectedTheme === "dark" ? darkTheme : lightTheme;
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
