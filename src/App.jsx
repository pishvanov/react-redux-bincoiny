import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import { store } from './redux/store';
import Dashboard from './components/Dashboard';
import theme from './theme/theme';

import './index.css';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
