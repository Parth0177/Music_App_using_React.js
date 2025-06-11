import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';



  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl:'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders:(headers)=>{
        headers.set('x-rapidapi-key','0492a28dadmshe8a8eea65b71297p167a72jsn37e1c32d2858');
        return headers;
      }
    }),
    endpoints: (builder)=>({
      GetTopCharts:builder.query({query:()=> '/charts/world'}),
    }),
  });

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;