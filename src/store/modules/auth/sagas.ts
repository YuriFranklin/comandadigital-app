import { ActionType } from 'typesafe-actions';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as actions from './actions';
import api from '../../../services/ApiService';
import { signInSuccess, signInFailure } from './actions';

export function* signIn(action: ActionType<typeof actions.signInRequest>) {
  try {
    const { login, password } = action.payload;

    const { data } = yield call(api.post, '/sessions', {
      username: login,
      password,
    });

    yield put(signInSuccess({ token: data.token, name: data.user.name }));
  } catch (error) {
    yield put(signInFailure());
    Alert.alert('Erro ao logar', 'Ocorreu um erro durante o login.');
    console.log('error', error);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
