import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { Reducer } from 'redux';
import rootReducer from './modules/rootReducer';

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

export default (reducers: Reducer) => {
  const persistCombinedReducers = persistCombineReducers(
    persistConfig,
    reducers,
  );

  return persistCombineReducers;
};
