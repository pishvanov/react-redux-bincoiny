import { combineReducers } from 'redux';

import historyReducer from './historyReducer';
import walletReducer from './walletReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  historyReducer,
  walletReducer,
  errorReducer,
  authReducer,
});

export default reducers;
