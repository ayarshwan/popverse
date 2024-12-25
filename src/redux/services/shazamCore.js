import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'YOUR_RAPIDAPI_KEY');  // Replace with your RapidAPI key
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/browse_all/',  // Spotify endpoint to get top charts
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
