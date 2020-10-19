import { AuthState, AuthAction } from './types';

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
  token: null,
  name: null,
};

export default function authReducer(
  state = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };

    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        token: action.payload.token,
        name: action.payload.name,
        isSignedIn: true,
      };

    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: false,
      };

    default:
      return state;
  }
}
