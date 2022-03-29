import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga/';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const persistConfig = {
  key: 'root',
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
