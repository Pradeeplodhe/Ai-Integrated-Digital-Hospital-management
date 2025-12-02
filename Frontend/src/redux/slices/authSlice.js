import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,       // user data (name, email…)
  role: null,       // "patient" | "doctor" | "hospital"
  token: null,      // JWT token
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },

    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },

    authError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  startLoading,
  loginSuccess,
  logoutUser,
  authError,
} = authSlice.actions;

export default authSlice.reducer;