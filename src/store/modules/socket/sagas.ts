import { take, call, takeLatest, all, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ActionType } from 'typesafe-actions';
import createSocket from '../../../services/socket';
import * as actions from '../auth/actions';

function createSocketChannel(socket) {
  return eventChannel((emitter) => {
    socket.on('bills', (event) => {
      return emitter({ type: '@bills/UPDATE', payload: event });
    });

    const unsubscribe = () => socket.close();

    return unsubscribe;
  });
}

export function* connectSocket(
  action: ActionType<typeof actions.signInSuccess>,
) {
  const socket = yield call(createSocket, action.payload.token);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      const { type, payload } = yield take(socketChannel);
      yield put({ type, payload });
    } catch (err) {
      console.log(err);
      socketChannel.close();
    }
  }
}

export default all([takeLatest('@auth/SIGN_IN_SUCCESS', connectSocket)]);
