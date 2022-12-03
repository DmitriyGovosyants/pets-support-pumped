import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://petly-node-rest-api.onrender.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    getCurrent: builder.query({
      query: () => `/auth/current`,
      providesTags: ['Auth'],
    }),
    signUp: builder.mutation({
      query: value => ({
        url: `/auth/signup`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    logIn: builder.mutation({
      query: value => ({
        url: `/auth/login`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Auth'],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useGetCurrentQuery,
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
} = authApi;
