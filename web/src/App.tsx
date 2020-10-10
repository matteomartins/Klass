import React from 'react';
import { positions, Provider } from "react-alert";

import Routes from './routes';
import ThemeProvider from './context/Theme';

import './assets/styles/global.css';
import Alert from './components/Alert';
import { AuthProvider } from './context/AuthContext';

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Provider template={Alert} {...options}>
          <Routes />
        </Provider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
