import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';

import { persistor, store } from './redux/store';
import Dashboard from './components/Dashboard';
import theme from './theme/theme';

import './index.css';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Dashboard />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
