import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62cbd68ba0800529309fa315.mockapi.io/api/',
  }),
  endpoints: builder => ({
    getContactsByID: builder.query({
      query: id => `contacts/${id}`,
    }),
    getContacts: builder.query({
      query: () => 'contacts',
    }),
  }),
});
console.log(contactsApi);

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsByIDQuery, useGetContactsQuery } = contactsApi;
