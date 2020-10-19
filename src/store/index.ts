import createSagaMiddleware from 'redux-saga';
import { Middleware, createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const config = {
  key: 'appcomandadigital',
  storage: AsyncStorage,
  whitelist: ['auth'],
  debug: true,
};

const middlewares: Middleware[] = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (__DEV__) {
  middlewares.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducer);
const enhancers = [applyMiddleware(...middlewares)];

const persistConfig: any = { enhancers };

const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  console.log('Test', store.getState());
});

sagaMiddleware.run(rootSaga);

export { store, persistor };
