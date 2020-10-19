import React from 'react';
import { useSelector } from 'react-redux';
import { AuthState } from '../store/modules/auth/types';
import Auth from './auth.routes';
import Main from './app.routes';

interface State {
  auth: AuthState;
}

const AuthRoutes: React.FC = () => {
  const { isSignedIn } = useSelector((state: State) => state.auth);

  return isSignedIn ? <Main /> : <Auth />;
};

export default AuthRoutes;
