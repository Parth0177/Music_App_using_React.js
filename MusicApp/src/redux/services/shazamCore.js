import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'YOUR_API_KEY');
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => ({
        url: '/charts/world',
        params: { locale: 'en-US' } // required
      })
    })
  })
});

export const { useGetTopChartsQuery } = shazamCoreApi;
