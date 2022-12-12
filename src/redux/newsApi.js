import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://petly-node-js-rest-api-v2.onrender.com/api',
  }),
  tagTypes: ['News'],
  endpoints: builder => ({
    getAllNews: builder.query({
      query: newsName => {
        if (newsName !== '') {
          return `/news?search=${newsName}`;
        }
        return '/news';
      },
      providesTags: ['News'],
    }),
  }),
});

export const { useGetAllNewsQuery } = newsApi;
