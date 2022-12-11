import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './auth-operations';
import {
  // getTransaction,
  addTransaction,
  // deleteTransaction,
} from '../transaction/transaction-operations';
const initialState = {
  user: { email: '', name: '' },
  accesToken: '',
  refreshToken: '',
  error: '',
  isLoading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.accesToken = payload.accesToken;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload.message;
    },

    [login.pending]: state => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.accesToken = payload.accesToken;

      // state.refreshToken = payload.refreshToken;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    [logout.pending]: state => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    [logout.fulfilled]: state => {
      state.user = { email: '', name: '' };
      state.isLoading = false;
      state.accesToken = '';
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [addTransaction.fulfilled]: (state, action) => {
      console.log(action);
      state.user.balance = action.payload.balance;

      // state.user.balance = action.payload.
    },
  },
});

export default authSlice.reducer;
