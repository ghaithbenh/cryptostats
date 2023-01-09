import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateUserRequestDto } from "../dto/create-user-request.dto";
import { User } from "../models/user.model";
import { CreateUserInput } from "../utils/CreateUserInput.type";

export const UsersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    // ability to send and receive data from backend
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation<CreateUserInput, CreateUserRequestDto>({
      query: (createUserRequest) => ({
        url: "/users/create",
        method: "POST",
        body: createUserRequest,
      }),
    }),
    getUser: builder.query<User, undefined>({
      query: () => ({ url: "http://localhost:3001" }),
    }),
  }),
});
export const { useCreateUserMutation, useGetUserQuery } = UsersApi;
export default UsersApi.reducer;
