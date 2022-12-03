import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { token } }) => {
      state.token = token;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.signUp.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.data.token;
          state.isLoggedIn = true;
        })
      .addMatcher(
        authApi.endpoints.logIn.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.data.token;
          state.isLoggedIn = true;
        })
      .addMatcher(authApi.endpoints.logOut.matchFulfilled, state => {
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(authApi.endpoints.getCurrent.matchPending, state => {
        state.isRefreshing = true;
      })
      .addMatcher(
        authApi.endpoints.getCurrent.matchFulfilled, state => {
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      );
  },
});

export const selectCurrentUser = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const isRefreshing = state => state.auth.isRefreshing;
export const { setCredentials } = authSlice.actions;
