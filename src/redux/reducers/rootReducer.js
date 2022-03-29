import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import walletReducer from './walletReducer';
import historyReducer from './historyReducer';

const reducers = combineReducers({
  walletReducer,
  errorReducer,
  historyReducer,
});

export default reducers;
