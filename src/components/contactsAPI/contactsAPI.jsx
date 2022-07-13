import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62cbd68ba0800529309fa315.mockapi.io/api/',
  }),
  tagTypes:['contacts'],
  endpoints: builder => ({
    getContactsByID: builder.query({
      query: id => `contacts/${id}`,
    }),
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags:['contacts'],
    }),
    addContact:builder.mutation({
      query: contact=>({
        url: 'contacts',
        method:'POST',
        body: {   name: contact.name,
          phone: contact.phone,}

    }),
      invalidatesTags:['contacts'],
    }),
    deleteContact:builder.mutation({
      query: id=>({
        url: `contacts/${id}`,
        method:'DELETE',
      }),
      invalidatesTags:['contacts'],
    })
  }),
});
console.log(contactsApi);

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsByIDQuery, useGetContactsQuery, useDeleteContactMutation, useAddContactMutation} = contactsApi;
