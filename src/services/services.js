import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
    reducerPath: 'servicesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://port-ind.herokuapp.com/' }),
    endpoints: (builder) => ({
      getServices: builder.query({
        query: () => 'services',
      }),
      getServicesFromLocation: builder.query({
        query: (location) => `services/${location}`,
      }),
    }),
  })

  export const { useGetServicesQuery, useGetServicesFromLocationQuery } = servicesApi;
