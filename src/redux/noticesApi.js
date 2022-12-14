import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://petly-node-js-rest-api-v2.onrender.com/api',
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
      query: ({ request, page, field, search }) =>
        `/notices${request}&page=${page}${search}&field=${field}`,
      keepUnusedDataFor: 60,
      providesTags: (result, error, arg) => {
        return arg.request === '/favorites?' ?
         ['Notices', 'ChangeFavorite'] : ['Notices']
      },
        
    }),
    getFavorites: builder.query({
      query: () => '/notices/favorites?page=1&limit=1000',
      providesTags: ['Favorites'],
    }),
    addNoticeToFavourite: builder.mutation({
      query: noticeId => ({
        url: `/notices/favorites/${noticeId}`,
        method: 'PATCH',
        body: '',
      }),
      invalidatesTags: ['Favorites', 'ChangeFavorite'],
    }),
    removeNoticeFromFavourite: builder.mutation({
      query: noticeId => ({
        url: `/notices/favorites/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Favorites', 'ChangeFavorite'],
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
