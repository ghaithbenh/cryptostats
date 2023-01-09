import { CoinBaseApi } from "./coinbase.api";
import { UsersApi } from "./../api/users.api";
import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import usersReducer from "../api/users.api";
import counterReducer from "../features/counter/counterSlice";
import { AuthApi } from "../api/auth.api";
import auth from "../slices/auth.slice";

export const store = configureStore({
  reducer: {
    [UsersApi.reducerPath]: usersReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [CoinBaseApi.reducerPath]: CoinBaseApi.reducer,
    counter: counterReducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(UsersApi.middleware)
      .concat(AuthApi.middleware)
      .concat(CoinBaseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
