import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const CoinBaseApi = createApi({
  reducerPath: "coinBaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/coinbase",
    credentials: "include",
  }),
  endpoints: (build) => ({
    getPrimaryAccountTransactions: build.query<any, undefined>({
      query: () => ({
        url: "http://localhost:3001",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPrimaryAccountTransactionsQuery } = CoinBaseApi;
