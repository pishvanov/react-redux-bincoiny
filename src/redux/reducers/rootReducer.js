import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import blocksReducer from './blocksReducer';
import transactionsReducer from './transactionsReducer';

const reducers = combineReducers({
  errorReducer,
  blocksReducer,
  transactionsReducer,
});

export default reducers;
