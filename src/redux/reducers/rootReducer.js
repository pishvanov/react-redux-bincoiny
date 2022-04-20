import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import walletReducer from './walletReducer';
import historyReducer from './historyReducer';
import walletInfoReducer from './walletInfoReducer';

const reducers = combineReducers({
  walletReducer,
  errorReducer,
  historyReducer,
  walletInfoReducer,
});

export default reducers;
