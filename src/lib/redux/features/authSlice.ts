import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: null | { id: string; name: string; email: string };
  token: string | null;
}

const initialState: AuthState = {
  user: { id: "1", name: "Mk", email: "" },
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: AuthState["user"]; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setAccessToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setCredentials, logout, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
