import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./Interceptor";

export const apiSlice: any = createApi({
    reducerPath: "API",
    baseQuery: baseQueryWithReauth,
    refetchOnFocus: true,
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        getParams: builder.query({
            query: (name) => ({
                url: `mango/getList`,
                method: "POST",
                //params: { name: name.params },
            }),
        }),
        getList: builder.mutation({
            query() {
                return {
                    url: `mango/getList`,
                    method: "POST",
                    //params: { name: params },
                    //body,
                };
            },
            invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
        }),

    }),
});

export const {
    useGetListMutation,
    useGetParamsQuery,
} = apiSlice;
