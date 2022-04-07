import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { persistor, store } from './redux/store';
import Root from './components/Root';
import theme from './theme/theme';

import './index.css';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Root />
            </Router>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
