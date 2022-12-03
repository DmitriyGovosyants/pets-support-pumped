import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'notices',
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
  tagTypes: ['Notices'],
  endpoints: builder => ({
    getNotices: builder.query({
      query: ({ request, page, search }) =>
        `/notices${request}&page=${page}${search}`,
      keepUnusedDataFor: 60,
      providesTags: ['Notices'],
    }),
    getFavorites: builder.query({
      query: () => '/notices/favorites?page=1&limit=1000',
      providesTags: ['Notices'],
    }),
    addNoticeToFavourite: builder.mutation({
      query: noticeId => ({
        url: `/notices/favorites/${noticeId}`,
        method: 'PATCH',
        body: '',
      }),
      invalidatesTags: ['Notices'],
    }),
    removeNoticeFromFavourite: builder.mutation({
      query: noticeId => ({
        url: `/notices/favorites/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
    getPrivateNotices: builder.query({
      query: () => '/notices/private',
      providesTags: ['Notices'],
    }),
    removePrivateNotice: builder.mutation({
      query: noticeId => ({
        url: `/notices/private/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
    addNotice: builder.mutation({
      query: value => ({
        url: `/notices`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Notices'],
    }),
  }),
});

export const {
  useGetNoticesQuery,
  useGetFavoritesQuery,
  useAddNoticeToFavouriteMutation,
  useRemoveNoticeFromFavouriteMutation,
  useGetPrivateNoticesQuery,
  useRemovePrivateNoticeMutation,
  useAddNoticeMutation,
} = noticesApi;
