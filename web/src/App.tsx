import React from 'react';
import { positions, Provider } from "react-alert";

import Routes from './routes';
import ThemeProvider from './context/Theme';

import './assets/styles/global.css';
import Alert from './components/Alert';

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT
};

function App() {
  return (
    <ThemeProvider>
      <Provider template={Alert} {...options}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
