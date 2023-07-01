import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { AuthState } from '@/types/models';

const initAuthState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthState,
  reducers: {
    logIn(state, action: PayloadAction<{ email: string; password: string }>) {
      state.user = null;
      state.loading = true;
      state.error = null;
    },
    logInWithGoogle(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    logInSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    logInFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    signUp(state, action: PayloadAction<{ email: string; password: string }>) {
      state.user = null;
      state.loading = true;
      state.error = null;
    },
    signUpSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logOut(state) {
      state.loading = true;
      state.error = null;
    },
    logOutSuccess(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    logOutFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    watchAuthState(state) {
      state.user = null;
      state.loading = true;
      state.error = null;
    },
  },
});

export const {
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
} = authSlice.actions;

export default authSlice.reducer;
