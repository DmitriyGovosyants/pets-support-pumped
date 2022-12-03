import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
    reducePath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://petly-node-rest-api.onrender.com/api/',
    }),
    tagTypes: ['News'],
    endpoints: builder => ({
        getAllNews: builder.query({
            query: (newsName) => {
                if (newsName !== '') {
                    return `news?search=${newsName}`;
                }
                return 'news';
            },
            providesTags: ['News'],
        }),
        getSearchNews: builder.query({
            query: newsName => `news?search=${newsName}`,
            providesTags: ['News'],
        }),
    })
});

export const { useGetAllNewsQuery, useGetSearchNewsQuery } = newsApi;
