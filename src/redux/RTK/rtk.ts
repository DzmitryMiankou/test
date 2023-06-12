import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./Interceptor";

export const apiSlice = createApi({
  reducerPath: "API",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getDate: builder.query({
      query: (path: string) => ({
        url: `${path}`,
        method: "POST",
        //params: { name: name.params },
      }),
    }),
    /*getListd: builder.mutation({
            query() {
                return {
                    url: `mango/getList`,
                    method: "POST",
                    //params: { name: params },
                    //body,
                };
            },*/
  }),
});

export const { useGetDateQuery } = apiSlice;
