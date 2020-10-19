import { action } from 'typesafe-actions';

export const signInRequest = ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => action('@auth/SIGN_IN_REQUEST', { login, password });

export const signInSuccess = ({
  token,
  name,
}: {
  token: string;
  name: string;
}) => action('@auth/SIGN_IN_SUCCESS', { token, name });

export const signInFailure = () => action('@auth/SIGN_IN_FAILURE');
