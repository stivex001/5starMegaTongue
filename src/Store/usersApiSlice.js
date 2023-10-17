import { apiSlice } from "./apiSlice";

const USERS_URL = "http://newmegatongueapi.staging.5starcompany.com.ng/api";

export const UsersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    forgotUser: builder.mutation({
        query: (data) => ({
          url: `${USERS_URL}/register`,
          method: "POST",
          body: data,
        }),
      }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    buyAirtime: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/purchase-airtime`,
        method: "POST",
        body: data,
      }),
    }),
    getAirtime: builder.query({
      query: () => ({
        url: `${USERS_URL}/list-airtime`,
        method: "GET",
      })
    })
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useUpdateUserMutation,
  useGetAirtimeQuery,
  useBuyAirtimeMutation,
} = UsersApiSlice;
