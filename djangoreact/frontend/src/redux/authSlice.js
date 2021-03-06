import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    username: '',
    access: '',
    logged: false,
  },
  reducers: {
    initializeInput: (state) => {
      state = {
        email: '',
        username: '',
        access: '',
        logged: false,
      };
      return state;
    },
    login: (state, action) => {
      const { username, access } = action.payload;
      state = { username, access };
      state.logged = true;
      return state;
    },
    register: (state, action) => {
      const { email, username } = action.payload;
      state = { email, username };
      return state;
    },
    resetpassword: (state, action) => {
      const { email } = action.payload;
      state = { email };
      return state;
    },
    resetpasswordconfirm: (state, action) => {
      // eslint-disable-next-line camelcase
      const { uid, token, new_password } = action.payload;
      state = { uid, token, new_password };
      return state;
    },
  },
});

export const { login, register, initializeInput, resetpassword, resetpasswordconfirm } = authSlice.actions;
