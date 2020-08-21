import React from 'react';

import Routes from './routes';
import ThemeProvider from './context/Theme';

import './assets/styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
