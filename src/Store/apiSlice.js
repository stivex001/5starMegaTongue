/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice= createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://datahubsapi.prisca.5starcompany.com.ng/api",
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({})
});
