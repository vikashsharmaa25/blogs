import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    signInSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    signInFail: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { signInFail, signInStart, signInSuccess, signOut } =
  authSlice.actions;

export default authSlice.reducer;
