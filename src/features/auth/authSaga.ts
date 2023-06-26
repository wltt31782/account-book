import { call, put, take, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { auth, googleAuthProvider } from '@/configs/firebase';
import {
  UserCredential,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  signInWithPopup,
} from 'firebase/auth';
import {
  logIn,
  logInWithGoogle,
  logInSuccess,
  logInFailure,
  signUp,
  signUpSuccess,
  signUpFailure,
  logOut,
  logOutSuccess,
  logOutFailure,
  watchAuthState,
} from './authSlice';
import { EventChannel, eventChannel } from 'redux-saga';

function* logInSaga(action: PayloadAction<{ email: string; password: string }>) {
  try {
    const { email, password } = action.payload;
    const userCredential: UserCredential = yield call(signInWithEmailAndPassword, auth, email, password);
    yield put(logInSuccess(userCredential.user));
  } catch (error: any) {
    yield put(logInFailure(error.message));
  }
}
function* logInWithGoogleSaga() {
  try {
    const userCredential: UserCredential = yield call(signInWithPopup, auth, googleAuthProvider);
    yield call(window.addEventListener, 'beforeunload', () => {
      logInFailure('');
    });
    yield put(logInSuccess(userCredential.user));
  } catch (error: any) {
    yield put(logInFailure(error.message));
  }
}

function* signUpSaga(action: PayloadAction<{ email: string; password: string }>) {
  try {
    const { email, password } = action.payload;
    const userCredential: UserCredential = yield call(createUserWithEmailAndPassword, auth, email, password);
    yield put(signUpSuccess(userCredential.user));
  } catch (error: any) {
    yield put(signUpFailure(error.message));
  }
}

function* logOutSaga() {
  try {
    yield call(signOut, auth);
    yield put(logOutSuccess());
  } catch (error: any) {
    yield put(logOutFailure(error.message));
  }
}

function* watchAuthStatSaga() {
  try {
    yield put(watchAuthState());
    const channel: EventChannel<{ user: User | null }> = yield call(authStateChannel);
    while (true) {
      const { user } = yield take(channel);
      if (user) {
        yield put(logInSuccess(user));
      } else {
        yield put(logOutSuccess());
      }
    }
  } catch (error: any) {
    yield put(logInFailure(error.message));
  }
}

function authStateChannel() {
  return eventChannel((emit) => {
    const unsubscribe = auth.onAuthStateChanged((user) => emit({ user }));
    return () => unsubscribe();
  });
}

export function* authSaga() {
  yield takeEvery(logIn.type, logInSaga);
  yield takeEvery(logInWithGoogle.type, logInWithGoogleSaga);
  yield takeEvery(signUp.type, signUpSaga);
  yield takeEvery(logOut.type, logOutSaga);
  yield watchAuthStatSaga();
}
