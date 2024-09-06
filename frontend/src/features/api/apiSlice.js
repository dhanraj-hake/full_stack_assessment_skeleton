import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


console.log(import.meta.env)
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/user/find-all',
    }),
    getHomesForUser: builder.query({
      query: (username) => `/home/find-by-user?username=${username}`,
      providesTags : ["user-homes"]
    }),
    getUsersForHome: builder.query({
      query: (street_address) => `/user/find-by-home?street_address=${street_address}`,
      providesTags : ["home-users"],
      keepUnusedDataFor: 0,
    }),
    updateUsersForHome: builder.mutation({
      query: (data) => ({
        url: `/home/update-users`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags : ["user-homes"]
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetHomesForUserQuery,
  useGetUsersForHomeQuery,
  useUpdateUsersForHomeMutation,
} = apiSlice;
