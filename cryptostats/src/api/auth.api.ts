import { CreateUserRequestDto } from "./../dto/create-user-request.dto";
import { CreateUserResponseDto } from "./../dto/create-user-response.dto";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<CreateUserResponseDto, CreateUserRequestDto>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
