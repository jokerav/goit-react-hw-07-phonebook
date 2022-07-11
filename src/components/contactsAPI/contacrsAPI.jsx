import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62cbd68ba0800529309fa315.mockapi.io/api/',
  }),
  endpoints: builder => ({
    getContactsByName: builder.query({
      query: name => `contacts/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsByNameQuery } = contactsApi;
