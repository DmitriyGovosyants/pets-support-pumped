import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const friendsApi = createApi({
  reducerPath: 'friendsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://petly-node-js-rest-api-v2.onrender.com/api',
  }),
  tagTypes: ['Friends'],
  endpoints: builder => ({
    getFriends: builder.query({
      query: () => '/services',
      providesTags: ['Friends'],
    }),
  }),
});

export const { useGetFriendsQuery } = friendsApi;
