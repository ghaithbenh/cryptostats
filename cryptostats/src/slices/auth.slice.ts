import { RootState } from "./../app/store";
import { User } from "./../models/user.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user?: User;
}

const initialState: AuthState = {
  user: undefined,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, { payload: { user } }: PayloadAction<AuthState>) => {
      state.user = user;
    },
  },
});

export const { setAuthState } = userSlice.actions;
export default userSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
